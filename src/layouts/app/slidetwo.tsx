import { useState, useEffect } from "react";

import { techtools } from "../../variables/tools.tsx";

const SlideTwo = () => {
  const [techtoolsItem, setTechtoolsItem] = useState(techtools);

  return (
    <div id="alat&teknologi" className="px-4 mt-16">
        <div className="">
          <h3 className="font-bold text-5xl">
            Software untuk Pengembangan
          </h3>
          <p className="leading-6 mt-6 w-full lg:w-3/4">
            Pemahaman tentang library, bahasa, dan framework dalam pengembangan
            perangkat lunak sangat penting. Kombinasi dari ketiganya digunakan
            fungsi untuk membangun perangkat lunak dengan lebih efisien,
            efektif, aman, dan interaktif.
          </p>
        </div>
        <div className="container mt-8 mx-auto flex flex-wrap gap-8 justify-around">
{techtools.map((item, i) => (
  <div
    className="card2 overflow-hidden px-4 py-6 hover:shadow-2xl hover:-translate-y-[5px] transition duration-700 rounded-2xl bg-blue-100"
    key={i}
  >
    <div className="flex flex-wrap">
      <div className="lg:w-[220px] flex flex-col items-center gap-y-4">
      <div className="w-[80px] lg:w-[110px] flex justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="img w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] object-center"
        />
      </div>
      <div>
      <h2 className="font-bold lg:text-xl">{item.name}</h2>
      <p className="md:none mt-2">{item.description}</p>
      </div>
      </div>
    </div>
  </div>
))}
        </div>
    </div>
  );
};

export default SlideTwo;
