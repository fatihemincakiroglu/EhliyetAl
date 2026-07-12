import logoImg from '@/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className = 'w-32 sm:w-40' }) => {
  return (
    <Link href="/" className={`inline-block shrink-0 focus:ring-0 focus:outline-hidden ${className}`}>
      <Image src={logoImg} alt="VinçBurada" className="h-auto w-full" priority />
    </Link>
  )
}

export default Logo
