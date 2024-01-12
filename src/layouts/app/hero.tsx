import profile from "/albi.jpg"


const Hero = () => {
  return (
    <div className="hero flex flex-reverse justify-between h-screen">
      <div className="profile w-1/2 flex justify-center items-center">
        <img src={profile} alt="gei zhinjian albivenanza" className="w-[500px] h-[500px] object-cover" />
      </div>

      <div className="text border-2 flex items-center w-1/2 p-20">
        <div>
        <p className="mb-4">Hai. Selamat datang!</p>
        <h1 className="font-bold text-5xl mb-4">Gei Zhinjian Albivenanza</h1>
        <p>In velit anim nisi labore commodo in ad.Voluptate culpa labore nisi anim laborum. Ad non ea consequat consequat laboris laboris duis nostrud minim.</p>
        <button className="rounded-lg bg-yellow-500 px-4 py-2 font-bold mt-6">Lihat selengkapnya</button>
      </div>
      </div>
    </div>
  );
};

export default Hero;
