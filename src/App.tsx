import "./App.css";
import eventPhoto from "./assets/e.png";
import profilePhoto from "./assets/p.png";

import chatPhoto from "./assets/up2.png";

import homePhoto from "./assets/h.png";
import playStore from "./assets/ps.png";
import appleStore from "./assets/as.png";
import logo from "./assets/icon2.png";

import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-violet-200 to-violet-400 font-sans">
      <div className="p-2 absolute top-14 left-12 rounded-2xl bg-violet-300 w-28">
        <img className="w-22 h-22 rounded-xl" src={logo} alt="" />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
    
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-600">
              Find Your People, Share Your Moments.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Bold Hug helps you discover events, meet new people, and share
              real-life moments.
            </p>
          </header>
        

        <section className="justify-between items-center flex flex-col md:flex-row p-4 rounded-3xl  bg-violet-300">
          <span className="w-[50%]">
            <p className="mt-4 text-lg text-gray-700">
              Bold Hug is your go-to app for discovering events and finding
              companions — whether it's for travel, sports, food, or just
              hanging out. Create or join events, share photos, and connect with
              people near you who love doing the same things. Built for
              real-life connection. Designed for shared experiences.
            </p>
          </span>
          <div className="  ">
            <h2 className=" text-center text-2xl font-semibold mb-4">
              Download Now
            </h2>
            <div className="flex flex-col  md:flex-row   justify-center gap-4">
              <Link
                to={""}
                className=" bg-violet-200  text-white px-6 py-3 rounded-2xl font-medium hover:bg-violet-300 transition"
              >
                <img
                  className="w-12 h-12 align-middle"
                  src={playStore}
                  alt=""
                />
              </Link>
              <Link
                to={""}
                className="bg-violet-200 text-white px-6 py-3 rounded-2xl  font-medium hover:bg-violet-300 transition"
              >
                <img className="w-12 h-12" src={appleStore} alt="" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12 flex mt-12 ">
          <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src={homePhoto}
              alt="Screenshot 1"
              className="rounded-xl shadow"
            />
            <img
              src={eventPhoto}
              alt="Screenshot 1"
              className="rounded-xl shadow"
            />
            <img
              src={profilePhoto}
              alt="Screenshot 2"
              className="rounded-xl shadow"
            />
            <img
              src={chatPhoto}
              alt="Screenshot 3"
              className="rounded-xl shadow"
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-sm text-gray-600 mt-12">
          Created by Krishna — ☕{" "}
          <a
            href="https://www.buymeacoffee.com/yourlink"
            className="underline hover:text-gray-800"
            target="_blank"
          >
            Buy me a coffee
          </a>
        </footer>
      </div>
    </div>
  );
}
