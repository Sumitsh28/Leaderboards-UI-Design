import pro from "../assets/pro.svg";

function History() {
  return (
    <div className="w-full h-[62.4px] bg-[#161A1E] rounded-xl flex flex-row justify-between">
      <div className="flex flex-row items-center justify-center ml-5 gap-5">
        <div className="relative">
          <img
            src="https://api.multiavatar.com/Binx Bond.svg"
            className="w-[40px] h-[40px] z-0 top-0 left-0"
          />
          <img
            src={pro}
            className="w-[30px] h-[13px] z-30 absolute top-8 left-1"
          />
        </div>
        <h1 className="text-white font-sans">Sumit Shandillya</h1>
      </div>
      <div className="flex flex-row items-center 2xl:gap-20 xl:gap-14 lg:gap-8 md:gap-5 gap-5 mr-5">
        <h1 className="text-[#CBD1E1] font-sans font-thin">140891.89</h1>
        <h1 className="text-[#CBD1E1] font-sans font-thin">(200 targets)</h1>
        <h1 className="text-[#CBD1E1] font-abc font-thin text-3xl">#04</h1>
      </div>
    </div>
  );
}

export default History;
