import { geoMercator, geoPath } from "d3-geo";
import { select } from "d3-selection";
import { dsv } from "d3-fetch";
import { extent } from "d3-array";
import { interval } from "d3-timer";
import { transition } from "d3-transition";
import { scaleQuantile } from "d3-scale";
import { schemeGreens } from "d3-scale-chromatic";
import { zoom, zoomIdentity } from "d3-zoom";
import { feature } from "topojson-client";
import { percent, formatDate, get } from "./helpers";
import { ELEMENTS } from "./elements";

// constants
const INTERVAL_TIME = 2000;
const projection = geoMercator();
const range = schemeGreens[9];
const color = scaleQuantile(range).domain([0, 1]);
const z = zoom().scaleExtent([1, 8]);
const getCodmun = get('properties', 'codmun')
const getValues = get('properties', 'values')
const getNombre = get('properties', 'nombre')

// variables
let currentMonthIx = 0;
let currentFeatureIx = 0;
let geojson = null;
let months = null;
let w = 0;
let h = 0;
let tick = null;

// static elements
const map = select("#map");
const svg = map.append("svg");
const gpath = svg.append("g");
const gmonth = svg.append("g");
const tooltip = map.append("div").attr("class", "tooltip card");

const loader = map
  .append("div")
  .attr("class", "loader__container")
  .append("div")
  .attr("class", "loader");

const sidebar = map.append("div").attr("class", "sidebar");

const legendRanges = sidebar
  .append("div")
  .attr("class", "legend card")
  .selectAll(".legend__range")
  .data(range)
  .enter()
  .append("div")
  .attr("class", "legend__range");

legendRanges
  .append("i")
  .attr("class", "legend__range-square")
  .style("background-color", (d) => d);

legendRanges.append("span").text((d) => {
  const [start, end] = color.invertExtent(d);
  return `${percent(start)} - ${percent(end)}`;
});

sidebar
  .append("div")
  .attr("class", "controls card")
  .selectAll("button")
  .data(["stop", "play"])
  .enter()
  .append("button")
  .attr("id", d => d)
  .attr("class", "control__button")
  .on("click", ({ target }) => {
    if (target.id === "play") {
      if (tick !== null) {
        tick.stop();
        tick = null;
        select(target).classed("pause", true);
        return;
      }

      select(target).classed("pause", false);
      if (currentMonthIx === months.length - 1) currentMonthIx = 0;
      tick = interval(() => {
        currentMonthIx++;
        render();
        if (currentMonthIx === months.length - 1) tick.stop();
      }, INTERVAL_TIME);
    } else if (target.id === "stop") {
      currentMonthIx = 0;
      if (tick !== null) {
        tick.stop();
        tick = null;
      }
      render();
    }
  })
  .append("span")
  .attr("class", d => `control__button-${d}`);

sidebar
  .append("div")
  .attr("class", "selector card")
  .append("select")
  .on("change", ({ target: { value } }) => {
    const ix = ELEMENTS.findIndex(x => x.code === value);
    currentFeatureIx = ix < 0 ? 0 : ix;
    render();
  })
  .selectAll("option")
  .data(ELEMENTS)
  .enter()
  .append("option")
  .attr("value", x => x.code)
  .attr(
    "selected",
    ({ prop }) => prop === ELEMENTS[currentFeatureIx].prop || null
  )
  .text(x => x.value);

