'use client';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'


const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const MobileNav = () => {
    const currentPath = usePathname();
    return (
        <Sheet>
            <SheetTrigger className='flex items-center justify-center'>
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className='mt-32 mb-32 text-2xl text-center'>
                    <Link href='/'>
                        <h1 className='text-3xl font-semibold'>Ankith<span className='text-accent'>.</span></h1>
                    </Link>
                </div>
                <nav className='flex flex-col gap-8 text-2xl text-center'>
                    {links.map((link, index) => {
                        return (
                            <div key={index}>
                                <Link href={link.path}
                                    className={`${link.path === currentPath && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                                    {link.name}
                                </Link>
                            </div>
                        )
                    })}
                </nav>

            </SheetContent>
        </Sheet>
    )
}

export default MobileNav