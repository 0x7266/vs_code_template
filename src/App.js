import ActivityBar from "./components/ActivityBar.js";
import SideBar from "./components/SideBar.js";
import CodeArea from "./components/CodeArea.js";
import StatusBar from "./components/StatusBar.js";

export default function App() {
  return (
    <div className="bg-slate-800 max-h-screen h-screen flex flex-col justify-between">
      <div className="flex h-full">
        <ActivityBar />
        <SideBar />
        <CodeArea />
      </div>
      <div className="status w-full">
        <StatusBar />
      </div>
    </div>
  );
}