// map functions
const render = () => {
  const t = svg.transition().duration(INTERVAL_TIME * 0.9)

  gmonth
    .selectAll("text")
    .data(months.filter((_, ix) => currentMonthIx === ix), x => x)
    .join(
      enter => enter
        .append("text")
        .attr("x", w * 2)
        .attr("y", h * 0.9)
        .attr("dy", "-1em")
        .attr("text-anchor", "end")
        .attr("dominant-baseline", "hanging")
        .attr("fill", "white")
        .attr("font-size", "3em")
        .text(d => `${formatDate(new Date(d), { month: "long" })} '${formatDate(new Date(d), { year: "2-digit" })}`)
        .call(enter => enter.transition(t).attr("x", w * 0.9)),
      update => update,
      exit => exit.call(exit => exit.transition(t).style("opacity", 0).attr("x", w * 0.5).remove())
    );

  const features = geojson.features.filter(d => {
    const { code } = ELEMENTS[currentFeatureIx];
    if (!code) return true;
    return code === getCodmun(d).substring(0, 2);
  });
  const featuresIds = features.map(getCodmun);

  const [[x0, y0], [x1, y1]] = geoPath(projection).bounds({
    ...geojson,
    features,
  });

  z.on("zoom", ({ transform }) => gpath.attr("transform", transform));
  svg.call(z);

  svg
    .transition(t)
    .call(
      z.transform,
      zoomIdentity
        .translate(w / 2, h / 2)
        .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / w, (y1 - y0) / h)))
        .translate(-(x0 + x1) / 2, -(y0 + y1) / 2)
    );

  gpath
    .selectAll("path")
    .data(geojson.features, getCodmun)
    .join(
      enter => enter
        .append("path")
        .attr("d", d => geoPath(projection)(d))
        .attr("stroke", "#fafafa")
        .attr("stroke-width", 0.25)
        .on("mouseenter", ({ pageX, pageY, target }, d) => {
          const t = svg.transition().duration(INTERVAL_TIME / 4)
          select(target).transition(t).attr("fill", "#7d0633")

          tooltip
            .style("opacity", 1)
            .style("top", `${pageY}px`)
            .style("left", `${pageX}px`)
            .html(
              `${getNombre(d)}: <em>${percent(getValues(d)[months[currentMonthIx]])}</em>`
            );
        })
        .on("mouseleave", ({ target }) => {
          const t = svg.transition().duration(INTERVAL_TIME / 4)
          select(target)
            .transition(t)
            .attr("fill", d => color(getValues(d)[months[currentMonthIx]]));

          tooltip.style("opacity", 0);
        }),
      update => update,
      exit => exit.remove()
    )
    .transition(t)
    .attr("fill", d => featuresIds.includes(getCodmun(d)) ? color(getValues(d)[months[currentMonthIx]]) : "black")
    .attr("stroke-opacity", d => featuresIds.includes(getCodmun(d)) ? 1 : 0.25)
    .style("pointer-events", d => featuresIds.includes(getCodmun(d)) ? "auto" : "none")

  //  arc
  //    .merge(arcEnter)
  //    .transition()
  //    .duration(INTERVAL_TIME)
  //    .attr("fill", "none")
  //    .attr("stroke", "#fafafa")
  //    .attr("stroke-width", 0.5)
  //    .attr("stroke-opacity", 0.5)
  //    .attr("stroke-linejoin", "round")
  //    .attr("d", geoPath(projection)(arcs));

};

const resize = () => {
  ({ width: w, height: h } = map.node().getBoundingClientRect());
  svg.attr("viewBox", [0, 0, w, h]);
  projection.fitSize([w, h], geojson);
  render();
};

const reload = async (...promises) => {
  const [topojson] = await Promise.all(promises);
  geojson = feature(
    topojson,
    topojson.objects[ELEMENTS[currentFeatureIx].prop]
  );
  //arcs = mesh(topojson, topojson.objects[ELEMENTS[currentFeatureIx].prop], (a,b) => a !== b)

  // set the differents month-year tuples
  months = [
    ...new Set(
      geojson.features
        .map(({ properties: { values } }) => Object.keys(values))
        .flat()
    ),
  ];

  // fit & render map
  resize();

  // hide spinner
  loader.style("opacity", 0);
};

// init app
reload(fetch(ELEMENTS[currentFeatureIx].path).then((r) => r.json()));

addEventListener("resize", resize);
