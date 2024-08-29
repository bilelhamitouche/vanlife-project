import { Link } from "react-router-dom";
import campingImage from "../assets/camping.png";

function About() {
  return (
    <div className="bg-pink-50">
      <img
        src={campingImage}
        alt="camping image"
        className="object-cover w-full"
      />
      <div className="flex flex-col gap-6 p-8">
        <h1 className="text-4xl font-bold">
          Don't squeeze in a sedan when you could relax in a van
        </h1>
        <p className="text-lg font-normal">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are certified before each trip to ensure your travel
          plans can go off without a hitch. (Hitch costs extra)
        </p>
        <p className="text-lg font-normal">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="p-8 bg-orange-300 rounded-lg">
          <h2 className="mb-2 text-2xl font-bold">
            Your destination is waiting.
          </h2>
          <h2 className="mb-6 text-2xl font-bold">Your van is ready.</h2>
          <Link
            to="/vans"
            className="py-3 px-4 text-xl font-semibold text-pink-50 bg-black rounded-lg">
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
