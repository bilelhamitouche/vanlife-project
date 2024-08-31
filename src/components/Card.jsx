function Card({ name, imageUrl, price, type }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <img
        src={imageUrl}
        alt={`${name} image`}
        className="object-fill rounded-lg"
      />
      <div className="flex justify-between items-center w-full">
        <h2 className="text-2xl font-bold text-black">{name}</h2>
        <div className="flex flex-col justify-center items-center">
          <span className="text-2xl font-bold text-black">${price}</span>
          <span className="text-xl">/day</span>
        </div>
      </div>
      <button
        className={`${type === "simple" ? "bg-orange-600" : type === "rugged" ? "bg-teal-900" : "bg-black"} text-xl font-bold py-2 px-4 self-start text-pink-50 capitalize rounded-lg`}>
        {type}
      </button>
    </div>
  );
}

export default Card;
