import { useEffect, useState } from "react";

function Vans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getVans() {
      try {
        setLoading(true);
        const response = await fetch("/api/vans/");
        const data = await response.json();
        setVans(data.vans);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getVans();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-red-500">{error}</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold">...Loading</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-8 p-8">
      <h1 className="text-3xl font-bold">Explore our van options</h1>
      <div className="flex gap-4 justify-between items-center">
        <button className="py-2 px-4 text-teal-900 capitalize bg-orange-100 rounded-lg hover:text-orange-100 hover:bg-orange-700 focus:text-orange-100 focus:bg-orange-700">
          simple
        </button>
        <button className="py-2 px-4 text-teal-900 capitalize bg-orange-100 rounded-lg hover:text-orange-100 hover:bg-black focus:text-orange-100 focus:bg-black">
          luxury
        </button>
        <button className="py-2 px-4 text-teal-900 capitalize bg-orange-100 rounded-lg hover:text-orange-100 hover:bg-teal-900 focus:text-orange-100 focus:bg-teal-900">
          rugged
        </button>
        <button className="ml-auto font-bold text-gray-700 underline hover:text-black">
          Clear filters
        </button>
      </div>
      <ul className="grid grid-cols-1 gap-8 place-items-center sm:grid-cols-2">
        {vans.map(van => (
          <p>{van.name}</p>
        ))}
      </ul>
    </div>
  );
}

export default Vans;
