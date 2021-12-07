import buttonClick from "../scripts/button";

//function buttonClick() {
//  location.href = "https://discord.gg/6EG8CSt7Aw"
//}

export default function Home() {
  return (
    <div className="container">
      <div className="w-screen h-screen bg-opacity-85 z-0" id="background">
        <div className="h-auto w-full text-center inline-flex justify-between">
          <img src="images/pianoking.png" className="h-28 m-4 mr-52"></img>
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
            <h1 className="text-5xl p-xl w-xl">Are you the one ?</h1>
            <p className="h-50 w-50 p-sm z-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus sem a mauris sodales ultrices. Quisque mattis, nisi ut mollis tempus, risus nibh efficitur lorem, ac dignissim lorem elit sit amet nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque bibendum turpis quis ligula sollicitudin consequat. Phasellus at nunc dui. Ut scelerisque euismod tristique. Suspendisse et iaculis ipsum, eu feugiat felis. Cras finibus id quam sit amet sollicitudin. In volutpat lorem erat, sed fermentum tortor venenatis vitae. Mauris quis augue ac sapien tincidunt rhoncus a et turpis. Sed congue felis et ex porttitor, quis bibendum ante commodo.</p>
            <p className="h-50 w-50 p-sm z-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus sem a mauris sodales ultrices. Quisque mattis, nisi ut mollis tempus, risus nibh efficitur lorem, ac dignissim lorem elit sit amet nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque bibendum turpis quis ligula sollicitudin consequat. Phasellus at nunc dui. Ut scelerisque euismod tristique. Suspendisse et iaculis ipsum, eu feugiat felis. Cras finibus id quam sit amet sollicitudin. In volutpat lorem erat, sed fermentum tortor venenatis vitae. Mauris quis augue ac sapien tincidunt rhoncus a et turpis. Sed congue felis et ex porttitor, quis bibendum ante commodo.</p>
            <p className="h-50 w-50 p-sm z-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus sem a mauris sodales ultrices. Quisque mattis, nisi ut mollis tempus, risus nibh efficitur lorem, ac dignissim lorem elit sit amet nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque bibendum turpis quis ligula sollicitudin consequat. Phasellus at nunc dui. Ut scelerisque euismod tristique. Suspendisse et iaculis ipsum, eu feugiat felis. Cras finibus id quam sit amet sollicitudin. In volutpat lorem erat, sed fermentum tortor venenatis vitae. Mauris quis augue ac sapien tincidunt rhoncus a et turpis. Sed congue felis et ex porttitor, quis bibendum ante commodo.</p>
          </div>
          <div className="flex h-auto w-2/5">
            <img src="images/cloud2.png" className="z-10 w-48 h-12 absolute right-0 center-0 m-5"></img>
          </div>
        </div>
      </div>
      <div className="bg-primary w-screen h-screen bg-opacity-85" id="secondBackground"></div>
    </div>
  )
}
