import React from "react"
import rectangle from './assets/Frame 9.svg'
import rectangele2 from './assets/Frame 10.svg'
import siswa from './assets/siswa.png'


function HomePages() {


    return (
      <>
  
  
  <div>
  <div class="w-full overflow-hidden max-w min-h-[900px] box-border items-start flex-col justify-start bg-[#cfbeff]">
  <div class="w-full max-w-[283px] box-border mt-[150px] ml-[1150px] flex-col absolute">
    
    <img
      src={rectangele2}
      alt="rectangle"
      width="600"
      height="600"
      class="w-full h-auto m- block max-w-[600px] rounded-tl-none rounded-br-[65px] rounded-tr-[65px] rounded-bl-[65px]"
      />
</div>

    <div class="w-full max-w-[527px] mt-[200px] text-left mb-0 ml-[50px] ">
      <p class="text-[#f5f5f5] text-[36px] not-italic mt-0 text-left font-['Poppins',_sans-serif] font-bold mb-0 tracking-[0px] normal-case">HI, SAYA FAJAR ALI ROHMAN</p>
    </div>
    <div class="w-full max-w-[470px] mt-0 ml-[50px] min-h-[23px] text-left mb-10">
      <p class="text-[#f5f5f5] text-[16px] not-italic mt-0 text-left font-['Poppins',_sans-serif] font-medium mb-0 tracking-[0px] normal-case">
        Hello world!!, selamat datang di web portofolio saya
      </p>
    </div>

<div>
  <div class="gap-[10px] w-full ml-[50px] mt-5 flex relative max-w-[311px] box-border items-start justify-start">
    <div class="gap-[10px] w-full flex p-[9px] relative max-w-[152px] [border-top:2px_solid_#6b3af8] box-border items-center [border-left:2px_solid_#6b3af8] [border-right:2px_solid_#6b3af8] [border-bottom:2px_solid_#6b3af8] rounded-tl-[2px] rounded-br-[2px] rounded-tr-[2px] rounded-bl-[2px] justify-center bg-[#cfbeff]">
      <div class="w-full max-w box-border items-start flex-col justify-start">
        <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
          <p class="mt-0 text-center mb-0">
            <span class="text-[#6b3af8] text-[14px] not-italic font-['Poppins',_sans-serif] font-normal tracking-[0px] normal-case">See my portofolio</span>
          </p>
        </div>
      </div>
    </div>
    <div class="gap-[10px] w-full flex p-[10px] relative max-w-[152px] box-border items-center rounded-tl-[2px] rounded-br-[2px] rounded-tr-[2px] rounded-bl-[2px] justify-center bg-[#6b3af8]">
      <div class="w-full max-w box-border items-start flex-col justify-start">
        <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0">
          <p class="mt-0 text-center mb-0">
            <span class="text-[#ffffff] text-[14px] not-italic font-['Poppins',_sans-serif] font-normal tracking-[0px] normal-case">See my project</span>
          </p>
      </div>
  
</div>
</div>
</div>
</div>
</div>
</div>

    </>
    )
  }
  
  export default HomePages