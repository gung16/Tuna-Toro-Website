import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
    const menuLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "/about" },
        { name: "News", href: "/news" },
        { name: "Contact Us", href: "/contact" },
    ];

    const socialLinks = [
        { name: "@tunatoro_id", href: "https://instagram.com/tunatoro_id", icon: <FaInstagram /> },
        { name: "(+62) 813-8979-9363", href: "https://api.whatsapp.com/send?phone=6281389799363&text=Halo%20admin%20Tuna%20Toro!", icon: <FaWhatsapp /> },
    ];

    return (
        <div
            className="p-16 text-white"
            style={{
                background: "linear-gradient(to bottom, #014480, #05345E)",
                fontFamily: "var(--font-poppins)",
            }}
        >
            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-row justify-between items-start gap-4 pt-10">

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9307165584723!2d106.71202567499901!3d-6.272841061406397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb11677c1a09%3A0x5b7190696a3bd143!2sTuna%20Toro%20Sushi!5e0!3m2!1sen!2sid!4v1738219915743!5m2!1sen!2sid" 
                    width="400" 
                    height="300" 
                    style= {{ border: "0" }}
                    loading="lazy" 
                ></iframe>

                {/* Logo and Description */}
                <div className="text-start">
                    <img src="./nav/logo.png" alt="Logo" className="w-32 mb-4 " />
                    <h1 className="text-3xl font-bold mb-2">Tuna Toro Bintaro</h1>
                    <p className="text-base leading-relaxed max-w-xs">
                        Kebayoran Arcade 1 Blok C1 no. 12, Jl. Boulevard Bintaro Jaya, Pd. Jaya, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15220
                    </p>
                </div>

                <div className='flex flex-row gap-3 justify-between min-w-[25%] pt-8 lg:pr-5'>
                    {/* Explore Section */}
                    <div className="text-start">
                        <h3 className="font-bold text-xl mb-4">Explore</h3>
                        <ul className="space-y-3">
                            {menuLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:underline text-lg">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div className="text-start">
                        <h3 className="font-bold text-xl mb-4">Social</h3>
                        <ul className="flex flex-col justify-center">
                            {socialLinks.map((social) => (
                                <li key={social.name}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-400"
                                        >
                                        <div className="flex items-center gap-4">
                                            <div className="text-lg">{social.icon}</div>
                                            <span className="text-lg">{social.name}</span>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col items-center space-y-12">
                {/* Logo and Description */}
                <div className="text-center flex flex-col sm:flex-row ">
                    <img src="./nav/logo.png" alt="Logo" className="max-w-[180px] mb-4 mx-auto object-contain" />
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-2">Tuna Toro Bintaro</h1>
                        <p className="text-base leading-relaxed max-w-xs mx-auto">
                            Kebayoran Arcade 1 Blok C1 no. 12, Jl. Boulevard Bintaro Jaya, Pd. Jaya, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15220
                        </p>
                    </div>
                </div>

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9307165584723!2d106.71202567499901!3d-6.272841061406397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb11677c1a09%3A0x5b7190696a3bd143!2sTuna%20Toro%20Sushi!5e0!3m2!1sen!2sid!4v1738222357248!5m2!1sen!2sid" 
                    width="600" 
                    height="250" 
                    style= {{ border: "0" }}
                    loading="lazy" 
                    className='max-w-[90%]'
                ></iframe>

                <div className="flex w-full justify-center  gap-5 sm:justify-between px-6 flex-col sm:flex-row">

                    {/* Explore Section */}
                    <div className="text-start w-1/2">
                        <h3 className="font-bold text-xl mb-4">Explore</h3>
                        <ul className="space-y-3">
                            {menuLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:underline text-lg">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div className="text-start w-1/2">
                        <h3 className="font-bold text-xl mb-4">Social</h3>
                        <ul className="flex flex-col items-start space-y-3">
                            {socialLinks.map((social) => (
                                <li key={social.name}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-400"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <div className="text-lg">{social.icon}</div>
                                            <span className="text-base">{social.name}</span>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>


            <div className="mt-12 border-t border-white border-opacity-55 pt-12"></div>
        </div>
    );
}

export default Footer;
