import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
    return (
        <div className="fixed left-0 w-44 bg-dark h-full p-2 flex flex-col text-white">
            <Link href="/" className="pl-8">
                <Image
                    src="/music-player-site/musical_note.ico"
                    height={72}
                    width={72}
                    alt="icon"
                    className="w-[72px] h-[72px]"
                />
            </Link>
            <div className="flex flex-col pl-2">
                <div className="mx-0 my-6">
                    <a
                        href="#installation"
                        className="hover:text-main duration-150 ease-in-out transition-all"
                    >
                        Installation
                    </a>
                </div>
                <div className="mx-0 my-6">
                    <a
                        href="#troubleshooting"
                        className="hover:text-main duration-150 ease-in-out transition-all"
                    >
                        Troubleshooting
                    </a>
                </div>
                <div className="mx-0 my-6">
                    <a
                        href="#roadmap"
                        className="hover:text-main duration-150 ease-in-out transition-all"
                    >
                        Roadmap
                    </a>
                </div>
                {/* <div className="mx-0 my-6">
                    <p>Help</p>
                </div> */}
                <div className="mx-0 my-6">
                    <a
                        href="https://github.com/acatiadroid/music-player/blob/main/misc/updates.md"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-main duration-150 ease-in-out transition-all"
                    >
                        Update Log
                    </a>
                </div>
                <div className="mx-4 bottom-0 fixed flex-wrap py-2 text-center">
                    <p>
                        Created by <br />
                        <a
                            href="https://github.com/acatiadroid"
                            target="_blank"
                            rel="noreferrer"
                            className="text-main underline underline-offset-2 decoration-main hover:decoration-white hover:text-white duration-150 ease-in-out transition-all cursor-pointer"
                        >
                            acatiadroid
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
