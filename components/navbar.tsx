"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
    const menu = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Menu", href: "/menu" },
        { name: "Order Online", href: "/order" },
        { name: "News", href: "/news" },
        { name: "Contact Us", href: "/contact" },
    ];

    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-1 sm:py-2 md:py-4 transition-all duration-500 ${isScrolled ? "bg-slate-800 bg-opacity-100 shadow-md" : "bg-slate-800 bg-opacity-0"
                }`}
        >
            <div className="relative h-full w-auto max-w-full">
                <Image
                    src="/nav/logo.png"
                    alt="Logo"
                    layout="intrinsic"
                    width={110}
                    height={100}
                    objectFit="contain"
                    className="hidden sm:block lg:hidden"
                />
                <Image
                    src="/nav/logo.png"
                    alt="Logo"
                    layout="intrinsic"
                    width={140}
                    height={100}
                    objectFit="contain"
                    className="hidden lg:block"
                />
                <Image
                    src="/nav/logo.png"
                    alt="Logo"
                    layout="intrinsic"
                    width={60}
                    height={100}
                    objectFit="contain"
                    className="block sm:hidden"
                />
            </div>

            <ul className="hidden lg:flex space-x-14">
                {menu.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={`text-lg font-semibold fontPoppins ${pathname === item.href
                                ? "text-[#E9BD8C]" // Active style
                                : "text-white hover:opacity-75"
                                }`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="block lg:hidden cursor-pointer transition-all hover:opacity-70"
                onClick={() => setMenuOpen(!menuOpen)}>
                <IoIosMenu className="text-4xl text-white" />

            </div>
            <div
                className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-slate-800 bg-opacity-70 backdrop-blur-md transform transition-transform duration-500 ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}>
                <IoMdClose className="text-white text-4xl absolute cursor-pointer hover:opacity-75 right-14 top-14" onClick={() => setMenuOpen(!menuOpen)} />


                <div
                    className="flex items-center justify-center h-full"
                >
                    <ul className="flex flex-col items-center space-y-8">
                        {menu.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`text-2xl font-semibold fontPoppins ${pathname === item.href
                                        ? "text-[#E9BD8C]"
                                        : "text-white hover:opacity-75"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="hidden xl:flex w-[140px]"></div>
        </nav>
    );
};

export default Navbar;
