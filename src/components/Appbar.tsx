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
    console.log(isResponsive);
    return (
        <>
            <div className="fixed bg-dark flex items-center h-24 w-full text-xl text-white py-0 px-10 select-none">
                <Link href="/" className="select-none">
                    <Image
                        src="/music-player-site/musical_note.ico"
                        height={72}
                        width={72}
                        alt="icon"
                    />
                </Link>
                <RiMenu3Line
                    size={40}
                    className="mx-20 hover:text-main duration-200 transition-all ease-in-out cursor-pointer"
                    onClick={() => setVisible(!isVisible)}
                />
                <div className="fixed right-4">
                    <button className="bg-main rounded-full px-4 py-2 hover:text-main hover:bg-white duration-200 ease-in transition-all">
                        Download
                    </button>
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
