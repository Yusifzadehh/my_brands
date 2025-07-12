"use client";
import imgCard from "@/public/assets/icons/help-card-main.svg";
import imgCard2 from "@/public/assets/icons/help-card-img.svg";
import Image from "next/image";

interface CardData {
  title: string;
  items: string[];
  imgSrc: string;
}

const HelpCard: React.FC = () => {
  const cardData: CardData[] = [
    {
      title: "Əsas",
      items: [
        "Çatdırılma",
        "Xidmət səviyyəsinin qiymətləndirilməsi",
        "Sifarişin və qaytarılmanın izlənməsi",
      ],
      imgSrc: imgCard,
    },
    {
      title: "Məhsulun və vəsaitin qaytarılması",
      items: [
        "Məhsulu necə geri qaytarmaq olar?",
        "Elektron qaytarılma forması",
      ],
      imgSrc: imgCard2,
    },
    {
      title: "Sifariş",
      items: ["Qüsurlu məhsul", "Çatışmayan məhsul / Digər məhsul"],
      imgSrc: imgCard,
    },
    {
      title: "Məhsullar",
      items: ["Ölçü cədvəli", "Xəbərlərə necə abunə ola bilərəm ?"],
      imgSrc: imgCard,
    },
    {
      title: "Ödənişlər",
      items: [
        "Sifarişi necə ödəyə bilərəm ?",
        "Promo-kod / Hədiyyə kartı / Bonus",
      ],
      imgSrc: imgCard2,
    },
    {
      title: "Texniki səbəblər",
      items: ["Qeydiyyat problemləri", "Səhifə yükləmə problemləri"],
      imgSrc: imgCard,
    },
  ];

  return (
    <div className="container mt-6">
      <div className="pb-6">
        <h1 className="pb-[30px] text-[40px] font-bold uppercase text-[#131e38]">
          <span>Müştəri xidmətləri</span>
        </h1>
        <p className="pb-11 text-xl leading-5">
          Bu bölmədə sizin alış-verişinizi əyləncəli edəcək və asanlaşdıracaq
          məlumatlar yer alır.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 pb-10">
        {cardData?.map((card, index) => (
          <div
            key={index}
            className="h-[180px] w-full cursor-pointer border lg:w-[430px]"
          >
            <div className="flex items-center gap-6 border-b px-5 py-4">
              <Image src={card.imgSrc} width={20} alt={`card img ${index}`} />
              <p className="text-base font-semibold">{card.title}</p>
            </div>
            <div className="flex flex-col gap-1 px-5 pb-[5px] pt-5">
              {card.items.map((item, itemIndex) => (
                <p key={itemIndex} className="text-base">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCard;
