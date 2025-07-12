"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import MainButton from "@/components/ui/MainButton";

interface tabItem {
  id: string;
  label: string;
}

const ProfileMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const router = useRouter();

  const tabs: tabItem[] = [
    { id: "profile", label: "Mənim məlumatlarım" },
    { id: "orders", label: "Sifarişlərim" },
    { id: "changePassword", label: "Şifrəni dəyişmək" },
    { id: "needHelp", label: "Köməyə ehtiyacınız var?" },
  ];

  const date = ["Gün", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const month = [
    "Ay",
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avqust",
    "Sentyabr",
  ];
  const year = ["Il", 1915, 2024];

  const handleTabClick = (tabId: string) => {
    if (tabId === "needHelp") {
      router.push("/musteri-xidmetleri");
    } else {
      setActiveTab(tabId);
    }
  };

  const contentMap: Record<string, React.ReactNode> = {
    profile: (
      <div className="bg-white p-6">
        <div className="mb-8 flex items-center gap-4">
          <MdOutlineBookmarkBorder className="text-2xl" />
          <h2 className="text-2xl font-bold uppercase">Mənim məlumatlarım</h2>
        </div>
        <div className="mb-5">
          <p className="font-base mb-3 leading-6 text-[#7F7F7F]">
            E-mail ünvanı
          </p>
          <Input type="text" classNames="w-full" />
        </div>
        <div className="mb-5">
          <p className="font-base mb-3 leading-6 text-[#7F7F7F]">
            Telefon nömrəsi
          </p>
          <Input type="text" classNames="w-full" />
        </div>
        <div className="mb-5">
          <p className="font-base mb-3 leading-6 text-[#7F7F7F]">Tam ad</p>
          <Input type="text" classNames="w-full" />
        </div>
        <div className="mb-5">
          <p className="font-base mb-3 leading-6 text-[#7F7F7F]">
            Doğum tarixi
          </p>
          <div className="flex gap-4">
            <Select options={date} />
            <Select options={month} />
            <Select options={year} />
          </div>
        </div>
        <div className="mb-10">
          <p className="font-base mb-3 leading-6 text-[#7F7F7F]">Cins</p>
          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Input
                type="radio"
                name="gender"
                value="male"
                classNames="radio border-blue-dark/15 input bg-white w-5 h-5 p-2 rounded-full border-2 bg-gray-200"
              />
              <p>Kişi</p>
            </div>
            <div className="flex items-center gap-1">
              <Input
                type="radio"
                name="gender"
                value="female"
                classNames="radio border-blue-dark/15 input bg-white w-5 h-5 p-2 rounded-full border-2 bg-gray-200"
              />
              <p>Qadın</p>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <MainButton type="submit" styles="uppercase h-[60px] w-full text-lg ">
            Dəyişiklikləri yadda saxla
          </MainButton>
        </div>
      </div>
    ),
    orders: (
      <div className="bg-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="mb-4 flex items-center gap-4">
              <MdOutlineBookmarkBorder className="text-2xl" />
              <h2 className="text-2xl font-bold uppercase">Sifarişlərim</h2>
            </div>
            <p className="pb-0 pl-[50px] pr-0 pt-4 text-[17px] leading-6">
              Sifarişləri göstər 0
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Input type="date" />
            <Input type="date" />
          </div>
        </div>
        <div>sifarisler</div>
      </div>
    ),
    changePassword: (
      <div className="bg-white p-6">
        <div className="mb-8 flex items-center gap-4">
          <MdOutlineBookmarkBorder className="text-2xl" />
          <h2 className="text-2xl font-bold uppercase">Şifrəni dəyişmək</h2>
        </div>
        <div className="mb-5">
          <p className="font-base mb-3 leading-6 text-[#7F7F7F]">
            Hazırkı şifrə
          </p>
          <Input type="password" classNames="w-full" />
        </div>
        <div className="mb-5">
          <p className="font-base mb-3 leading-6 text-[#7F7F7F]">Yeni şifrə</p>
          <Input type="password" classNames="w-full" />
        </div>
        <div className="mb-5">
          <p className="font-base mb-3 leading-6 text-[#7F7F7F]">
            Yeni şifrəni yenidən daxil edin
          </p>
          <Input type="password" classNames="w-full" />
        </div>
        <div>
          <p className="text-s leading-5">*8 və ya daha çox simvol olmalıdır</p>
        </div>
      </div>
    ),
  };

  return (
    <div className="mb-28 bg-gray-100">
      <div className="container flex flex-col gap-4 pb-32 lg:w-[90%] lg:flex-row">
        {/*  TAB NAVIGATION*/}
        <div className="w-full bg-white lg:w-1/3">
          <div className="p-6">
            <h2 className="text-xl font-light">Salam</h2>
            <p className="text-xl font-bold">Gahramanova Aytac</p>
          </div>
          <ul className="mt-4">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex cursor-pointer items-center gap-2 border-b p-3 ${
                  activeTab === tab.id
                    ? "border-l-4 border-l-[#212D4A] bg-gray-200"
                    : "text-gray-700"
                }`}
              >
                <span className="material-icons">
                  <MdOutlineBookmarkBorder className="text-2xl" />
                </span>
                <span>{tab.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* TAB CONTENT  */}
        <div className="flex-1">{contentMap[activeTab]}</div>
      </div>
    </div>
  );
};

export default ProfileMenu;
