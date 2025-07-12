import Link from "next/link";

const TopNav = () => {
  return (
    <nav className="bg-gray-main py-2 text-black">
      <div className="container">
        <div className="flex gap-x-3">
          <Link
            className="border-b-[1px] border-transparent transition duration-500 hover:border-b-[1px] hover:border-b-black"
            href={"/about"}
          >
            Haqqımızda
          </Link>
          <Link
            className="border-b-[1px] border-transparent transition duration-500 hover:border-b-[1px] hover:border-b-black"
            href={"/support"}
          >
            Müştəri xidmətləri
          </Link>
          <Link
            className="border-b-[1px] border-transparent transition duration-500 hover:border-b-[1px] hover:border-b-black"
            href={"/blog"}
          >
            Bloq
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
