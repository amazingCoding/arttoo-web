'use client'
import Header from "@/components/Header"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Invitation = () => {
  const [code, setCode] = useState('')
  const [isCodeLoading, setIsCodeLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const router = useRouter()
  const handleCodeLogin = async () => {
    if (!code || !code.trim() || isCodeLoading) return
    if (isCodeLoading) return
    setIsCodeLoading(true)
    setTimeout(() => {
      setIsCodeLoading(false)
      setErrorMsg('Invalid invitation code. Please verify you have entered the correct code.')
    }, 2000)
  }
  const btnDisabled = !code || !code.trim()
  const title = 'Got an invitation?'
  const main = () => {
    return <>
      <div className='text-[16px] font-[400] leading-[24px] myLabel poppins flex items-center'>
        Invitation Code
      </div>
      <input value={code} onChange={(e) => {
        setCode(e.target.value)
        setErrorMsg('')
      }}
        placeholder="Enter your Invitation Code"
        className={`w-full h-[48px] p-[14px_16px] mt-[8px] poppins ${errorMsg ? 'login_inputError' : 'login_input'}`}
      />
      {errorMsg && <div className="text-[16px] font-[400] leading-[24px] text-[#FF0000]/90 poppins mt-[4px]">{errorMsg}</div>}
      <div className="text-[16px] font-[400] leading-[24px] text-black/50 poppins mt-[4px]">{`Get early access to Arttoo's Initial Art Offering (IAO) via invitation codes distributed on our socials to partners and key contributors.`}</div>
      <div className="text-[16px] font-[400] leading-[24px] text-black/50 poppins mt-[4px]">{`Don’t worry if you don’t have a code right now, you could add an invitation code later.`}</div>
      <div className={`w-full mt-[40px] login_submit_button poppins ${btnDisabled ? 'disabled' : ''}`} onClick={handleCodeLogin}>
        {isCodeLoading ? <div className="w-[20px] h-[20px] rounded-full border-t-2 border-b-2 border-white animate-spin"></div> : "Submit"}
      </div>
      <div className={`w-full login_submit_button2 poppins`} onClick={() => router.push('/trade')}>
        Skip
      </div>
    </>
  }
  return <>
    <div className='w-full h-svh bg-white mainPage flex flex-col md:hidden'>
      <div className="text-[30px] font-[600] leading-[45px] text-black poppins flex items-center justify-center px-[20px] pt-[12px]">
        Got an invitation?
        <div className="flex-1"></div>
        <div className="h-[45px] rounded-full flex items-center justify-center cursor-pointer" onClick={() => router.push('/trade')}>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75781 17.7431L12.0004 12.5005M12.0004 12.5005L17.243 7.25781M12.0004 12.5005L6.75781 7.25781M12.0004 12.5005L17.243 17.7431" stroke="black" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className='md:h-full w-full flex md:items-center flex-col md:px-[0px] px-[20px] mt-[24px]'>
        {main()}
      </div>
    </div>
    <div className="max-md:hidden">
      <div className='w-full h-svh bg-white mainPage flex flex-col'>
        <Header />
        <div className='flex flex-1'>
          <div className='hidden md:block flex-1 h-full'>
            <video
              playsInline={true}
              muted={true}
              loop={true}
              autoPlay={true}
              id='video2'
              poster='/sec_2II.png'
              className='h-full object-cover'
            >
              <source src='/section2-highres.webm' type="video/webm; codecs='vp8, vorbis'" />
              <source src='/section2-highres.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='flex-1 md:h-full'>
            <div className='md:h-full w-full flex md:items-center flex-col md:px-[0px] px-[20px] mt-[80px]'>
              <div className="md:w-[444px]">
                <div className="text-[30px] font-[600] leading-[45px] text-black poppins mb-[40px]">
                  {title}
                </div>
                {main()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Invitation