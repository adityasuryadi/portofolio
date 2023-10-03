"use client";
import React from "react";

const Sidebar = () => {
  return (
    <aside
      className="top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="fixed top-0 left-0 right-0">
        <ul className="text-white">
          <li className="mt-4">
            <a
              onClick={() => {
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="my-auto hover:cursor-pointer"
            >
              Home
            </a>
          </li>
          <li className="mt-4">
            <a
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="my-auto hover:cursor-pointer"
            >
              About
            </a>
          </li>
          <li className="mt-4">
            <a
              onClick={() => {
                document
                  .getElementById("portofolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <p className="my-auto hover:cursor-pointer">Portofolio</p>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
