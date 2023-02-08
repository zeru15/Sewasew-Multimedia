import React from 'react'
import EthioTelecomLogo from './../Images/ethio-telecom-white-logo-sewasew-music-streaming@2x.webp'
import SewasewLogoWhite from './../Images/sewasew-logo-white1.svg'

function Header() {
    return (
        <div>
            {/* Main Header */}
            <div className='bg-sewasew-brown flex justify-between h-[100px] items-center text-center '>

                {/* Left Side */}
                <div className='ml-24'>
                    <img src={EthioTelecomLogo} width="220px" alt='Ethio Telecom Logo on Header' />
                </div>

                {/* Right Side */}
                <div className='flex gap-x-10 items-center font-semibold mr-4 '>
                    <div>
                        <img src={SewasewLogoWhite} width="60px" alt='Ethio Telecom Logo on Header' />
                    </div>
                    <ul className='text-white flex items-center gap-x-12 '>
                        <li><a href='#'> About </a> </li>
                        <li><a href='#'> Our Artists </a> </li>
                        <li><a href='#'> For Artists </a> </li>
                        <li><a href='#'> Blog </a> </li>
                        <li><a href='#'> Businesses </a> </li>
                    </ul>
                        <button className='bg-white px-6 py-2 rounded-3xl text-sm '> SUBSCRIBE </button>
                </div>
            </div>
        </div>
    )
}

export default Header