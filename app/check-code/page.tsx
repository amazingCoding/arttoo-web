'use client'
import Header from "@/components/Header"
import { useWindowSize } from "@/utils"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const CheckCode = () => {
  const [code, setCode] = useState<string[]>(Array.from({ length: 6 }, () => ''))
  const [isCodeLoading, setIsCodeLoading] = useState(false)
  const [isResendCodeLoading, setIsResendCodeLoading] = useState(false)
  const [countDown, setCountDown] = useState(-1)
  const [errorMsg, setErrorMsg] = useState('')
  const router = useRouter()
  const codeString = code.join('')
  const inputRefs = useRef<any[]>(Array.from({ length: 6 }, () => null))
  const size = useWindowSize()
  const isMd = size[0] > 768
  useEffect(() => {
    // inputRefs.current[0].focus()
    // 监听 键盘 事件
    const handleKeyDown = (e: KeyboardEvent) => {
      // 如果是 backspace 并且 当前没有值，则 向前一个 input 聚焦
      const index = inputRefs.current.findIndex(input => input === e.target)
      if (e.key === 'Backspace' && inputRefs.current[index].value === '' && index > 0) {
        inputRefs.current[index - 1].focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  // 倒计时
  useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => {
        setCountDown(countDown - 1)
      }, 1000)
    }
  }, [countDown])
  const handleCodeLogin = async () => {
    if (!codeString || !codeString.trim() || isCodeLoading) return
    setIsCodeLoading(true)
    setTimeout(() => {
      if (codeString === '111111') {
        setIsCodeLoading(false)
        router.push('/invitation')
      }
      else {
        setIsCodeLoading(false)
        setErrorMsg('The verification code is wrong, please re-enter')
      }
    }, 2000)
  }
  const handleResendCode = () => {
    setIsResendCodeLoading(true)
    setTimeout(() => {
      setIsResendCodeLoading(false)
      setCountDown(60)
    }, 2000)
  }
  const btnDisabled = !codeString || !codeString.trim() || codeString.length !== 6
  const renderResendCode = () => {
    if (isResendCodeLoading) {
      return <div className="w-[20px] h-[20px] rounded-full border-t-2 border-b-2 border-black animate-spin"></div>
    }
    if (countDown > 0) {
      return countDown
    }
    return 'Resend code'
  }
  const title = "Enter the code"
  const main = (index: number) => {
    
    if ((index === 0 && isMd) || (index === 1 && !isMd)) return null
    return <>
      <div className='text-[16px] font-[400] leading-[24px] md:w-[444px] mt-[4px] text-black/50 poppins mb-[24px]'>
        A 6-digit code has been sent to your email. Please enter it within the next 30 minutes.
      </div>
      <div className="flex md:gap-[16px] gap-[8px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            ref={(el) => {
              inputRefs.current[index] = el
            }}
            data-index={index}
            key={index} value={code[index]} onChange={(e) => {
              const newCode = [...code]
              setErrorMsg('')
              // 如果 e.target.value 是多个字符，只取最后一个
              newCode[index] = e.target.value.slice(-1)
              setCode(newCode)
              console.log(inputRefs.current[index + 1], index + 1)
              if (newCode[index] && inputRefs.current[index + 1]) {
                console.log(123)
                inputRefs.current[index + 1].focus()
              }
              // 最后一个则取消聚焦
              if (index === 5 && e.target.value !== '') {
                inputRefs.current[index].blur()
              }
            }} placeholder="" className={`w-full h-[68px] text-center poppins text-black/90 text-[24px] font-[600] ${errorMsg ? 'login_inputError' : 'login_input'}`} />
        ))}
      </div>
      {errorMsg && <div className="text-[16px] font-[400] leading-[24px] text-[#FF0000]/90 poppins">{errorMsg}</div>}
      {/* resend code */}
      <div className="text-[16px] font-[400] leading-[24px] text-black/90 poppins mt-[12px] cursor-pointer select-none" onClick={handleResendCode}>
        {renderResendCode()}
      </div>
      <div className={`w-full mt-[40px] login_submit_button poppins ${btnDisabled ? 'disabled' : ''}`} onClick={handleCodeLogin}>
        {isCodeLoading ? <div className="w-[20px] h-[20px] rounded-full border-t-2 border-b-2 border-white animate-spin"></div> : "Send code"}
      </div>
      <div className="h-[40px] md:hidden"></div>
    </>
  }
  return <>
    <div className='w-full h-svh bg-white mainPage flex flex-col md:hidden'>
      <div className="text-[30px] font-[600] leading-[45px] text-black poppins flex items-center justify-center px-[20px] pt-[12px]">
        {title}
        <div className="flex-1"></div>
        <div className="h-[45px] rounded-full flex items-center justify-center cursor-pointer" onClick={() => router.push('/trade')}>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75781 17.7431L12.0004 12.5005M12.0004 12.5005L17.243 7.25781M12.0004 12.5005L6.75781 7.25781M12.0004 12.5005L17.243 17.7431" stroke="black" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className='md:h-full w-full flex md:items-center flex-col md:px-[0px] px-[20px]'>
        {main(0)}
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
                {main(1)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default CheckCode