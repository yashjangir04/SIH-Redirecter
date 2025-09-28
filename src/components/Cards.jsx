import React from "react";

const Cards = ({modelName , desc , link , imgNo}) => {
    const handleClick = () => {
        window.location.href = link ;
    }

  return (
    <div
      className="w-[300px] h-[330px] bg-green-300 rounded-3xl transition-all duration-500 relative flex flex-col items-center px-[20px] group hover:translate-y-[-4px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="image w-[160px] h-[150px] transition-all duration-500 bg-green-700 absolute top-[-40px] rounded-lg group-hover:translate-y-[1px] overflow-hidden">
        <img src={`/${imgNo}.png`} alt="" />
      </div>
      <h1 className=" mt-[140px] dm-sans tracking-tight text-xl text-green-900">
        {modelName}
      </h1>
      <div className="about flex flex-col items-center transition-all duration-800 w-full mt-[2px]">
        <p className="poppins-regular text-center text-black mt-2">
          {desc}
        </p>
        <button className="mt-[25px] bg-green-500 px-4 py-2 rounded-md group cursor-pointer transition-all duration-300 hover:bg-green-600">
          Try Now
        </button>
      </div>
    </div>
  );
};

export default Cards;
