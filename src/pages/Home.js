import React from 'react';

const Home = () => {
  return (
    <div className="h-screen w-full bg-gray-200">
      {/* Header */}
      <div className="flex w-full h-[45px] p-[8px] px-[20px] py-[9px] border-b border-[#E5E7EB] bg-white opacity-100">
        <h1 className="text-[18px] font-normal leading-[28px] text-left text-[#0EA5E9]">
          Aluritter
        </h1>

        <div className="flex items-center absolute right-[20px] top-[8px] gap-0">
          <p className="w-[205px] h-[20px] mt-[3.5px] mr-[10px] font-['Roboto'] text-[14px] font-normal leading-[20px] text-right text-gray-500">
            cfernando_21@hotmail.com
          </p>

          <button className="w-[39.24px] h-[28px] p-[3.5px] px-[8.24px] rounded-[4px] bg-[#EF4444] flex items-center justify-center">
            <span className="text-[14px] font-normal leading-[20px] text-white">
              Sair
            </span>
          </button>
        </div>
      </div>

      {/* Form container */}
      <div className="flex justify-center items-start w-full mt-12">
        <div className="form w-[1200px] h-[196px] flex flex-col justify-center items-start">
          <p className="ml-2 mb-1 w-[170.56px] font-['Roboto'] text-[14px] font-normal leading-[20px] text-left text-[#4B5563] underline-offset-from-font">
            Alurite agora mesmo...
          </p>
          <form>
          <textarea className="w-[1200px] h-[114px] rounded-md border border-[#E5E7EB] bg-white"></textarea>

            <div className="flex w-full mt-4 justify-between">
              <p className="w-[300.9px]">
                <span className="font-['Roboto'] text-[14px] font-normal leading-[20px] text-left text-[#16A34A]">
                  Você ainda pode digitar 255 caracteres
                </span>
              </p>

              <button className="w-[66.49px] h-[40px] rounded-md bg-[#0EA5E9] flex items-center justify-center">
                <span className="font-['Roboto'] text-[12px] font-normal leading-[24px] text-white">
                  aluritar
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center w-full">
        <div className="w-[1200px] h-[98px] p-[20px] rounded-md border border-[#E5E7EB] bg-white mt-6 relative">
          <div className="w-full text-[#6B7280] text-[16px] font-normal leading-[24px]">
            Seven7OfCode com React =DDD
          </div>
          
          <div className="flex justify-between items-end absolute bottom-0 left-0 w-full px-[20px]">
            <span className="font-['Roboto'] text-[14px] font-normal text-[#0EA5E9]">
              matheushcastiglioni@gmail.com
            </span>
            <span className="font-['Roboto'] text-[12px] font-normal text-[#6B7280]">
              6/30/2023, 3:52:49 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
