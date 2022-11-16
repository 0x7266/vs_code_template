import JsIcon from "../assets/tabs bar icons/JsIcon.js";

export default function Tab({ file, bgColor, textColor }) {
  return (
    <div
      className={`flex items-center h-fit tab pl-4 p-2 border border-t-0 border-l-0 border-r-1 border-b-0 border-neutral-800 text-sm group w-40 ${bgColor}`}
    >
      <div className="flex gap-2">
        <JsIcon />
        <div className={`file-name flex-1 ${textColor}`}>{file}</div>
      </div>
      <button className="text-neutral-400 hidden group-hover:block">✖</button>
    </div>
  );
}
