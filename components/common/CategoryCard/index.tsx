import MainImage from "../MainImage";

interface CategoryCardProps {
  items: {
    imgSource: string;
    title: string;
    buttonText: string;
  }[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ items }) => {
  return (
    <div className="m-auto flex w-[78%] justify-between gap-x-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative w-[50%] overflow-hidden group"
        >
          <MainImage
            className="cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            src={item.imgSource}
            alt=""
          />
          <div className="absolute bottom-[200px] left-[70px] h-16 w-80">
            <h2 className="mb-16 text-3xl font-bold text-white">
              {item.title}
            </h2>
            <button className="w-[130px] ml-[50px] cursor-pointer border-none bg-white px-6 py-5 text-sm font-bold text-black shadow-lg outline-none transition-all duration-300 ease-in-out hover:translate-y-[-4px] active:translate-y-[-1px]">
              {item.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
