import buttonClick from "../scripts/button";

//function buttonClick() {
//  location.href = "https://discord.gg/6EG8CSt7Aw"
//}

export default function Home() {
  return (
    <div className="container">
      <div className="w-screen h-screen bg-opacity-85 z-0" id="background">
        <div className="h-auto w-full text-center inline-flex justify-between">
          <img src="images/pianoking.png" className="h-28 m-4 mr-44"></img>
          <img src="images/Logo-Negatif.png" className="h-28 m-4"></img>
          <button className="bg-secondary w-72 h-16 border-8 border-primary text-xs top-40 right-40 m-8" onClick={buttonClick} type="button" id="discordButton">
            <div className="w-auto flex justify-center align-center">
              <p className="font-extrabold">JOIN THE KINGDOM</p>
            </div>
          </button>
        </div>
        <div className="flex h-auto w-auto justify-center text-center align-center">
        <div className="flex h-auto w-2/5">
          <img src="images/cloud1.png" className="z-10 w-72 h-24 m-10"></img>
        </div>
          <div className="block h-auto w-screen justify-center w-xl text-center align-center text-white">
            <button className="bg-darkgrey m-12 p-8 rounded-full text-3xl mt-32 mb-32">
              <div className="w-auto flex justify-center align-center text-white">
                <p className="font-extrabold">ACTIVATE YOUR POWER</p>
              </div>
            </button>
            <p className="h-50 w-50 p-sm z-20 text-2xl">If you are here, it means that you are the proud owner of the Angel-NFT, congratulations !</p>
            <p className="h-50 w-50 p-sm z-20 text-2xl">Your power : By clicking on the top button, or by clicking <a href="url" className="text-darkgrey">here</a>, if you possess the angel nft, you are going to activate your power. Your power is to invite 12 random ntf-holders, excluding you.</p>
          </div>
          <div className="flex h-auto w-2/5">
            <img src="images/cloud2.png" className="z-10 w-48 h-12 absolute right-0 center-0 m-5"></img>
          </div>
        </div>
      </div>
    </div>
  )
}
