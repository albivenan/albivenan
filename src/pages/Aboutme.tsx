import albi from "/albi.jpg";
import satu from "/IMG-20240110-WA0023.jpg"
import dua from "/IMG-20240110-WA0025.jpg"
import tiga from "/IMG-20240110-WA0026.jpg"
import empat from "/IMG-20240110-WA0028.jpg"
import lima from "/IMG-20240111-WA0001.jpg"

const Aboutme = () => {
  return (
    <div className="container m-auto">
    <img src={albi} className="w-[200px] rounded-full h-[200px] object-cover m-auto" />
    <div className="flex">
      <div className="w-1/2 flex flex-col gap-y-4">
        <p>Nama     : Gei Zhinjian Albivenanza</p>
        <p>TTL      : Kebumen, 05 Juli 2005</p>
        <p>Alama    : Ds. Somagede 3/2, Kec. Sempor, Kab. Kebumen</p>
        <p>Nama      : Gei Zhinjian Albivenanza</p>
        <p>Nama      : Gei Zhinjian Albivenanza</p>
      </div>

      <div className="w-1/2 flex flex-col gap-y-4">
        <p>Status     : Mahasiswa</p>
        <p>Nama      : 231240001467</p>
        <p>Nama      : TIF-DC/1</p>
        <p>Nama      : Universitas Islam Nahdlatul Ulama Jepara</p>
        <p>Nama      : Gei Zhinjian Albivenanza</p>
      </div>
    </div>


    <div className="">
      <h2 className="font-bold text-5xl text-center">Galery</h2>
      <p className="text-center">Beberapa aktivitas saya yang tertangkap gambar</p>
      <div className="w-full max-w-5xl pb-5 p-10 mx-auto mb-5 gap-5 columns-3">
        <img src={satu} alt="satu" className="" />
        <img src={dua} alt="satu" className="" />
        <img src={tiga} alt="satu" className="mt-5" />
        <img src={empat} alt="satu" className="" />
        <img src={lima} alt="satu" className="mt-5" />
      </div>
    </div>


    </div>
  );
};

export default Aboutme;
