'use client'

import Link from 'next/link'
import { siteConfig } from '@/config'
import { cn } from '@/lib'

import { Icons } from './icons'
import { buttonVariants } from './ui/button'

export function MainNav() {
  return (
    <div className='mr-4 hidden md:flex'>
      <Link
        href='/'
        className='mr-4 flex items-center space-x-2'>
        <Icons.logo className='h-6 w-6' />
        <span className='hidden font-bold sm:inline-block'>
          {siteConfig.name}
        </span>
      </Link>
      <nav className='flex items-center text-sm'>
        {siteConfig.mainNav.map((item, index) => (
          <Link
            key={`mainNav_link_${index}`}
            href={item.href}
            className={cn(buttonVariants({ variant: 'ghost' }))}>
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
