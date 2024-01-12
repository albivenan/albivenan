import { useEffect } from "react";
import frontend from "../../assets/frontend.svg";
import backend from "../../assets/backend.svg";
import design from "../../assets/design.svg";
import ghost from "../../assets/ghost.png";
import dollar from "../../assets/dollar.svg";
import stars from "../../assets/stars.svg";
import checklist from "../../assets/checklist.svg";
import profile from"../../assets/python.svg"

const SlideThree = () => {
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

    <div className="">
        <h2 className="text-5xl font-bold mb-6">Pelayanan untukmu</h2>
        <p className="leading-6">Incididunt irure voluptate eiusmod dolor sit officia commodo amet. Eu non aliqua cupidatat eiusmod. Dolor id est aliquip consectetur magna nisi. In officia nulla labore id duis eiusmod incididunt ea quis nostrud do culpa consectetur. Non dolor ea veniam aliqua quis incididunt do voluptate Lorem ea mollit.</p>
    </div>
      <div className="w-full -mt-8 parent px-8 m-auto flex leading-8 gap-8">
        <div className="parent1 w-1/3 flex flex-col justify-between mx-8 mr-10 gap-6">
          {/* Frontend */}
          <div
            className="frontend w-full duration-700 transition flex gap-x-5 hover:bg-sky-500 rounded-full"
            onMouseEnter={handleFrontend}
          >
            <div className="p-6 rounded-full bg-sky-500">
              <img
                src={frontend}
                alt="frontend"
                className="h-[40px] w-[40px]"
              />
            </div>
            <div className="flex flex-col justify-evenly">
              <h3 className="font-bold text-2xl">Frontend</h3>
              <p className="text-sm">Cepat & Interaktif</p>
            </div>
          </div>

          {/* Backend */}
          <div
            className="backend w-full flex gap-x-5 duration-700 transition rounded-full hover:bg-pink-500"
            onMouseEnter={handleBackend}
          >
            <div className="p-6 rounded-full bg-pink-500">
              <img src={backend} alt="backend" className="h-[40px] w-[40px]" />
            </div>
            <div className="flex flex-col justify-evenly">
              <h3 className="font-bold text-2xl">Backend</h3>
              <p className="text-sm">Aman & Terstruktur</p>
            </div>
          </div>

          {/* UI/UX Design */}
          <div
            className="design w-full rounded-full flex gap-x-5 duration-700 transition hover:bg-green-500"
            onMouseEnter={handleDesign}
          >
            <div className="p-6 rounded-full bg-green-500">
              <img src={design} alt="website" className="h-[40px] w-[40px]" />
            </div>
            <div className="flex flex-col justify-evenly">
              <h3 className="font-bold text-2xl">UI/UX Design</h3>
              <p className="text-sm">Sederhana, tetapi Elegan</p>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="parent2 w-full">
          <div className="relative h-[350px] ">
            <div className="satu stack-item active flex h-[350px] flex-col justify-between gap-6">
              <div>
                <h1 className="font-bold text-3xl">
                  Semuanya ada dalam genggamanmu. Wujudkan!
                </h1>
                <p className="pt-4 leading-6 first-letter:ml-4">
                  Sebagai Fullstack Developer dan UI/UX Designer, saya membawa kombinasi keahlian dalam merancang antarmuka menarik dan mengimplementasikan solusi backend yang handal. Dengan fokus pada harmonisasi desain dan fungsionalitas, saya siap memberikan kontribusi yang signifikan untuk proyek-proyek Anda. Dengan kreativitas desain dan keahlian teknis penuh, saya bertujuan memberikan pengalaman pengguna yang memukau dan solusi teknologi yang terintegrasi secara menyeluruh.
                </p>
              </div>
              <div className="">
                <div className="flex justify-evenly">
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
                    src={stars}
                    alt="checklist"
                    className="w-[20px] h-[20px] object-cover"
                  />
                  <h2 className="font-bold">Rating 4,8+</h2>
                </div>
                </div>
                
              </div>
            </div>
            <div className="dua opacity-0 stack-item flex h-[350px] flex-col justify-between gap-6">
              <div>
                <h1 className="font-bold text-3xl text-sky-700">
                  Akses kecepatan antarmuka yang unggul dan interaktif
                </h1>
                <p className="pt-4 leading-6 first-letter:ml-4">
                  Frontend bertujuan menciptakan antarmuka pengguna yang menarik dan responsif. Fokusnya pada pengalaman visual, interaktif, dan intuitif bagi pengguna. Pengembang frontend mengelola presentasi dan interaksi di sisi klien, memastikan tampilan yang estetis dan navigasi yang mudah digunakan. Dengan menggunakan teknologi web terkini, seperti HTML, CSS, dan JavaScript, tujuannya adalah memberikan pengalaman pengguna yang memikat dan memenuhi kebutuhan pengguna dengan efektif.
                </p>
              </div>
              <div className="">
                <div className="flex justify-evenly">
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
                    src={stars}
                    alt="checklist"
                    className="w-[20px] h-[20px] object-cover"
                  />
                  <h2 className="font-bold">Rating 4,8+</h2>
                </div>
                </div>
                
              </div>
            </div>
            <div className="tiga opacity-0 stack-item flex h-[350px] flex-col justify-between gap-6">
              <div>
                <h1 className="font-bold text-3xl text-pink-700">
                  Menganalisa pennggunaan struktur algoritma yang sesuai
                </h1>
                <p className="pt-4 leading-6 first-letter:ml-4">
                  Tujuan backend adalah memastikan kehandalan, keamanan, dan kinerja optimal sistem. Pengembang backend bertanggung jawab untuk merancang server, database, dan logika bisnis, menyediakan layanan yang dapat diandalkan serta mendukung pengalaman pengguna yang efisien.
                </p>
              </div>
              <div className="">
                <div className="flex justify-evenly">
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
                    src={stars}
                    alt="checklist"
                    className="w-[20px] h-[20px] object-cover"
                  />
                  <h2 className="font-bold">Rating 4,8+</h2>
                </div>
                </div>
               
              </div>
            </div>
            <div className="empat opacity-0 stack-item flex h-[350px] flex-col justify-between gap-6">
              <div>
                <h1 className="font-bold text-3xl text-green-700">
                  Profesionalitas merancang dengan mempertimbangkan kepuasan pengguna
                </h1>
                <p className="leading-6 pt-4 first-letter:ml-4">
                  Tujuan UI/UX design adalah menciptakan antarmuka yang mudah dinavigasi dan memikat, dengan fokus pada kepuasan pengguna. Desainer berusaha mencapai konsistensi, kejelasan, dan efisiensi untuk meningkatkan pengalaman pengguna, serta memberikan nilai fungsional yang tinggi dalam produk atau layanan yang dirancang.
                </p>
              </div>
              <div className="">
                <div className="flex justify-evenly">
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
        </div>
      </div>

      
    </>
  );
};

export default SlideThree;
