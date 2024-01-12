import { Outlet } from "react-router-dom"
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
import telegram from "../assets/telegram.svg";
import Accordian, { AccordianItem } from "../layouts/navcor";
import Header from "./header"
const NavFoot = () => {
  const navLinks = document.querySelector('.nav-links')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('top-[9%]')
        }
  return (
    <>
    <div className="relative"> <Header /></div>

    <Outlet />
    <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-bold text-blueGray-700">Mari tetap terhubung!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Agar silaturahmi tidak terputus, bolehkah pinjam seratus?
           </h5>
            <div className="mt-6 flex gap-x-6">
            <button className="rounded-full shadow-lg p-2 hover:-translate-y-2 duration-700 hover:shadow-blue-500" type="button">
                <img src={telegram} className="w-[30px] h-[30px]" />
              </button>
              <button className="rounded-full shadow-lg p-2 hover:-translate-y-2 duration-700 hover:shadow-blue-500" type="button">
                <img src={instagram} className="w-[30px] h-[30px]" />
              </button>
              <button className="rounded-full shadow-lg p-2 hover:-translate-y-2 duration-700 hover:shadow-blue-500" type="button">
                <img src={github} className="w-[30px] h-[30px]" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">Halaman Website </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Beranda</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/project">Tugas STI</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/uas">Kartu Ujian</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/contact">Kontak</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">Hal lainnya</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://alvenz4.wordpress.com/">alvenz4.wordpress.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">
                 Copyright 2024 - Gei Zhinjian Albivenanza
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default NavFoot;
