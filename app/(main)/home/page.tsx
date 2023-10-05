"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faLaravel,
  faGolang,
  faVuejs,
  faReact,
  faAws,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const [sectionActive, setSectionActive] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  function openSidebar() {
    setSidebarOpen(!sidebarOpen);
    console.warn("sidebar ", sidebarOpen);
  }
  useEffect(() => {
    const handleScroll = () => {
      let konten: HTMLElement | null = document.getElementById("konten")!;

      let home: HTMLElement | null = document.getElementById("home")!;
      let about: HTMLElement | null = document.getElementById("about")!;
      let portofolio: HTMLElement | null =
        document.getElementById("portofolio")!;

      let pos_konten = konten?.scrollTop - 20 + konten?.offsetHeight;
      let posHome = home?.offsetTop + home?.offsetHeight;
      let posAbout = about?.offsetTop + about?.offsetHeight;
      let posPortofolio = portofolio?.offsetTop + portofolio?.offsetHeight;

      let distanceHome = posHome - pos_konten;
      let distanceAbout = posAbout - pos_konten;
      let distancePortofolio = posPortofolio - pos_konten;
      let min = Math.min(
        ...[distanceHome, distanceAbout, distancePortofolio].filter(
          (num) => num > 0
        )
      );
      if (min === distanceHome) setSectionActive("home");
      if (min === distanceAbout) setSectionActive("about");
      if (min === distancePortofolio) setSectionActive("portofolio");
    };
    let konten = document.getElementById("konten");
    konten?.addEventListener("scroll", handleScroll);
    return () => {
      konten?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main id="main" className="flex flex-col h-screen main">
      <div className="flex flex-1 no-scrollbar overflow-hidden">
        <div className="flex flex-1 flex-col" id="main">
          <div
            className="flex flex-1 bg-black overflow-y-auto no-scrollbar paragraph px-4"
            id="konten"
          >
            {!sidebarOpen && (
              <button
                type="button"
                className="fixed items-center p-0 mt-2 ml-0 text-sm text-white rounded-lg lg:hidden"
                onClick={openSidebar}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
            )}
            <div className=" pt-5">
              <section
                id="home"
                className={`bg-black dark:bg-white-900 h-screen`}
              >
                <div className="flex flex-row">
                  <div className="">
                    <div className="py-8 px-4 mx-5 max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                      <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
                          Hello, I am Aditya Suryadi
                        </h1>
                        <p className="mb-6 text-lg font-normal text-white lg:text-xl dark:text-gray-400">
                          Full Stack Developer
                        </p>
                        <a
                          href="https://www.linkedin.com/in/aditya-suryadi-7966b01b5/"
                          className="text-white dark:text-blue-500 hover:underline hover:text-emerald-400 font-medium text-lg inline-flex items-center"
                        >
                          Hire Me
                          <svg
                            className="w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <h1 className="text-9xl font-bold text-green-600">{`</>`}</h1>
              </section>

              <section id="about" className="bg-black">
                {/* About */}

                <div className="mx-5">
                  <p className="px-4 text-white text-4xl">About</p>
                  <div className="px-4 flex flex-row mt-5">
                    <div className="">
                      <h1 className="text-white text-2xl mt-6">Bio</h1>
                      <p className="mt-4 text-white text-lg tracking-wider">
                        I am a Fullstack Developer with more than 4 years of
                        experience in software development. I have a deep
                        passion for creating innovative technology solutions and
                        supporting business growth. I love solving technical
                        challenges and constantly learning to stay relevant in
                        an ever-evolving industry.
                      </p>
                    </div>
                  </div>
                  <div className="px-4 flex flex-row mt-5">
                    <div className="">
                      <h1 className="text-white text-2xl mt-6">
                        Work Experience
                      </h1>
                      <ul className="mt-4 mx-5">
                        <li className="list-disc text-lg">
                          Antrique 2021 - now as Fullstack Developer
                        </li>
                        <li>
                          {" "}
                          <p className="mt-4 tracking-wider">
                            Develop API and some internal application using php,
                            laravel, and Yii.Setup Server DB and Nginx
                            Webserver. Make WA gateway using GO fiber and
                            rabbitMq
                          </p>
                        </li>
                        <li className="list-disc text-lg mt-4">
                          PT Tritunggal Lestari Makmur 2020 - 2021 as IT Support
                        </li>
                        <li className="mt-4">
                          {" "}
                          <p className="mt-4 tracking-wider">
                            Maintenance Network,Hardware,internal application
                            and test internal application project
                          </p>
                        </li>
                        <li className="list-disc text-lg mt-4">
                          PT TKG taekwang Indonesia 2020
                        </li>
                        <li className="mt-4">
                          {" "}
                          <p className="mt-4 tracking-wider">
                            Develop MES Application using C# and Oracle DB
                          </p>
                        </li>
                        <li className="list-disc text-lg mt-4">
                          PT Niaga Kurnia Textile Mils 2016 - 2018
                        </li>
                        <li className="mt-4">
                          {" "}
                          <p className="mt-4 tracking-wider">
                            Create HRM system using Laravel,Mysql and Vuejs.
                            <br /> Create Audit Management System using
                            Laravel,Mysql and Vuejs.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="px-4 flex flex-row mt-5">
                    <div className="">
                      <h1 className="text-white text-2xl mt-6 ">Course</h1>
                      <ul className="mt-4 mx-5">
                        <li className="list-disc text-lg mt-4">
                          <a
                            className="hover:text-green-600"
                            href="https://www.dicoding.com/certificates/6RPN65N79P2M"
                          >
                            DICODING - Back-End Developer Expert
                          </a>
                        </li>
                        <li className="list-disc text-lg mt-4">
                          <a
                            className="hover:text-green-600"
                            href="https://www.dicoding.com/certificates/1RXYODWOQPVM"
                          >
                            DICODING - Belajar Membangun Arsitektur
                            Microservices
                          </a>
                        </li>
                        <li className="list-disc text-lg mt-4">
                          <a
                            className="hover:text-green-600"
                            href="https://sertiva.id/credential/23cd3f3b-a380-4661-a76d-abcd8326e585"
                          >
                            HACKTIV 8 - GO PROGRAMMING
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="px-4 flex flex-row mt-5">
                    <div className="">
                      <h1 className="text-white text-2xl mt-6">Education</h1>
                      <ul className="mt-4 mx-5">
                        <li className="list-disc text-lg mt-4">
                          PKN STMIK LPKIA BANDUNG 2012 - 2015
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="px-4 flex flex-row mt-5">
                    <div className="">
                      <h1 className="text-white text-2xl mt-6">Skils</h1>
                      <ul className="text-white mt-4 list-disc mx-5">
                        <li>
                          <FontAwesomeIcon icon={faLaravel} /> Laravel
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faGolang} /> Go
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faVuejs} /> Vue Js
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faReact} /> React
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faDatabase} /> MySQL
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faDatabase} /> PgSQL
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faDocker} /> Docker
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faServer} /> Nginx
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAws} /> Ec2
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAws} /> LightSail
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAws} /> S3
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="px-4 flex flex-row mt-5 bg-black h-screen"
                id="portofolio"
              >
                <div className="">
                  <h1 className="text-2xl">Portofolio</h1>
                  <ul className="text-white mt-4 list-disc mx-5">
                    <li className="pt-3 hover:text-green-600">
                      Complete Course DICODING Devops Learning Path Create
                      deploy simple app and mongodb.Using Kubernetes and also
                      deploying monitoring app using grafana and prometheus
                    </li>
                    <li className="pt-3 hover:text-green-600">
                      Complete Course DICODING Back End Learning Path Create API
                      with Hapi js and using Clean Architecture ,Continuous
                      Integration dan Continuous Deployment
                    </li>
                    <li className="pt-3 hover:text-green-600">
                      Complete Course HACKTIV 8 Course GO Programming Create API
                      usong GIN Framework and postgresql
                    </li>
                    <li className="pt-3 hover:text-green-600">
                      Create HRM Application using Laravel,vue Js and mysql
                    </li>
                    <li className="pt-3 hover:text-green-600">
                      Create Audit Management System using Laravel,Mysql and
                      Vuejs.
                    </li>
                    <li className="pt-3 hover:text-green-600">
                      Refactoring API and implement web socket and pusher for
                      handle realtime monitoring queue
                    </li>
                    <li className="pt-3 hover:text-green-600">
                      Create and refactoring Queue System using Yii Framework
                    </li>
                    <li className="pt-3 hover:text-green-600">
                      Create Service WA gateway using Go and RabbitMq
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="flex bg-black w-64 p-4 no-scrollbar">
          <div className="basis-1/4  pt-5">
            {/* <Sidebar></Sidebar> */}
            {/* <button
              data-drawer-target="default-sidebar"
              data-drawer-toggle="default-sidebar"
              aria-controls="default-sidebar"
              type="button"
              className="inline-flex items-center p-0 mt-2 ml-0 text-sm text-white rounded-lg"
              onClick={openSidebar}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button> */}

            <aside
              className="top-0 right-0 z-40 w-64 h-screen"
              aria-label="Sidebar"
            >
              {/* top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 */}
              <div
                className={
                  sidebarOpen
                    ? "lg:hidden md:hidden fixed top-0 left-0 pl-3 z-40 w-32 h-screen bg-slate-900 "
                    : "top-0 right-0 -z-10 w-64 h-screen "
                }
              >
                {
                  <ul className="flex flex-wrap items-center mt-5 text-gray-900 dark:text-white">
                    <li>
                      <a
                        href="https://github.com/adityasuryadi"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          color="white"
                          icon={faGithub}
                          className="mr-4 hover:underline md:mr-6"
                        ></FontAwesomeIcon>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/aditya-suryadi-7966b01b5/"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          color="white"
                          className="mr-4 hover:underline md:mr-6"
                          size="lg"
                        ></FontAwesomeIcon>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://medium.com/@adityasuryaditya"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faMedium}
                          color="white"
                          className="mr-4 hover:underline md:mr-6"
                        ></FontAwesomeIcon>
                      </a>
                    </li>
                  </ul>
                }
                {/* <div className="top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "> */}
                <ul className="text-white">
                  <li className="mt-4">
                    <a
                      style={{
                        color: sectionActive === "home" ? "green" : "white",
                      }}
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
                      style={{
                        color: sectionActive === "about" ? "green" : "white",
                      }}
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
                      style={{
                        color:
                          sectionActive === "portofolio" ? "green" : "white",
                      }}
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
          </div>
        </div>
      </div>
      {sidebarOpen ? (
        <div
          drawer-backdrop=""
          className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"
          onClick={() => {
            openSidebar();
          }}
        ></div>
      ) : null}
    </main>
  );
}
