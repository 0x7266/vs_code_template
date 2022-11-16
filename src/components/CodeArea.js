import Tab from "./Tab.js";
import LinesNumbers from "./LinesNumbers.js";
import Icon1 from "../assets/tabs bar icons/Icon1.js";

export default function CodeArea() {
  return (
    <div className="about bg-code-area w-full h-full flex flex-col text-neutral-400">
      <div className="tabs-area bg-tabs-bar flex justify-between items-center">
        <div className="tabs flex">
          <Tab
            file={"App.js"}
            textColor={"text-green"}
            bgColor={"bg-tab-active"}
          />
          <Tab file={"Projetos.js"} textColor={"text-green"} />
          <Tab file={"Sobre.js"} textColor={"text-yellow"} />
          <Tab file={"Contato.js"} textColor={"text-green"} />
        </div>
        <div className="flex">
          <Icon1 />
        </div>
      </div>
      <div className="breadcumbs pl-5 ">
        <p>src &gt; projetos</p>
      </div>
      <div className="code-area flex pl-8 ">
        <LinesNumbers />
      </div>
    </div>
  );
}
