import albi from "/albi.jpg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import telegram from "../../assets/telegram.svg";
import satu from "/IMG-20240110-WA0023.jpg"
import dua from "/IMG-20240110-WA0025.jpg"
import tiga from "/IMG-20240110-WA0026.jpg"
import empat from "/IMG-20240110-WA0028.jpg"
import lima from "/IMG-20240111-WA0001.jpg"


const SlideOne = () => {
  return (
    <div className="container m-auto">
      <div className="w-full lg:w-2/3">
      <p className="mb-2 font-bold">siapa saya?</p>
      <h1 className="text-5xl font-bold">Gei Zhinjian Albivenanza</h1>
      <p className="first-letter:ml-4 leading-6 mt-4">Lulusan MIPA di SMAN 1 Tahunan Jepara TA. 2022/2023s. Sekarang berstatus sebagai mahasiswa Aktif di Universitas Islam Nahdlatul Ulama Jepara</p>
      </div>
    <div className="flex jutify-between flex-col lg:flex-row mt-4">
      <div className="w-full flex text-lg">
        <div className="">
        <p>Nama</p>
        <p>NIM</p>
        <p>TTL</p>
        <p>Alamat</p>
        </div>
        <div className="ml-6">
        <p>: Gei Zhinjian Albivenanza</p>
        <p>: 231240001467</p>
        <p>: Kebumen, 05 Juli 2005</p>
        <p>: Ds. Somagede 3/2, Kec. Sempor, Kab. Kebumen</p>
        </div>
      </div>

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
    </div>


    <div className="mt-20 bg-slate-100 pt-4">
      <h2 className="font-bold mb-2 text-3xl lg:text-5xl text-center">Galeri</h2>
      <p className="text-center mb-8">Beberapa aktivitas saya yang tertangkap gambar</p>
      <div className="w-full max-w-5xl pb-5 mx-auto mb-5 gap-5 columns-1 lg:columns-3">
        <div className="overflow-hidden rounded-lg my-2 lg:my-5 ">
        <img src={satu} alt="satu" className="hover:scale-125 duration-700" />
        </div>
        <div className="overflow-hidden rounded-lg my-2 lg:my-5 ">
        <img src={dua} alt="satu" className="hover:scale-125 duration-700" />
        </div>
        <div className="overflow-hidden rounded-lg  my-2 lg:my-5 ">
        <img src={tiga} alt="satu" className="w-full hover:scale-125 duration-700" />
        </div>
        <div className="overflow-hidden rounded-lg my-2 lg:my-5 ">
        <img src={empat} alt="satu" className="hover:scale-125 duration-700" />
        </div>
        <div className="overflow-hidden rounded-lg my-2 lg:my-5 ">
        <img src={lima} alt="satu" className="hover:scale-125 duration-700" />
        </div>
      </div>
    </div>


    </div>
  );
};

export default SlideOne;
