import Icon0 from "../assets/side panel icons/Icon0.js";
import Icon1 from "../assets/side panel icons/Icon1.js";
import Icon2 from "../assets/side panel icons/Icon2.js";
import Icon3 from "../assets/side panel icons/Icon3.js";
import Icon4 from "../assets/side panel icons/Icon4.js";
import Icon5 from "../assets/side panel icons/Icon5.js";
import Icon6 from "../assets/side panel icons/Icon6.js";

export default function ActivityBar() {
  return (
    <div className="about bg-neutral-800 h-full max-w-fit p-3 flex flex-col justify-between">
      <div className="flex flex-col gap-6 ">
        <Icon0 />
        <Icon1 />
        <Icon2 />
        <Icon3 />
        <Icon4 />
      </div>
      <div className="flex flex-col gap-6">
        <Icon5 />
        <Icon6 />
      </div>
    </div>
  );
}
