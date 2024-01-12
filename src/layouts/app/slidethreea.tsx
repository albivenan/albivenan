import { useState, useEffect } from "react";
import frontend from "../../assets/frontend.svg";
import backend from "../../assets/backend.svg";
import design from "../../assets/design.svg";
import ghost from "../../assets/ghost.png";
import dollar from "../../assets/dollar.svg";
import stars from "../../assets/stars.svg";
import checklist from "../../assets/checklist.svg";
import chart from "../../assets/chart.svg";
import "./slidethree.css";

const SlideThreea = () => {
  function handleFrontend() {
    const satu = document.querySelector(".satu");
    if (satu) {
      satu.classList.remove("active");
    }

    const dua = document.querySelector(".dua");
    const tiga = document.querySelector(".tiga");
    const empat = document.querySelector(".empat");
    dua.classList.toggle("active");
    tiga.classList.remove("active");
    empat.classList.remove("active");
  }
  function handleBackend() {
    const satu = document.querySelector(".satu");
    if (satu) {
      satu.classList.remove("active");
    }

    const dua = document.querySelector(".dua");
    const tiga = document.querySelector(".tiga");
    const empat = document.querySelector(".empat");
    dua.classList.remove("active");
    tiga.classList.toggle("active");
    empat.classList.remove("active");
  }
  function handleDesign() {
    const satu = document.querySelector(".satu");
    if (satu) {
      satu.classList.remove("active");
    }
    const dua = document.querySelector(".dua");
    const tiga = document.querySelector(".tiga");
    const empat = document.querySelector(".empat");
    dua.classList.remove("active");
    tiga.classList.remove("active");
    empat.classList.toggle("active");
  }
  // Similar adjustments for handleBackend and handleDesign functions

  useEffect(() => {
    const parent = document.querySelector(".parent");
    const handleMouseLeave = () => {
      const satu = document.querySelector(".satu");
      const dua = document.querySelector(".dua");
      const tiga = document.querySelector(".tiga");
      const empat = document.querySelector(".empat");
      if (satu) {
        satu.classList.toggle("active");
      }
      dua.classList.remove("active");
      tiga.classList.remove("active");
      empat.classList.remove("active");
    };

    if (parent) {
      parent.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        parent.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <>
      <div className="relative flex-col px-4">
        <div className="flex flex-col items-center">
          <div className="flex gap-y-4">
            <div className="frontend flex gap-x-5 hover:bg-yellow-200 transition duration-500 rounded-full">
              <div className="p-6 rounded-full bg-yellow-200">
                <img
                  src={frontend}
                  alt="frontend"
                  className="h-[40px] w-[40px]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-2xl">Frontend</h3>
                <p className="text-sm">Cepat & Interaktif</p>
              </div>
            </div>
            <div className="backend rounded-full transition duration-500 flex gap-x-5 hover:bg-red-200">
              <div className="p-6 rounded-full bg-red-200">
                <img
                  src={backend}
                  alt="backend"
                  className="h-[40px] w-[40px]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-2xl">Backend</h3>
                <p className="text-sm">Aman & Terstruktur</p>
              </div>
            </div>
            <div className="design rounded-full transition duration-500 flex gap-x-5 hover:bg-green-200">
              <div className="p-6 rounded-full bg-green-200">
                <img src={design} alt="website" className="h-[40px] w-[40px]" />
              </div>
              <div className="flex flex-col justify-center pr-4">
                <h3 className="font-bold text-2xl">UI/UX Design</h3>
                <p className="text-sm">Sederhana, tetapi Elegan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="parent py-8">
          <div className="satu stack-item active">
            <div>
              <h1 className="font-bold text-3xl text-center">
                header developer. Build yours gratefully
              </h1>
              <p className="py-4 leading-6">
                Elit mollit officia est adipisicing laboris velit esse est
                veniam fugiat tempor exercitation pariatur esse. Qui consectetur
                sunt culpa in commodo duis exercitation. Lorem consectetur
                consectetur excepteur consequat in anim. Aliquip minim mollit
                elit excepteur ipsum. Nisi quis adipisicing id excepteur ullamco
                ex laboris. Tempor pariatur sint pariatur nulla cupidatat
                reprehenderit deserunt quis proident et ad in veniam cillum.
              </p>
            </div>
          </div>
          <div className="satu stack-item active mt-2">
            <div>
              <h1 className="font-bold text-3xl text-center">
                header developer. Build yours gratefully
              </h1>
              <p className="py-4 leading-6">
                Elit mollit officia est adipisicing laboris velit esse est
                veniam fugiat tempor exercitation pariatur esse. Qui consectetur
                sunt culpa in commodo duis exercitation. Lorem consectetur
                consectetur excepteur consequat in anim. Aliquip minim mollit
                elit excepteur ipsum. Nisi quis adipisicing id excepteur ullamco
                ex laboris. Tempor pariatur sint pariatur nulla cupidatat
                reprehenderit deserunt quis proident et ad in veniam cillum.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-evenly">
              <div className="flex flex-col items-center">
                <img
                  src={checklist}
                  alt="terpercaya"
                  className="w-[20px] h-[20px] object-cover"
                />
                <h2 className="font-bold">Trusted</h2>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={dollar}
                  alt="murah"
                  className="w-[20px] h-[20px] object-cover"
                />
                <h2 className="font-bold">Cheaper</h2>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={chart}
                  alt="chart"
                  className="w-[20px] h-[20px] object-cover"
                />
                <h2 className="font-bold">18+ Ordered</h2>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={stars}
                  alt="checklist"
                  className="w-[20px] h-[20px] object-cover"
                />
                <h2 className="font-bold">Rating 4,8+</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideThreea;
