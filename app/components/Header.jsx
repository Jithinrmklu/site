import Image from "next/image";
import Link from "next/link";
import Logo from "../components/dojo-logo.png"

export default function Header() {
    return (
        <main className="flex justify-between bg-[#242d45] shadow-lg p-4 fixed w-full top-0 z-50">
            <Image
                src={Logo}
                alt="Logo"
                width={70}
                quality={100}
                placeholder="blur"
            />
            <div className="flex items-center">
                <nav>
                    <Link href="/" className="px-3 text-white">Home</Link>
                    <Link href="/store" className="px-3 text-white">Store</Link>
                    <Link href="/solution" className="px-3 text-white data-dropdown-toggle">Solution</Link>
                    <Link href="/product" className="px-3 text-white">Product</Link>
                    <Link href="/blog" className="px-3 text-white">Blog</Link>
                    <Link href="/contactus" className="px-3 text-white">Contact Us</Link>
                </nav>
            </div>
        </main>
    )
}