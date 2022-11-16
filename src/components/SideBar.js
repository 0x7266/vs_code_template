export default function SideBar() {
  return (
    <div className="projects w-2/12 bg-side-bar flex flex-col text-neutral-400 ">
      <div className="explorer-title p-3 text-xs">EXPLORER</div>
      <div className="explorer flex-1 px-3 text-sm">
        <div className="folder-name font-semibold">&gt; RAFAEL</div>
        <div className="folder px-3">
          <div className="subfolder-name">&gt; node_modules</div>
          <div className="src">
            <div className="subfolder-name">v src</div>
            <div className="div px-3">
              <div className="subfolder-name">&gt; projetos</div>
              <div className="subfolder-name">&gt; sobre</div>
              <div className="subfolder-name">&gt; contato</div>
            </div>
          </div>
        </div>
      </div>
      <div className="OUTLINE text-sm font-semibold">
        <div className="explorer-title px-3 border border-t-1 border-l-0 border-r-0 border-b-0 border-neutral-700">
          &gt; OUTLINE
        </div>
      </div>
      <div className="TIMELINE text-sm font-semibold">
        <div className="explorer-title px-3 border border-t-1 border-l-0 border-r-0 border-b-0 border-neutral-700">
          &gt; TIMELINE
        </div>
      </div>
    </div>
  );
}
