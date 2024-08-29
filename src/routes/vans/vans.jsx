
function Vans() {
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
    </div>
  );
}

export default Vans;
