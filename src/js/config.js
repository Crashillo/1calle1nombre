import AN from "url:../static/AN.topo.json"
import AS from "url:../static/AS.topo.json"
import AR from "url:../static/AR.topo.json"
import CN from "url:../static/CN.topo.json"
import CB from "url:../static/CB.topo.json"
import CL from "url:../static/CL.topo.json"
import CM from "url:../static/CM.topo.json"
import CT from "url:../static/CT.topo.json"
import MD from "url:../static/MD.topo.json"
import VC from "url:../static/VC.topo.json"
import PV from "url:../static/PV.topo.json"
import EX from "url:../static/EX.topo.json"
import GA from "url:../static/GA.topo.json"
import IB from "url:../static/IB.topo.json"
import RI from "url:../static/RI.topo.json"
import NC from "url:../static/NC.topo.json"
import MC from "url:../static/MC.topo.json"
import ES from "url:../static/ES.topo.json"

export const FEATURE_ID = "id"
export const FEATURE_VALUES = "values"
export const FEATURE_DESC = "name"
export const URLS = [
  [{ url: ES, prop: "ES" }],
  [
    { url: AN, code: "ES-AN", prop: "AN" },
    { url: AS, code: "ES-AS", prop: "AS" },
    { url: AR, code: "ES-AR", prop: "AR" },
    { url: CN, code: "ES-CN", prop: "CN" },
    { url: CB, code: "ES-CB", prop: "CB" },
    { url: CL, code: "ES-CL", prop: "CL" },
    { url: CM, code: "ES-CM", prop: "CM" },
    { url: CT, code: "ES-CT", prop: "CT" },
    { url: MD, code: "ES-MD", prop: "MD" },
    { url: VC, code: "ES-VC", prop: "VC" },
    { url: PV, code: "ES-PV", prop: "PV" },
    { url: EX, code: "ES-EX", prop: "EX" },
    { url: GA, code: "ES-GA", prop: "GA" },
    { url: IB, code: "ES-IB", prop: "IB" },
    { url: RI, code: "ES-RI", prop: "RI" },
    { url: NC, code: "ES-NC", prop: "NC" },
    { url: MC, code: "ES-MC", prop: "MC" }
  ]
]

export const ELEMENTS = [
  {
    value: "Araba/Álava",
    group: "ES-PV",
    code: "01"
  },
  {
    value: "Albacete",
    group: "ES-CM",
    code: "02"
  },
  {
    value: "Alacant/Alicante",
    group: "ES-VC",
    code: "03"
  },
  {
    value: "Almería",
    group: "ES-AN",
    code: "04"
  },
  {
    value: "Ávila",
    group: "ES-CL",
    code: "05"
  },
  {
    value: "Badajoz",
    group: "ES-EX",
    code: "06"
  },
  {
    value: "Illes Balears",
    group: "ES-IB",
    code: "07"
  },
  {
    value: "Barcelona",
    group: "ES-CT",
    code: "08"
  },
  {
    value: "Burgos",
    group: "ES-CL",
    code: "09"
  },
  {
    value: "Cáceres",
    group: "ES-EX",
    code: "10"
  },
  {
    value: "Cádiz",
    group: "ES-AN",
    code: "11"
  },
  {
    value: "Castelló/Castellón",
    group: "ES-VC",
    code: "12"
  },
  {
    value: "Ciudad Real",
    group: "ES-CM",
    code: "13"
  },
  {
    value: "Córdoba",
    group: "ES-AN",
    code: "14"
  },
  {
    value: "A Coruña",
    group: "ES-GA",
    code: "15"
  },
  {
    value: "Cuenca",
    group: "ES-CM",
    code: "16"
  },
  {
    value: "Girona",
    group: "ES-CT",
    code: "17"
  },
  {
    value: "Granada",
    group: "ES-AN",
    code: "18"
  },
  {
    value: "Guadalajara",
    group: "ES-CM",
    code: "19"
  },
  {
    value: "Gipuzkoa",
    group: "ES-PV",
    code: "20"
  },
  {
    value: "Huelva",
    group: "ES-AN",
    code: "21"
  },
  {
    value: "Huesca",
    group: "ES-AR",
    code: "22"
  },
  {
    value: "Jaén",
    group: "ES-AN",
    code: "23"
  },
  {
    value: "León",
    group: "ES-CL",
    code: "24"
  },
  {
    value: "Lleida",
    group: "ES-CT",
    code: "25"
  },
  {
    value: "La Rioja",
    group: "ES-RI",
    code: "26"
  },
  {
    value: "Lugo",
    group: "ES-GA",
    code: "27"
  },
  {
    value: "Comunidad de Madrid",
    group: "ES-MD",
    code: "28"
  },
  {
    value: "Málaga",
    group: "ES-AN",
    code: "29"
  },
  {
    value: "Región de Murcia",
    group: "ES-MC",
    code: "30"
  },
  {
    value: "Navarra - Nafarroa",
    group: "ES-NC",
    code: "31"
  },
  {
    value: "Ourense",
    group: "ES-GA",
    code: "32"
  },
  {
    value: "Asturias/Asturies",
    group: "ES-AS",
    code: "33"
  },
  {
    value: "Palencia",
    group: "ES-CL",
    code: "34"
  },
  {
    value: "Las Palmas",
    group: "ES-CN",
    code: "35"
  },
  {
    value: "Pontevedra",
    group: "ES-GA",
    code: "36"
  },
  {
    value: "Salamanca",
    group: "ES-CL",
    code: "37"
  },
  {
    value: "Santa Cruz de Tenerife",
    group: "ES-CN",
    code: "38"
  },
  {
    value: "Cantabria",
    group: "ES-CB",
    code: "39"
  },
  {
    value: "Segovia",
    group: "ES-CL",
    code: "40"
  },
  {
    value: "Sevilla",
    group: "ES-AN",
    code: "41"
  },
  {
    value: "Soria",
    group: "ES-CL",
    code: "42"
  },
  {
    value: "Tarragona",
    group: "ES-CT",
    code: "43"
  },
  {
    value: "Teruel",
    group: "ES-AR",
    code: "44"
  },
  {
    value: "Toledo",
    group: "ES-CM",
    code: "45"
  },
  {
    value: "València/Valencia",
    group: "ES-VC",
    code: "46"
  },
  {
    value: "Valladolid",
    group: "ES-CL",
    code: "47"
  },
  {
    value: "Bizkaia",
    group: "ES-PV",
    code: "48"
  },
  {
    value: "Zamora",
    group: "ES-CL",
    code: "49"
  },
  {
    value: "Zaragoza",
    group: "ES-AR",
    code: "50"
  }
]
