'use client'
import Header from "@/components/Header"
import { useRouter } from "next/navigation"
import { useState } from "react"

const CheckCode = () => {
  const [email, setEmail] = useState('')
  const [isEmailLoading, setIsEmailLoading] = useState(false)
  const router = useRouter()
  const handleEmailLogin = async () => {
    if (!email || !email.trim() || isEmailLoading) return
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) return
    if (isEmailLoading) return
    setIsEmailLoading(true)
    setTimeout(() => {
      setIsEmailLoading(false)
      router.push(`/check-code?email=${email}`)
    }, 2000)
  }
  const btnDisabled = !email || !email.trim() || !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
  const title = "Tell us where to find you"
  const main = () => {
    return <>
      <div className='text-[16px] font-[400] leading-[24px] text-black/50 poppins mt-[4px] md:mb-[40px] mb-[24px]'>
        A 6-digit code has been sent to your email. Please enter it within the next 30 minutes.
      </div>
      <div className='md:text-[16px] text-[14px] font-[400] md:leading-[24px] leading-[20px] myLabel poppins'>Email</div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" className='w-full h-[48px] p-[14px_16px] login_input md:mt-[8px] mt-[4px] poppins' />
      <div className={`w-full mt-[40px] login_submit_button poppins ${btnDisabled ? 'disabled' : ''}`} onClick={handleEmailLogin}>
        {isEmailLoading ? <div className="w-[20px] h-[20px] rounded-full border-t-2 border-b-2 border-white animate-spin"></div> : "Send code"}
      </div>
    </>
  }
  return <>
    <div className='w-full h-svh bg-white mainPage flex flex-col md:hidden'>
      <div className="text-[30px] font-[600] leading-[45px] text-black poppins flex items-center justify-center px-[20px] pt-[12px]">
        {title}
        <div className="flex-1"></div>
        <div className="h-[45px] rounded-full flex items-center justify-center cursor-pointer" onClick={() => {
          router.back()
        }}>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75781 17.7431L12.0004 12.5005M12.0004 12.5005L17.243 7.25781M12.0004 12.5005L6.75781 7.25781M12.0004 12.5005L17.243 17.7431" stroke="black" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className='md:h-full w-full flex md:items-center flex-col md:px-[0px] px-[20px]'>
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
                <div className="text-[30px] font-[600] leading-[45px] text-black poppins">
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

export default CheckCode