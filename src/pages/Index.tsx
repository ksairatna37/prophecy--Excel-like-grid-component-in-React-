
import Fontsection from "../Components/Fontsection";
import Mainnav from "../Components/Mainnav";
import Undosection from "../Components/Undosection";
import Clipboardsection from "../Components/Clipboardsection";
import "./index.css";
import Alignmentsection from "../Components/Alignmentsection";
import Notavailable from "../Components/Notavailable";
import ExcelGrid from "../Components/Excelgrid";

const Index = () => {

    return (
        <div className="main">
            <Mainnav></Mainnav>
            <div className="bottomcontainer">
                <div className="bottomcontainerchild1">
                    <div className="bottomcontainerchild1tab-bar">
                        <Undosection></Undosection>
                        <Clipboardsection></Clipboardsection>
                        <Fontsection></Fontsection>
                        <Alignmentsection></Alignmentsection>

                        <div className="vertical-line"></div>

                        <Notavailable></Notavailable>
                    </div>
                </div>
                <div className="bottomcontainerchild1 bottomcontainerchild2">
                    <ExcelGrid rows={10} cols={10} />
                </div>


            </div>
        </div>
    );
};

export default Index;

