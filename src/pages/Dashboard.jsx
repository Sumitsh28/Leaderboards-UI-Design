import Menu from "../components/Menu";
import PlayOptions from "../components/PlayOptions";
import Stats from "../components/Stats";

function Dashboard() {
  return (
    <div className="grid lg:grid-cols-12 h-screen w-screen">
      <div className="lg:col-span-2">
        <Menu />
      </div>
      <div className="lg:col-span-7 lg:border-l-[0.4px] border-[#ffffff38]">
        <PlayOptions />
      </div>
      <div className="lg:col-span-3 lg:block hidden">
        <Stats />
      </div>
    </div>
  );
}

export default Dashboard;
