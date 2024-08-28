import MountainImage from "../assets/mountain.png";

function Root() {
  return (
    <div className="h-full bg-center bg-cover bg-mountain">
      <div className="flex flex-col gap-8 justify-center items-center p-8 h-full bg-black/30">
        <h1 className="text-4xl font-bold text-white">
          You got the travel plans, we got the travel vans.
        </h1>
        <div className="flex flex-col text-xl text-white">
          <p>Add adventure to your life by joining the #vanlife movement.</p>
          <p>Rent the perfect van to make your perfect road trip.</p>
        </div>
        <button className="py-2 px-20 w-full max-w-3xl text-xl font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-700">
          Find your van
        </button>
      </div>
    </div>
  );
}

export default Root;
