"use client";

import { usePathname } from "next/navigation";

import MainImage from "@/components/common/MainImage";
import Link from "next/link";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiChevronDown,
} from "react-icons/fi";
import { TbMinusVertical } from "react-icons/tb";
import ModalComponent from "@/components/pages/cart/CartModal";
import { useState } from "react";

const LogoNav = () => {
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <nav className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-5">
            <Link href={"/"}>
              <MainImage className="w-full" src="/common/logo.svg" alt="logo" />
            </Link>

            <ul className="mb-2 flex gap-x-5 p-0 text-xl font-semibold text-gray-main">
              <li>
                <Link
                  className={`transition duration-500 hover:text-gray-600 ${pathname === "/man" ? "text-black" : ""}`}
                  href={"/man"}
                >
                  Kişilər
                </Link>
              </li>
              <li>
                <Link
                  className={`transition duration-500 hover:text-gray-600 ${pathname === "/woman" ? "text-black" : ""}`}
                  href={"/woman"}
                >
                  Qadınlar
                </Link>
              </li>
              <li>
                <Link
                  className={`transition duration-500 hover:text-gray-600 ${pathname === "/children" ? "text-black" : ""}`}
                  href={"/children"}
                >
                  Uşaqlar
                </Link>
              </li>
            </ul>
          </div>
          {/* search and profile */}
          <div className="flex items-center text-xl text-black">
            <div className="flex items-center gap-x-5">
              <FiSearch />
              <FiHeart />
              <FiShoppingBag className="cursor-pointer" onClick={openModal} />
            </div>
            <TbMinusVertical className="mx-5 font-bold text-gray-main" />
            <Link className="flex items-center gap-x-5" href={"/profile"}>
              <FiUser />
              <span>Sizin hesabınız</span>
              <FiChevronDown />
            </Link>
          </div>
        </div>
      </div>
      {isModalOpen && <ModalComponent closeModal={closeModal} />}
    </nav>
  );
};

export default LogoNav;
