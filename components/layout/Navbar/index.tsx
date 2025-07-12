import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-y-1 border-gray-main border-y py-5 text-xl font-medium text-black">
      <div className="container flex gap-x-5">
        <ul className="flex items-center gap-x-5">
          <li>
            <Link href={"/new"}>Yeniliklər</Link>
          </li>
          <li>
            <Link href={"/brands"}>Brendlər</Link>
          </li>
          <li>
            <Link href={"/clothes"}>Geyim</Link>
          </li>
          <li>
            <Link href={"/shoes"}>Ayaqqabı</Link>
          </li>
          <li>
            <Link href={"/accessories"}>Çanta və aksesuarlar</Link>
          </li>
          <li>
            <Link href={"/beauty"}>Gözəllik</Link>
          </li>
          <li>
            <Link href={"/home"}>Ev</Link>
          </li>
          <li className="text-red-main">
            <Link href={"/sale"}>Endirim</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
