import Link from "next/link"

//components
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

function Header() {
    return (
        <header className="py-8 text-white xl:py-12 ">
            <div className="container flex items-center justify-between mx-auto">
                <Link href="/">
                    <h1 className="text-2xl font-semibold">
                        Ankith<span className="text-accent">.</span>
                    </h1>
                </Link>

                <div className="items-center hidden gap-8 xl:flex">
                    <Nav />
                    <Link href='/contact'>
                        <Button>Contact</Button></Link>
                </div>

                <div className="xl:hidden">
                    <MobileNav />
                </div>

            </div>

        </header>
    )
}

export default Header