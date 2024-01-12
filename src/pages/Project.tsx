import Accordian, { AccordianItem } from "../layouts/accordion";
import { useEffect, useState } from "react";
import ghost from "/Screenshot 2024-01-11 173447.png";
import { uas } from "../variables/uas";
import DOMPurify from 'dompurify';

const Project = () => {
  



  return (
    <>
      <h1 className="text-3xl lg:text-5xl font-bold text-center lg:w-[70%] mx-auto mt-32">Pengumpulan tugas satu semester pertama pada mata kuliah Sistem Teknologi & Informasi</h1>
      <p className="px-4 lg:w-1/2 mx-auto lg:text-center mt-6 mb-8" >Dikumpukan guna memenuhi tugas Ujian Akhir Semester pada mata kuliah Sistem Teknoogi & Informasi yang diampu oleh Ir. Adi Sucipto, M.M.</p>
      <div className="container m-auto">
      <div className="rounded-3xl mx-auto">
        <p className="text-2xl font-bold text-center mb-4">Website Wordpress</p>
        <img
          src={ghost}
          alt="ghost"
          className="rounded-t-3xl object-cover"
        />
        <p className="hover:bg-blue-700 bg-blue-500 text-center font-bold py-2 rounded-b-3xl"><a href="https://alvenz4.wordpress.com/" className="text-white">Lihat Website</a></p>
        
      </div>
      </div>
      <p className="text-2xl font-bold text-center mb-4 mt-8">Pembahasan & Pengerjaan Materi</p>
      <Accordian className="w-[80%] mx-auto">
  {uas.map((item, i) => (
    <AccordianItem key={i} value={i + 1} trigger={`Pertemuan ke-${i + 1}`}>
      {
        item.uts &&
        <div className="flex w-full justify-center mt-2">
        <a href={item.link} className="text-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 lg:px-60 rounded-full">
  {item.tes}
</a>
</div>
      }
      {
        item.sub && 
        <>
        <p className="font-bold text-lg lg:text-xl pt-2">Sub CPMK</p>
      <p className="" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.sub) }}></p>
        </>
      }
      {
        item.pokok && 
        <>
        <p className="font-bold text-lg lg:text-xl">Pokok Pembahasan</p>
      <p className="mb-2 border-b pb-2"  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.pokok) }}></p>
        </>
      }
      
      {
      item.yt && 
      <>
        <iframe
          className="ifra"
          src={item.yt}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        </>
    }
      <div className="flex gap-6 flex-wrap mt-2 mb-4">
        {
          item.materi &&
<a href={item.materi} download className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Lihat pembahasan
</a>
        }
      {
        item.tugas && 
<a href={item.tugas} download className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Lihat tugas
</a>
      }

{
  item.jawaban &&
<a href={item.jawaban} download className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Lihat jawaban
</a>
}

    </div>

    </AccordianItem>
  ))}
</Accordian>
      
    

    </>
  );
};

export default Project;
