
import uas from "/Screenshot 2024-01-11 001150.png"
import kartu from "/Cetak Kartu Ujian.pdf"

const Uas = () => {
  return (
    <div className="container mt-32 mx-auto px-8">
      <p className="text-center font-bold">Kartu Peserta</p>
      <h1 className="text-3xl lg:text-5xl text-center font-bold">Ujian Akhir Semester</h1>
      <p className="text-center mt-1">UNISNU Jepara Ta. 2023/2024 semeste 1</p>
     
      <div className=" mt-8 mx-auto flex flex-col justify-center">
      
      <img src={uas} alt='lartu ujian' className=" object-contain m-auto" />
      <a href={kartu} download className="mt-4 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Unduh kartu ujian
</a>
<p className="text-red-700 text-xs mt-2">*Ditunjukkan sebagai syarat mengikuti UAS</p>
      </div>
    </div>
  )
};

export default Uas;