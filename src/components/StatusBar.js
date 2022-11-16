import Icon1 from "../assets/status bar icons/Icon1.js";
import Icon2 from "../assets/status bar icons/Icon2.js";
import Icon3 from "../assets/status bar icons/Icon3.js";
import Icon4 from "../assets/status bar icons/Icon4.js";
import Icon5 from "../assets/status bar icons/Icon5.js";
import Icon6 from "../assets/status bar icons/Icon6.js";
import Icon7 from "../assets/status bar icons/Icon7.js";
import Icon8 from "../assets/status bar icons/Icon8.js";
import Icon9 from "../assets/status bar icons/Icon9.js";
import Icon10 from "../assets/status bar icons/Icon10.js";

export default function StatusBar() {
  return (
    <div className="flex bg-status-bar justify-between px-3 ">
      <div className="left flex gap-3">
        <Icon1 />
        <Icon2 />
        <Icon3 />
      </div>
      <div className="right flex gap-3">
        <Icon4 />
        <Icon5 />
        <Icon6 />
        <Icon7 />
        <Icon8 />
        <Icon9 />
        <Icon10 />
      </div>
    </div>
  );
}
