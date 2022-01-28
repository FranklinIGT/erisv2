import React from 'react';
import Image from 'next/image';
import logoPic from './../../../public/image/Logo token.png'
import Link from 'next/link';


export default function Navbar() { 
  return <div className='top-bar'> 
        
            <div className='logo'>
                <Image src={logoPic} alt='img' width={48} height={48} layout="intrinsic"/>
            </div>
            <i id="menu-bar" className="fas fa-bars"></i>

            <nav>
                <Link href="/">
                <a >Home </a>
                </Link>
                <Link href="#Community">
                <a>Community </a>
                </Link>
                <Link href="/">
                <a>GamePlay </a>
                </Link>
                <Link href="/">
                <a>Roadmap </a>
                </Link>
                <Link href="/">
                <a>Tokenomics </a>
                </Link>
                <Link href="/">
                <a>Nft item </a>
                </Link>
                <Link href="/">
                <a>Team </a>
                </Link>
                <Link href="/">
                <a>Technologies </a>
                </Link>
               
               
               
            </nav>
        </div>;
}
