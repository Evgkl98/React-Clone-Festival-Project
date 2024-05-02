import cvutLogo from "../partners/cvut_logo.png";
import dekLogo from "../partners/dek_logo.png";
import fsCvutLogo from "../partners/fs_cvut_logo.png";
import fspLogo from "../partners/fsp-logo.png";
import kampusLogo from "../partners/kampus_dejvice_logo.png";
import kantorLogo from "../partners/kantor_cafe_logo.png";
import ntkLogo from "../partners/ntk_logo.png";
import pctLogo from "../partners/pct_logo.png";
import pradastLogo from "../partners/pradast_logo.png";
import praha6Logo from "../partners/praha6_logo.png";
import psasLogo from "../partners/psas_logo.png";
import speedpressLogo from "../partners/speedpress_logo.jpg";
import suCvutLogo from "../partners/su_cvut_logo.png";
import ukKtfLogo from "../partners/uk_ktf_logo.png";
import uochbLogo from "../partners/uochb_iocb_prague_logo.png";
import ustavUdrLogo from "../partners/ustav_udr_logo.png";
import vschtLogo from "../partners/vscht_logo.png";
import { memo } from "react";


const Partners = memo(function Partners({block}) {
  return (
    <div id="partners-main" className="content">
      <div className="partners-header">Partneři projektu</div>
      <section id="partners-project-container">
        <img src={kampusLogo} className = "partner-logo" id="kampusLogo" alt="Kampus Dejvice logo" onClick={() => window.open("https://www.kampusdejvice.cz")}/>
        <img src={cvutLogo} className = "partner-logo" id="cvutLogo" alt="CVUT logo" onClick={() => window.open("https://www.cvut.cz")}/>
        <img src={vschtLogo} className = "partner-logo" id="vschtLogo" alt="VSCHT logo" onClick={() => window.open("https://www.vscht.cz")}/>
        <img src={ukKtfLogo} className = "partner-logo" id="ukKtfLogo" alt="UK Teologicka fakulta logo" onClick={() => window.open("https://www.ktf.cuni.cz")}/>
        <img src={uochbLogo} className = "partner-logo" id="uochbLogo"  alt="UOCHB logo" onClick={() => window.open("https://www.uochb.cz")}/>
        <img src={suCvutLogo} className = "partner-logo" id="suCvutLogo"  alt="Studentska Unie logo" onClick={() => window.open("https://www.su.cvut.cz/")}/>
        <img src={praha6Logo} className = "partner-logo" id="praha6Logo"  alt="Praha 6 logo" onClick={() => window.open("https://www.praha6.cz")}/>
        <img src={ntkLogo} className = "partner-logo" id="ntkLogo"  alt="NTK logo" onClick={() => window.open("https://techlib.cz")}/>
        <img src={pctLogo} className = "partner-logo" id="pctLogo"  alt="Prague City Tourism logo" onClick={() => window.open("https://www.praguecitytourism.cz")}/>
        <img src={fspLogo} className = "partner-logo" id="fspLogo"  alt="FSP logo" onClick={() => window.open("https://portal.cvut.cz/informace-pro-studenty/stipendia-nadace-granty/fond-studentskych-projektu-fsp/")}/>
        <img src={speedpressLogo} className = "partner-logo" id="speedpressLogo" alt="Speed Press logo"  onClick={() => window.open("https://speed-press.cz/")}/>
        <img
          src={ustavUdrLogo}
          className = "partner-logo"
          id="ustavUdrLogo"
          alt="Ustav ekologie VSCHT logo"
          onClick={() => window.open("https://supre.vscht.cz/")}
          
        />
        <img src={kantorLogo} className = "partner-logo" id="kantorLogo" alt="Kantor Cafe logo" onClick={() => window.open("https://www.instagram.com/kantorcoffee")}/>
        <img src={psasLogo} className = "partner-logo" id="psasLogo" alt="Prazske sluzby" onClick={() => window.open("https://www.psas.cz/")}/>
      </section>
      <div className="partners-header">Partneři stavby</div>
      <section id="partners-construction-container">
        <img src={fsCvutLogo} className = "partner-logo" id="fsCvutLogo" alt="Stavebni fakulta CVUT logo" onClick={() => window.open("https://fsv.cvut.cz")}/>
        <img src={dekLogo} className = "partner-logo" id="dekLogo" alt="DEK logo" onClick={() => window.open("https://www.dek.cz/")}/>
        <img src={pradastLogo} className = "partner-logo" id="pradastLogo" alt="Pradast logo" onClick={() => window.open("https://pradast.cz")}/>
      </section>
    </div>
  );
})

export default Partners;