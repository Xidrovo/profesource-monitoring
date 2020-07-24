import React from "react";
import Sidebar from "components/Sidebar.js";
import Navbar from "components/Navbar.js";
import UserCard from "components/UserCard.js"

export default function Users() {
    return(
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-gray-200">
            <Navbar />
                <div className="relative bg-gray-600 md:pt-32 pb-16 pt-12">
                    <div className="px-4 md:px-10 mx-auto w-full">
                        <div>
                            {/* Card stats */}
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                    <div className="flex-auto p-4">
                                    <div className="flex flex-wrap">
                                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 className="text-gray-500 uppercase font-bold text-xs">
                                            Traffic
                                        </h5>
                                        <span className="font-semibold text-xl text-gray-800">
                                            350,897
                                        </span>
                                        </div>
                                        <div className="relative w-auto pl-4 flex-initial">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                            <i className="far fa-chart-bar"></i>
                                        </div>
                                        </div>
                                    </div>
                                        <p className="text-sm text-gray-500 mt-4">
                                        <span className="text-green-500 mr-2">
                                        <i className="fas fa-arrow-up"></i> 3.48%
                                        </span>
                                        <span className="whitespace-no-wrap">
                                        Desde el ultimo mes
                                        </span>
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                    <div className="flex-auto p-4">
                                    <div className="flex flex-wrap">
                                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 className="text-gray-500 uppercase font-bold text-xs">
                                            Nuevos usuarios
                                        </h5>
                                        <span className="font-semibold text-xl text-gray-800">
                                            24
                                        </span>
                                        </div>
                                        <div className="relative w-auto pl-4 flex-initial">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                                            <i className="fas fa-chart-pie"></i>
                                        </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-4">
                                        <span className="text-red-500 mr-2">
                                        <i className="fas fa-arrow-down"></i> 3.48%
                                        </span>
                                        <span className="whitespace-no-wrap">
                                        Desde el ultimo mes
                                        </span>
                                    </p>
                                    </div>
                                </div>
                                </div>
                    
                                <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                    <div className="flex-auto p-4">
                                    <div className="flex flex-wrap">
                                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 className="text-gray-500 uppercase font-bold text-xs">
                                            Actuación
                                        </h5>
                                        <span className="font-semibold text-xl text-gray-800">
                                            49,65%
                                        </span>
                                        </div>
                                        <div className="relative w-auto pl-4 flex-initial">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
                                            <i className="fas fa-percent"></i>
                                        </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-4">
                                        <span className="text-green-500 mr-2">
                                        <i className="fas fa-arrow-up"></i> 12%
                                        </span>
                                        <span className="whitespace-no-wrap">
                                        Desde el ultimo mes
                                        </span>
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                                                    
                    </div>

                </div>
                <div class="px-6 ml-4 mt-5 ">
                            <div class="block lg:flex lg:flex-rows">
                                
                                <div className="mr-3 flex-1">
                                <UserCard
                                
                                img="https://i.postimg.cc/05hjbVC4/me.jpg"
                                name="Carlos Carvajal"
                                username="cxcarvaj"
                                favs="7"
                                comments="9">
                                    
                                </UserCard>
                                </div>

                                <div className="mr-3 flex-1">
                                <UserCard
                                
                                img="https://i.postimg.cc/RZdzXTFP/profilepicturev2.jpg"
                                name="Kelly Castro"
                                username="keescast"
                                favs="1"
                                comments="5">
                                    
                                </UserCard>
                                </div>
                                <div className="mr-3 flex-1">
                                <UserCard
                                
                                img="https://i.postimg.cc/pXv74n33/profilepicturev2.jpg"
                                name="Vielka Villavicencio"
                                username="vvcencio"
                                favs="3"
                                comments="2">
                                    
                                </UserCard>
                                </div>
                                <div className="mr-3 flex-1">
                                <UserCard
                                
                                img="https://i.postimg.cc/T2s4CDQV/c240d0d1-5abe-4d82-8abe-c263546fd03e.jpg"
                                name="Freddy Ponce"
                                username="fdponce"
                                favs="60"
                                comments="84">
                                    
                                </UserCard>
                                </div>
                                
                              
                            </div>
                        </div>

                        <div class="px-6 ml-4 mt-5 ">
                            <div class="block lg:flex lg:flex-rows">
                                
                                <div className="mr-3 flex-1">
                                <UserCard
                                
                                img="https://cdn.pixabay.com/photo/2016/07/16/03/50/pigs-1520968_960_720.jpg"
                                name="Rodrigo Fernandez"
                                username="rodfer9"
                                favs="2"
                                comments="9">
                                    
                                </UserCard>
                                </div>

                                <div className="mr-3 flex-1">
                                <UserCard
                                
                                img="https://cdn.pixabay.com/photo/2016/05/31/23/18/anger-1428042_960_720.png"
                                name="Marcela Castillo"
                                username="marcas08"
                                favs="73"
                                comments="50">
                                    
                                </UserCard>
                                </div>
                                <div className="mr-3 flex-1">
                                <UserCard
                                
                                img="https://cdn.pixabay.com/photo/2017/10/25/22/33/ballet-dancer-2889590_960_720.jpg"
                                name="Samanta Prez"
                                username="smap76"
                                favs="64"
                                comments="60">
                                    
                                </UserCard>
                                </div>
                                <div className="mr-3 flex-1">
                                <UserCard
                                
                                img="https://cdn.pixabay.com/photo/2019/07/16/23/30/bird-4342754_960_720.jpg"
                                name="Valentina Cabellero"
                                username="valcabe96"
                                favs="10"
                                comments="20">
                                    
                                </UserCard>
                                </div>
                                
                              
                            </div>
                        </div>
                        <div class="px-6 ml-4 mt-5 ">
                            <div class="block lg:flex lg:flex-rows">
                                
                                <div className="mr-3 flex-1">
                                <UserCard
                                
                                img="https://cdn.pixabay.com/photo/2017/01/18/18/03/filter-1990470_960_720.jpg"
                                name="Rocio Robles"
                                username="rociorob_98"
                                favs="300"
                                comments="900">
                                    
                                </UserCard>
                                </div>

                                <div className="mr-3 flex-1">
                                <UserCard
                                
                                img="https://cdn.pixabay.com/photo/2020/03/17/18/27/background-4941471_960_720.jpg"
                                name="Daysi Bravo"
                                username="day223"
                                favs="74"
                                comments="876">
                                    
                                </UserCard>
                                </div>
                                <div className="mr-3 flex-1">
                                <UserCard
                                
                                img="https://cdn.pixabay.com/photo/2018/08/18/18/50/sunset-3615276_960_720.jpg"
                                name="Myrka Zumo"
                                username="myrka_87"
                                favs="567"
                                comments="343">
                                    
                                </UserCard>
                                </div>
                                <div className="mr-3 flex-1">
                                <UserCard
                                
                                img="https://cdn.pixabay.com/photo/2018/04/12/16/13/flower-3313905_960_720.jpg"
                                name="Norma Jimenez"
                                username="njime54"
                                favs="67"
                                comments="9887">
                                    
                                </UserCard>
                                </div>
                                
                              
                            </div>
                        </div>
                
                        <footer className="block py-4">
                            <div className="container mx-auto px-4">
                            <hr className="mb-4 border-b-1 border-gray-300" />
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full md:w-4/12 px-4">
                                <div className="text-sm text-gray-600 font-semibold py-1">
                                    Copyright © {new Date().getFullYear()}{" "}
                                    <a
                                    href="https://www.creative-tim.com"
                                    className="text-gray-600 hover:text-gray-800 text-sm font-semibold py-1"
                                    >
                                    Creative Tim
                                    </a>
                                </div>
                                </div>
                                <div className="w-full md:w-8/12 px-4">
                                <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                                    <li>
                                    <a
                                        href="https://www.creative-tim.com"
                                        className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                                    >
                                        Creative Tim
                                    </a>
                                    </li>
                                    <li>
                                    <a
                                        href="https://www.creative-tim.com/presentation"
                                        className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                                    >
                                        About Us
                                    </a>
                                    </li>
                                    <li>
                                    <a
                                        href="http://blog.creative-tim.com"
                                        className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                                    >
                                        Blog
                                    </a>
                                    </li>
                                    <li>
                                    <a
                                        href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/master/LICENSE.md"
                                        className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                                    >
                                        MIT License
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </footer>
            </div>  
        </>
    )

}