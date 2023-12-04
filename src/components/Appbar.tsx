import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Sidebar } from "./Sidebar";

export const Appbar = () => {
    const [isResponsive, setResponsive] = useState(
        typeof window !== "undefined" ? window.innerWidth <= 800 : false
    );
    const [isVisible, setVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 800) {
                setResponsive(true);
            } else {
                setResponsive(false);
            }
        };

        if (window !== undefined)
            window.addEventListener("resize", handleResize);
    }, []);
    // console.log(isResponsive);
    return (
        <>
            <div className="fixed flex items-center w-full h-24 px-10 py-0 text-xl text-white select-none bg-dark">
                <Link href="/" className="select-none">
                    <Image
                        src="./musical_note.ico"
                        height={72}
                        width={72}
                        alt="icon"
                    />
                </Link>
                <RiMenu3Line
                    size={40}
                    className="mx-20 transition-all duration-200 ease-in-out cursor-pointer hover:text-main"
                    onClick={() => setVisible(!isVisible)}
                />
                <div className="fixed right-4">
                    <a
                        href="https://github.com/acatiadroid/music-player/releases"
                        rel="noopener noreferrer"
                        target="__blank"
                        className="px-4 py-2 transition-all duration-200 ease-in rounded-full bg-main hover:text-main hover:bg-white"
                    >
                        Download
                    </a>
                </div>
            </div>

            {
                // isVisible and isResponsive = show
                // !isVisible and isResponsive = hide
                // isVisible and !isResponsive = show
                // !isVisible and !isResponsive = hide
                isVisible ? (
                    isResponsive ? (
                        <></>
                    ) : (
                        <Sidebar />
                    )
                ) : isResponsive ? (
                    <Sidebar />
                ) : (
                    <></>
                )
            }
        </>
    );
};
