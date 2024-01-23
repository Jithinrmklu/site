import Image from "next/image";
import Link from "next/link";
import Logo from "./dojo-logo.png"

const Navbar = () => {
    return (
        <nav>
            <Image
                src={Logo}
                alt="Logo"
                width={70}
                quality={100}
                placeholder="blur"
            />
            <Link href="/">Home</Link>
            <Link href="/store">Store</Link>
            <Link href="/solution">Solution</Link>
            <Link href="/product">Product</Link>
        </nav>
    );
}

export default Navbar;
