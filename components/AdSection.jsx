import adBanner from '/add 1.png';

function AdSection() {
  return (
    <div className="relative flex justify-center items-center w-full mt-4">
      <img src={adBanner} alt="Mid Month Sale Banner" className="h-auto w-full rounded-full object-cover" />
      <button className="absolute h-16 w-16 md:h-24 md:w-24 bg-yellow-300 text-pink-950 font-bold rounded-full right-2 md:right-20 animate-pulse">
        Shop Now
      </button>
    </div>
  );
};

export default AdSection;