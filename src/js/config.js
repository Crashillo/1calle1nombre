import AN from "url:../../static/AN.topo.json"
import AS from "url:../../static/AS.topo.json"
import AR from "url:../../static/AR.topo.json"
import CN from "url:../../static/CN.topo.json"
import CB from "url:../../static/CB.topo.json"
import CL from "url:../../static/CL.topo.json"
import CM from "url:../../static/CM.topo.json"
import CT from "url:../../static/CT.topo.json"
import MD from "url:../../static/MD.topo.json"
import VC from "url:../../static/VC.topo.json"
import PV from "url:../../static/PV.topo.json"
import EX from "url:../../static/EX.topo.json"
import GA from "url:../../static/GA.topo.json"
import IB from "url:../../static/IB.topo.json"
import RI from "url:../../static/RI.topo.json"
import NC from "url:../../static/NC.topo.json"
import MC from "url:../../static/MC.topo.json"
import CE from "url:../../static/CE.topo.json"
import ML from "url:../../static/ML.topo.json"
import ccaa from "url:../../static/ES.ccaa.topo.json"
import prov from "url:../../static/ES.prov.topo.json"

export const FEATURE_ID = "id"
export const FEATURE_VALUES = "values"
export const FEATURE_DESC = "name"
export const FEATURE_CODE = "prov"

export const URLS = [
  [{ url: ccaa }, { url: prov }],
  [
    { url: AN, code: "ES-AN" },
    { url: AS, code: "ES-AS" },
    { url: AR, code: "ES-AR" },
    { url: CN, code: "ES-CN" },
    { url: CB, code: "ES-CB" },
    { url: CL, code: "ES-CL" },
    { url: CM, code: "ES-CM" },
    { url: CT, code: "ES-CT" },
    { url: MD, code: "ES-MD" },
    { url: VC, code: "ES-VC" },
    { url: PV, code: "ES-PV" },
    { url: EX, code: "ES-EX" },
    { url: GA, code: "ES-GA" },
    { url: IB, code: "ES-IB" },
    { url: RI, code: "ES-RI" },
    { url: NC, code: "ES-NC" },
    { url: MC, code: "ES-MC" },
    { url: CE, code: "ES-CE" },
    { url: ML, code: "ES-ML" }
  ]
]
