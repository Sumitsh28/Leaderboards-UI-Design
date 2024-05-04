import Menu from "../components/Menu";
import Users from "../components/Users";

function Leaderboards_page() {
  return (
    <div className="grid lg:grid-cols-12 h-screen w-screen">
      <div className="lg:col-span-2">
        <Menu />
      </div>
      <div className="lg:col-span-7 lg:border-l-[0.4px] border-[#ffffff38]">
        <div className="flex flex-col items-center justify-center gap-20 mt-10">
          <h1 className="text-white font-medium text-xl">Leaderboards</h1>
          <div className="flex flex-col justify-center gap-5">
            {Array.from({ length: 10 }, (_, index) => (
              <Users key={index} name={"Harsh"} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboards_page;
