import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';


const SlideFour = () => {

  return (
    <div className="container">
      <h4 className="text-5xl font-bold lg:mb-10">
        Why you need to hire me <br />
        as influencer?
      </h4>
      <p className="first-letter:ml-4 leading-6 my-4">
        Ketika dipekerjakan, pendekatan saya dalam menangani tantangan frontend
        berkisar pada kombinasi pemecahan masalah yang cermat dan pemikiran
        berorientasi pengguna. Saya mengatasi masalah secara sistematis, pertama
        dengan memahami sepenuhnya kebutuhan pengguna, lalu memanfaatkan
        keahlian saya dalam HTML, CSS, dan JavaScript untuk merancang solusi
        yang elegan dan fungsional. Baik itu mengoptimalkan kinerja, memastikan
        kompatibilitas lintas browser, atau mengimplementasikan desain
        responsif, pendekatan pemecahan masalah saya melibatkan perhatian detail
        dan komitmen untuk memberikan solusi frontend yang tidak hanya memenuhi
        persyaratan teknis tetapi juga melebihi harapan pengguna, meningkatkan
        pengalaman pengguna secara keseluruhan.
      </p>
      <p className="first-letter:ml-4 leading-6">
        Dalam menangani tantangan backend sejak bergabung, saya telah
        menunjukkan metodologi pemecahan masalah yang kokoh berbasis efisiensi
        dan skalabilitas. Pendekatan saya melibatkan pemahaman mendalam tentang
        arsitektur sistem, manajemen basis data, dan teknologi server-side.
        Dengan memanfaatkan keahlian saya dalam bahasa seperti Python dan
        framework seperti Django, saya berhasil menyelesaikan masalah backend
        dengan mengoptimalkan kueri basis data, mengimplementasikan algoritma
        yang efisien, dan memastikan keamanan data. Pendekatan ini tidak hanya
        meningkatkan kinerja keseluruhan sistem backend, tetapi juga
        berkontribusi pada pembuatan aplikasi yang stabil dan dapat diskalakan
        sesuai dengan tujuan organisasi.
      </p>
      <p className="first-letter:ml-4 leading-6 my-4">
        Dalam menangani tantangan desain UI/UX sejak awal bergabung, pendekatan
        saya dalam pemecahan masalah berputar di sekitar filosofi desain yang
        berorientasi pada manusia. Saya memulai dengan penelitian menyeluruh
        terhadap perilaku dan preferensi pengguna, memastikan dasar yang kuat
        untuk pengambilan keputusan. Melalui prototyping iteratif dan pengujian
        pengguna, saya mengidentifikasi titik-titik sulit dan menyempurnakan
        desain untuk meningkatkan kegunaan. Baik itu menangani arsitektur
        informasi, hirarki visual, atau desain interaksi, pendekatan pemecahan
        masalah saya melibatkan kolaborasi terus-menerus dengan pemangku
        kepentingan, menggabungkan umpan balik, dan mengiterasi desain untuk
        mencapai kepuasan pengguna yang optimal. Metodologi ini tidak hanya
        memastikan pengalaman pengguna yang lancar dan intuitif, tetapi juga
        menyelaraskan solusi UI/UX dengan tujuan bisnis lebih luas dan harapan
        pengguna.
      </p>
      <Swiper navigation={true} 
      slidesPerView={3}
      
      spaceBetween={30}
      pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <div className="grid justify-items-center mt-12">
        <h1 className="text-4xl font-bold text-center">
          Tertarik bekerja sama
          <br /> dengan saya?
        </h1>
        <Link to="/contact" className="bg-blue-500 mt-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default SlideFour;
