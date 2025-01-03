'use client'
import { useUser } from "@/contexts/UserContext"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { useConnectWallet, useCurrentWallet, useDisconnectWallet, useWallets } from "@mysten/dapp-kit"
import { ToastContainer, toast } from 'react-toastify';
import { copyString, formatAddress } from "@/utils"

export default function Header() {
  const { user } = useUser()
  const isLogin = user ? true : false
  const [isOpen, setIsOpen] = useState(false)
  const [showWalletModal, setShowWalletModal] = useState(false)
  const { currentWallet, connectionStatus } = useCurrentWallet();
  const { mutate: connect } = useConnectWallet();
  const { mutate: disconnect } = useDisconnectWallet();
  const wallets = useWallets();
  const handleConnect = (wallet: any) => {
    connect({ wallet }, {
      onSuccess: () => {
        setIsOpen(false)
      }
    })
  }
  const walletList = useMemo(() => {
    return [
      {
        name: 'Suiet Wallet',
        icon: '/wallets/suiet.png',
        // 判断 wallets 中有没有  Suiet
        hasInstall: wallets.some((i) => i.name === 'Suiet'),
        url: 'https://suiet.app/',
        onClick: () => {
          const wallet = wallets.find((i) => i.name === 'Suiet')
          if (wallet) handleConnect(wallet)
          else toast.error('Please install Suiet Wallet first')
        }
      },
      {
        name: 'Sui Wallet',
        icon: '/wallets/sui.png',
        url: 'https://suiwallet.com/',
        hasInstall: wallets.some((i) => i.name === 'Sui Wallet'),
        onClick: () => {
          const wallet = wallets.find((i) => i.name === 'Sui Wallet')
          if (wallet) handleConnect(wallet)
          else toast.error('Please install Sui Wallet first')
        }
      },
      {
        name: 'Nightly',
        icon: '/wallets/nightly.png',
        hasInstall: wallets.some((i) => i.name === 'Nightly'),
        url: 'https://nightly.app/',
        onClick: () => {
          const wallet = wallets.find((i) => i.name === 'Nightly')
          if (wallet) handleConnect(wallet)
          else toast.error('Please install Nightly Wallet first')
        }
      },
      {
        name: 'OKX Wallet',
        icon: '/wallets/okx.png',
        url: "https://www.okx.com/web3/rewritethesystem",
        hasInstall: wallets.some((i) => i.name === 'OKX Wallet'),
        onClick: () => {
          const wallet = wallets.find((i) => i.name === 'OKX Wallet')
          if (wallet) handleConnect(wallet)
          else toast.error('Please install OKX Wallet first')
        }
      },
      {
        name: 'Martian Sui Wallet',
        icon: '/wallets/martian.png',
        url: "https://martianwallet.xyz/",
        hasInstall: wallets.some((i) => i.name === 'Martian Sui Wallet'),
        onClick: () => {
          const wallet = wallets.find((i) => i.name === 'Martian Sui Wallet')
          if (wallet) handleConnect(wallet)
          else toast.error('Please install Martian Sui Wallet first')
        }
      },
      {
        name: 'Surf Wallet',
        icon: '/wallets/surf.png',
        url: "https://surf.tech/",
        hasInstall: wallets.some((i) => i.name === 'Surf Wallet'),
        onClick: () => {
          const wallet = wallets.find((i) => i.name === 'Surf Wallet')
          if (wallet) handleConnect(wallet)
          else toast.error('Please install Surf Wallet first')
        }
      },
      {
        name: 'Onekey Wallet',
        icon: '/wallets/onekey.png',
        url: "https://onekey.so/",
        hasInstall: wallets.some((i) => i.name === 'OneKey Wallet'),
        onClick: () => {
          const wallet = wallets.find((i) => i.name === 'OneKey Wallet')
          if (wallet) handleConnect(wallet)
          else toast.error('Please install OneKey Wallet first')
        }
      },
    ]
  }, [wallets])
  useEffect(() => {
    if (isOpen || showWalletModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, showWalletModal])
  return <>
    <div className='md:mx-[40px] mx-[20px] md:h-[88px] h-[62px] items-center flex'>
      <Link href="/" className={`${isLogin ? 'logo337' : 'logo312'}`}>
        <img src={'/arttoo-logo.png'} alt="logo" className='md:h-[35px] h-[20px]' style={{ filter: 'invert(1)' }} />
      </Link>
      <div className='flex-1'>
      </div>
      <div className='flex items-center justify-center'>
        {connectionStatus !== 'connected' ? <div
          className='md:w-[157px] md:h-[48px] h-[40px] w-auto px-[12px] text-[16px] font-[400] poppins flex items-center justify-center bg-black-0-05 md:rounded-[12px] rounded-[8px] cursor-pointer md:hover:bg-[#c0c0c0] select-none'
          onClick={() => setIsOpen(true)}
        >
          <span className="max-md:hidden">Connect Wallet</span>
          <span className="md:hidden">Connect</span>
        </div> : <div
          onClick={() => setShowWalletModal(!showWalletModal)}
          className="md:h-[48px] h-[40px] w-auto px-[12px] text-[16px] font-[400] poppins flex items-center justify-center bg-black-0-05 md:rounded-[12px] rounded-[8px] cursor-pointer md:hover:bg-[#c0c0c0] select-none">
          <img src={currentWallet.icon} alt="disconnect" className="w-[24px] h-[24px] rounded-full mr-[4px]" />
          {formatAddress(currentWallet.accounts[0].address)}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 10L12 14L8 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>}
      </div>
    </div>
    <div className='h-[1px] w-full bg-black-0-1'></div>
    {isOpen && <div className="fixed top-[0px] left-0 w-full h-full z-10 max-md:hidden">
      <div
        onClick={() => setIsOpen(false)}
        className="absolute top-[0px] left-0 w-full h-full bg-black/50"
      />
      <div className='bg-white p-[32px] w-[640px] bg-white rounded-[16px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <div className="text-[24px] font-[600] poppins leading-[32px] mb-[12px]">Connect Wallet</div>
        {/* 2 * 2 */}
        <div className="gap-[8px] grid grid-cols-2">
          {walletList.map((wallet, index) => (
            <div key={index}
              onClick={wallet.onClick}
              className="flex w-[284px] p-[16px] items-center border border-black/10 border-width-[1px] border-radius-12 cursor-pointer hover:bg-black/5 select-none">
              <img src={wallet.icon} alt={wallet.name} className="w-[28px] h-[28px]" />
              <div className="text-[18px] font-[500] text-black/90 poppins ml-[12px]">{wallet.name}</div>
              {/* <div className="flex-1"></div>
              {!wallet.hasInstall && <div className="text-[12px] font-[500] text-red-500 poppins ml-[12px]">Install</div>} */}
            </div>
          ))}
        </div>
        <div className="absolute top-[0px] right-[0px] w-[64px] h-[64px] flex items-center justify-center cursor-pointer select-none" onClick={() => setIsOpen(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.7583 17.2431L12.0009 12.0005M12.0009 12.0005L17.2435 6.75781M12.0009 12.0005L6.7583 6.75781M12.0009 12.0005L17.2435 17.2431" stroke="black" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>}
    {isOpen && <div className="fixed top-[0px] left-0 w-full h-full z-10 bg-white px-[20px] pt-[12px] md:hidden">
      <div className="text-[30px] font-[600] mb-[12px] leading-[45px] text-black poppins flex items-center justify-center">
        Connect Wallet
        <div className="flex-1"></div>
        <div className="h-[45px] rounded-full flex items-center justify-end cursor-pointer" onClick={() => setIsOpen(false)}>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75781 17.7431L12.0004 12.5005M12.0004 12.5005L17.243 7.25781M12.0004 12.5005L6.75781 7.25781M12.0004 12.5005L17.243 17.7431" stroke="black" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        {walletList.map((wallet, index) => (
          <div
            onClick={wallet.onClick}
            key={index} className="flex w-full py-[14px] px-[16px] items-center border border-black/10 border-width-[1px] border-radius-12 cursor-pointer active:bg-black/5 select-none">
            <img src={wallet.icon} alt={wallet.name} className="w-[32px] h-[32px]" />
            <div className="text-[18px] font-[400] text-black/90 poppins ml-[12px]">{wallet.name}</div>
          </div>
        ))}
      </div>
    </div >}
    {
      showWalletModal && <div className="fixed top-[0px] left-0 w-full h-full z-10 px-[20px] pt-[12px] max-md:hidden">
        <div onClick={() => setShowWalletModal(false)} className="absolute top-[0px] left-0 w-full h-full" />
        <div className="w-[280px] h-[140px] flex flex-col bg-white rounded-[12px] absolute right-[40px] top-[76px] shadow-lg border border-black/10 overflow-hidden">
          <div
            onClick={() => {
              copyString(currentWallet?.accounts[0].address || '')
              toast.success('Copied to clipboard')
            }}
            className="flex px-[20px] h-[82px] items-center justify-between cursor-pointer hover:bg-black/5">
            <img src={currentWallet?.icon} className="w-[24px] h-[24px] rounded-full" />
            <div className="flex-1 mx-[16px]">
              <div className="text-[12px] font-[400] text-black/50 poppins">Connected with {currentWallet?.name}</div>
              <div className="text-[16px] font-[400] text-black/90 poppins">{formatAddress(currentWallet?.accounts[0].address || '')}</div>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z" stroke="black" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9" stroke="black" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div
            onClick={() => {
              setShowWalletModal(false)
              disconnect()
            }}
            className="flex-1 flex items-center px-[20px] cursor-pointer hover:bg-black/5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12H19M19 12L16 15M19 12L16 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-[16px] font-[400] text-black/90 poppins ml-[16px]">Disconnect</div>
          </div>
        </div>
      </div>
    }
    {
      showWalletModal && <div className="fixed top-[63px] flex flex-col left-0 w-full h-[calc(100vh-63px)] z-10 md:hidden">
        <div className="bg-white">
          <div
            onClick={() => {
              copyString(currentWallet?.accounts[0].address || '')
              toast.success('Copied to clipboard')
            }}
            className="flex p-[20px] items-center">
            <img src={currentWallet?.icon} className="w-[24px] h-[24px] rounded-full" />
            <div className="flex-1 mx-[16px]">
              <div className="text-[12px] font-[400] text-black/50 poppins">Connected with {currentWallet?.name}</div>
              <div className="text-[16px] font-[400] text-black/90 poppins">{formatAddress(currentWallet?.accounts[0].address || '')}</div>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z" stroke="black" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9" stroke="black" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div
            onClick={() => {
              setShowWalletModal(false)
              disconnect()
            }}
            className="flex-1 flex items-center p-[20px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12H19M19 12L16 15M19 12L16 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-[16px] font-[400] text-black/90 poppins ml-[16px]">Disconnect</div>
          </div>
        </div>
        <div className="flex-1 bg-black/50" onClick={() => setShowWalletModal(false)}></div>
      </div>
    }
    <ToastContainer />
  </>
}