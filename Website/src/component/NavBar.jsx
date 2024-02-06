
import './Nav.css'

function NavBar() {

    return (
      <>
  <div>
  <div class="gap-[52px] w-full flex px-[20px] py-[20px] relative max-w [box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.25)] box-border items-center justify-between bg-[#ffffff]">
    <div class="w-full max-w-[45px] box-border">
      <div class="w-full max-w-[auto] mt-0 min-h-[auto] text-center mb-0"><a href="#" class="text-[#000000] text-[16px] not-italic mt-0 text-center font-['Poppins',_sans-serif] font-normal mb-0 tracking-[0px] normal-case">LOGO</a></div>
    </div>
    <div class="gap-[20px] w-full flex relative max-w-[184px] box-border items-center justify-center">
      <div class="w-full max-w-[184px] box-border">
        <div class="w-full max-w-[auto] mt- min-h-[auto] text-center mb-0">
          <p class="mt-0 text-center mb-0 ml-4 " >
            <span class="text-[#6b3af8] text-[14px] not-italic font-['Poppins',_sans-serif] font-semibold tracking-[0px] normal-case mx-5"><a href="#">Home</a></span>
            <span class="text-[#242424] text-[14px] not-italic font-['Poppins',_sans-serif] font-normal tracking-[0px] normal-case "> <a href="#">Contact</a></span>
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
      </>
    )
  }
  
  export default NavBar

  