import MainImage from "@/components/common/MainImage";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-white py-8 text-black">
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-5">
        <div>
          <h3 className="mb-4 font-bold">ŞİRKƏT</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-600 hover:underline">
                Haqqımızda
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">MÜŞTƏRİLƏR</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-600 hover:underline">
                Ödəniş və Çatdırılma
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:underline">
                Qaytarılma siyasəti
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:underline">
                Müştəri xidmətləri
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">MAĞAZA</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-600 hover:underline">
                Qadınlar
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:underline">
                Kişilər
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:underline">
                Uşaqlar
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:underline">
                Endirim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">HESAB</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-600 hover:underline">
                Qeydiyyat
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:underline">
                Sifarişlərim
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-gray-600">
            <Link
              href="mailto:help@mybrands.az"
              className="block font-bold text-black"
            >
              help@mybrands.az
            </Link>
          </p>
          <p className="mt-2 text-gray-600">
            <Link href="tel:+994504114114" className="font-bold text-black">
              +994504114114
            </Link>
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Müştəri xidməti ilə həftənin II, IV, V, VI, VII günləri 09:00 -
            18:00-dək əlaqə saxlaya bilərsiniz. Həftənin I və III-cü günləri
            qeyri iş günüdür.
          </p>
        </div>
        <div className="flex flex-col items-center pt-10 md:flex-row">
          <div className="mb-4 flex space-x-4 md:mb-0">
            <Link
              href="https://apps.apple.com/jp/app/mybrands-az/id6502641899?l=en-US"
              target="_blank"
            >
              <div className="flex h-16 w-48 cursor-pointer items-center justify-center rounded-lg bg-gray-100 shadow-md transition hover:shadow-lg">
                <MainImage
                  src="/assets/icons/apple-store.svg"
                  alt="App Store Logo"
                  className="mr-3 h-8 w-8"
                />
                <div className="text-left">
                  <p className="text-xs text-gray-600">Download on</p>
                  <p className="text-lg font-semibold text-black">App Store</p>
                </div>
              </div>
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=az.mybrands"
              target="_blank"
            >
              <div className="flex h-16 w-48 cursor-pointer items-center justify-center rounded-lg bg-gray-100 shadow-md transition hover:shadow-lg">
                <MainImage
                  src="/assets/icons/google-play.svg"
                  alt="Google Play Logo"
                  className="mr-3 h-8 w-8"
                />
                <div className="text-left">
                  <p className="text-xs text-gray-600">Download on</p>
                  <p className="text-lg font-semibold text-black">
                    Google Play
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t px-4 pt-6">
        <div className="mt-4 flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-gray-600">
            &copy; MYBRANDS - BÜTÜN HÜQUQLAR QORUNUR
          </p>
          <div className="mt-4 flex space-x-4 text-sm text-gray-600 md:mt-0">
            <Link href="#" className="hover:underline">
              Məxfilik Siyasəti
            </Link>
            <Link href="#" className="hover:underline">
              İstifadənin ümumi müddəaları və şərtləri
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
