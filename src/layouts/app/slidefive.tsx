import ghost from "../../assets/ghost.png"

const SlideFive = () => {

    return (
        <div className="w-full container m-auto">
        <h2 className="text-4xl font-bold text-center">My Project Recently</h2>
        <div className=" w-full flex items-center flex-col gap-6 mt-6 border-b-2 border-black rounded-lg py-8">
            <div className="w-[800px] border-4 overflow-hidden rounded-lg "> 
          <img
            src={ghost}
            alt="ghost"
            className="w-[800px] hover:scale-150 duration-1000 object-cover"
          />
          </div>
        </div>
      </div>
    )
}

export default SlideFive