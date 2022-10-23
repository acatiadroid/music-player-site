import type { NextPage } from "next";
import React from "react";
import { Appbar } from "../components/Appbar";
import { Meta } from "../components/misc/Meta";
import { Name } from "../components/misc/Name";
import { Sidebar } from "../components/Sidebar";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Roadmap } from "../components/Roadmap";

const Home: NextPage = () => {
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        return null;
    }

    const notify = () =>
        toast.success("Successfully Copied", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    const cloneCMD = "git clone https://github.com/acatiadroid/music-player";
    const cdCMD = "cd music-player";
    const runCMD = "python run.py";

    const copy = (e: any, url: string) => {
        notify();
        navigator.clipboard.writeText(url);
    };

    return (
        <div className="bg-bg text-white scroll-smooth ">
            <Meta />
            <Appbar />
            {/* <Sidebar /> */}
            <div className="md:ml-44 ml-0 pt-28 p-4 text-center leading-8">
                <section className="p-16 lg:px-16 px-0 text-md">
                    <p className="lg:text-3xl text-4xl">Music Player</p>
                    <br />
                    <div className="w-80 h-4 bg-main mx-auto rounded-full [box-shadow:_0px_0px_20px_#202020;]"></div>
                    <br />
                    <p>
                        A simple music player created using Python and Tkinter
                        to play music (or any audio) from YouTube or your
                        computer!{" "}
                    </p>
                    {/* <Name /> */}
                    <p>Created by acatia#5378</p>
                    <br />
                    <p>
                        This has only been tested and built around Windows.
                        Other operating systems may not work for this.
                    </p>
                    <br />
                    <button className="bg-main rounded-full w-44 h-12 px-4 py-2 hover:text-main hover:bg-white duration-200 ease-in transition-all text-xl">
                        Download
                    </button>
                </section>
                <section className="p-16 lg:px-16 px-0 text-md">
                    <p className="text-3xl" id="installation">
                        Installation
                    </p>
                    <div className="w-80 h-4 bg-main mx-auto rounded-full [box-shadow:_0px_0px_20px_#202020;]"></div>
                    <br />
                    <p className="text-xl">Installation Video</p>
                    <br />
                    <iframe
                        className="text-center border-2 border-main rounded-2xl mx-auto lg:w-[640px] lg:h-[360px] md:h-[240px] md:w-[520px] w-auto h-auto"
                        src="https://www.youtube.com/embed/jVSdLySzilw"
                    />
                    <br />
                    <div className="text-left lg:pl-40 pl-4">
                        <p>
                            There are 2 methods you can use to run the music
                            player.
                        </p>
                        <p className="font-bold text-xl">
                            Method 1: using the executable (recommended)
                        </p>
                        <p>
                            Python does not need to be installed for this
                            method.
                        </p>
                        <div className="leading-10 pl-4">
                            <p className="flex border rounded-lg border-main p-1 m-2">
                                <BsFillArrowRightCircleFill
                                    className="my-auto m-2 text-main"
                                    size={24}
                                />
                                Download the latest release by clicking
                                &quot;Download&quot; in the top-right corner of
                                the website.
                            </p>
                            <p className="flex border rounded-lg border-main p-1 m-2">
                                <BsFillArrowRightCircleFill
                                    className="my-auto m-2 text-main"
                                    size={32}
                                />
                                Once you&apos;ve downloaded the exe file, select
                                the exe and run it as an Administrator. - This
                                requires administrator due as it needs to create
                                the music player files in the directory you
                                specify.
                            </p>
                            <p className="flex border rounded-lg border-main p-1 m-2">
                                <BsFillArrowRightCircleFill
                                    className="my-auto m-2 text-main"
                                    size={24}
                                />
                                Once the files have been created, you can close
                                the window and delete the exe you just run.
                                Navigate to the folder you have just created.
                            </p>
                            <p className="flex border rounded-lg border-main p-1 m-2">
                                <BsFillArrowRightCircleFill
                                    className="my-auto m-2 text-main"
                                    size={24}
                                />
                                You can create a Desktop shortcut for the exe
                                you&apos;ve just created which will make it
                                easier
                            </p>
                        </div>
                        <br />
                        <p className="font-bold text-xl">
                            Method 2: Running the Python script
                        </p>
                        <p>This method does require Python to be installed.</p>
                        <div className="leading-10 pl-4">
                            <p className="flex border rounded-lg border-main p-1 m-2">
                                <BsFillArrowRightCircleFill
                                    className="my-auto m-2 text-main"
                                    size={24}
                                />
                                Ensure
                                <a
                                    href="https://github.com/acatiadroid/music-player#using-the-python-script-directly"
                                    className=" underline underline-offset-2 text-main decoration-main px-2 hover:decoration-white hover:text-white duration-200 transition-all ease-in-out"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    all dependancies
                                </a>
                                are installed.
                            </p>
                            <p className="flex flex-col border rounded-lg border-main p-1 m-2">
                                <p className="flex">
                                    <BsFillArrowRightCircleFill
                                        className="my-auto m-2 text-main"
                                        size={32}
                                    />
                                    Clone the repository: (click to copy
                                    command) <br />
                                </p>
                                <div
                                    className="flex w-full h-12 rounded-lg bg-dark px-4 items-center justify-between cursor-pointer"
                                    onClick={(e) => copy(e, cloneCMD)}
                                >
                                    <p className="lg:text-base text-sm">
                                        git clone
                                        https://github.com/acatiadroid/music-player
                                    </p>
                                </div>
                            </p>
                            <p className="flex flex-col border rounded-lg border-main p-1 m-2">
                                <p className="flex">
                                    <BsFillArrowRightCircleFill
                                        className="my-auto m-2 text-main"
                                        size={32}
                                    />
                                    Move into the directory that&apos;s just
                                    been created: (click to copy command) <br />
                                </p>
                                <div
                                    className="flex w-full h-12 rounded-lg bg-dark px-4 items-center justify-between cursor-pointer"
                                    onClick={(e) => copy(e, cdCMD)}
                                >
                                    <p>cd music-player</p>
                                </div>
                            </p>
                            <p className="flex flex-col border rounded-lg border-main p-1 m-2">
                                <p className="flex">
                                    <BsFillArrowRightCircleFill
                                        className="my-auto m-2 text-main"
                                        size={32}
                                    />
                                    Run the{" "}
                                    <span className="text-main font-bold px-2">
                                        run.py
                                    </span>{" "}
                                    file: (click to copy command) <br />
                                </p>
                                <div
                                    className="flex w-full h-12 rounded-lg bg-dark px-4 items-center justify-between cursor-pointer"
                                    onClick={(e) => copy(e, runCMD)}
                                >
                                    <p>python run.py</p>
                                </div>
                            </p>
                        </div>
                    </div>
                </section>
                <section className="p-16 lg:px-16 px-0 text-md">
                    <p className="text-3xl" id="troubleshooting">
                        Troubleshooting
                    </p>
                    <br />
                    <div className="w-80 h-4 bg-main mx-auto rounded-full [box-shadow:_0px_0px_20px_#202020;]"></div>
                    <br />
                    <p className="text-lg font-bold">
                        Some common issues/errors that may occure when using the
                        music player are shown below. If you have an error that
                        hasn&apos;t been documented, please report it on our{" "}
                        <a
                            href=""
                            className="text-main underline underline-offset-2 decoration-main hover:decoration-white hover:text-white duration-150 ease-in-out transition-all"
                        >
                            Discord server
                        </a>
                        .
                    </p>
                    {/* <Name /> */}
                    <br />
                    <p className="text-lg font-semibold">
                        New songs are not being shown on the song list
                    </p>
                    <p>
                        This is because the song list does not automatically
                        refresh when add something new. To update it, just click
                        the &quot;refresh&quot; button at the top of the song
                        list.
                    </p>
                    <br />
                    <p className="text-lg font-semibold">
                        Song duration is not displayed on the song list
                    </p>
                    <p>
                        This is because the name of one of the songs on the song
                        list is too long for the song list. The name is pushing
                        the duration off the screen.
                    </p>
                    <br />
                    <p className="text-lg font-semibold">
                        The duration timer is not correct/not displaying correct
                        info
                    </p>
                    <p>
                        A fix for this is being worked on. The duration timer
                        has just been released as of the time of writing this.
                    </p>
                </section>
                <section className="p-16 lg:px-16 px-0 text-md text-md">
                    <p className="text-3xl" id="roadmap">
                        Roadmap
                    </p>
                    <br />
                    <div className="w-80 h-4 bg-main mx-auto rounded-full [box-shadow:_0px_0px_20px_#202020;]"></div>
                    <br />
                    <Roadmap />
                </section>
            </div>

            {/*toast container, don't touch */}
            <ToastContainer
                position="bottom-center"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnFocusLoss={false}
                pauseOnHover
                theme="dark"
                transition={Slide}
            />
        </div>
    );
};

export default Home;
