"use client";
import { useState } from "react";
import { MdOutlineBookmarkBorder } from "react-icons/md";

interface AccordionItem {
  title: string;
  content: string;
}

interface TabData {
  [key: string]: {
    label: string;
    accordions: AccordionItem[];
  };
}

const tabData: TabData = {
  tab1: {
    label: "Ümumi məlumat",
    accordions: [
      {
        title: "Necə sifariş etmək olar?",
        content:
          "Sizin rahatlığınız üçün biz məhsulların səmərəli sifarişi funkiyalarını istifadə vermişik. Siz qeydiyyatdan keçmiş istifadəçi və ya vaxtınız azdırsa qeydiyyatınız olmadan belə sifariş yerləşdirə bilərsiniz. Sizi maraqlandıran məhsul haqqında əlavə məlumat əldə etmək üçün +994504114114 nömrəsi vasitəsilə bizimlə əlaqə saxlaya bilərsiniz.",
      },
      {
        title:
          "Bir neçə min məhsul mövcuddur. Mənə maraqlı olan məhsul qrupunu asanlıqla necə seçə bilərəm?",
        content:
          "Səhifənin yuxarı hissəsində - “MyBrands” loqotipinin yanında istədəyiniz ifadə və açar sözləri axtarmağınıza yardımçı olacaq axtarış modulu yerləşir. Bu təbii ki, təkliflərin nəzərdən keçirilməsini sizin üçün əhəmiyyətli dərəcədə asanlaşdıracaqdır. Eyni zamanda, geniş məhsul çeşidimiz arasından məhz sizə lazım olanı seçməkdə yardımçı olmağımız üçün bizimlə  +994504114114  nömrəsi vasitəsilə əlaqə saxlamağınızı da təklif edirik.",
      },
      {
        title: "Necə sifariş etməli?",
        content: "Tab",
      },
      {
        title: "MyBrands kartını necə yeniləmək olar ?",
        content:
          "MyBrands kartınızı yeniləmək üçün Məlumat Mərkəzimizə müraciyət edin Məlumat Mərkəzi, Park Bulvar ticarət mərkəzində Lacoste mağazasında (müvəqqəti) yerləşir",
      },
    ],
  },
  tab2: {
    label: "Çatdırılma",
    accordions: [
      {
        title: "Ödənişdən neçə gün sonra sifarişi əldə edə bilərəm?",
        content: "- Adətən sifarişin çatdırılması 1-3 iş günü təşkil edir.",
      },
      {
        title: "Çatdırılma ödənişlidir?",
        content:
          "Sifarişin məbləğindən asılıdır. Hazırda 100 AZN-dən yuxarı sifarişlər pulsuz qaydada çatdırılır.",
      },
      {
        title:
          "Mən sifarişi qəbul edə bilmədim. Yeni çatdırılma tarixi təyin edə bilərəm?",
        content:
          "Siz əvvəlcədən +994504114114 nömrəsinə zəng edərək vaxtı razılaşdırmaqla sifarişin çatdırılmasını növbəti günə təyin edə bilərsiniz. Əlavə çatdırılmaların sayı 2 cəhdlə məhdudlaşır..",
      },
    ],
  },
  tab3: {
    label: "Geri qaytarılma",
    accordions: [
      {
        title: "tab3",
        content: "3",
      },
    ],
  },
  tab4: {
    label: "Ödəniş",
    accordions: [
      {
        title: "tab 4",
        content: "tab4",
      },
      {
        title: "Tab 4",
        content: "tab 4",
      },
    ],
  },
};

const HelpFaqAccordion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [activeAccordion, setActiveAccordion] = useState<string>("");

  return (
    <div className="container">
      <div>
        <h2 className="pb-10 text-3xl leading-6 uppercase font-bold color-[#131e38]">FAQ</h2>
      </div>
      <div
        role="tablist"
        className="tabs tabs-bordered flex flex-col items-center gap-8 lg:flex-row pb-28"
      >
        {/* TAB NAVIGATION */}
        <div className="h-[360px] w-full border lg:w-1/2">
          <div className="flex flex-col">
            {Object.keys(tabData).map((tab) => (
              <label
                key={tab}
                htmlFor={tab}
                className={`tab min-h-[3.75rem] cursor-pointer justify-start gap-2 p-4 pr-12 text-[17px] font-semibold ${activeTab === tab ? "border-l-4 border-[#212D4A] bg-[#f4f4f4]" : "border-b bg-white"} transition-colors duration-200 ease-out`}
              >
                <MdOutlineBookmarkBorder className="text-2xl" />

                <input
                  type="radio"
                  name="my_tabs_1"
                  id={tab}
                  role="tab"
                  aria-label={tabData[tab].label}
                  onChange={() => setActiveTab(tab)}
                  checked={activeTab === tab}
                  className="hidden"
                />
                {tabData[tab].label}
              </label>
            ))}
          </div>
        </div>

        {/* TAB CONTENT */}
        <div className="h-[360px] w-full border">
          {Object.keys(tabData).map((tab) => (
            <div
              key={tab}
              role="tabpanel"
              className={`tab-content ${
                activeTab === tab ? "block" : "hidden"
              }`}
            >
              <div className="join join-vertical w-full rounded-none">
                {tabData[tab].accordions.map((accordion, index) => (
                  <div
                    key={`${tab}-accordion-${index}`}
                    className="collapse join-item collapse-arrow border-b"
                  >
                    <input
                      type="radio"
                      name={`${tab}-accordion`}
                      id={`${tab}-accordion-${index}`}
                      checked={activeAccordion === `${tab}-accordion-${index}`}
                      onChange={() =>
                        setActiveAccordion(
                          activeAccordion === `${tab}-accordion-${index}`
                            ? ""
                            : `${tab}-accordion-${index}`,
                        )
                      }
                    />
                    <div className="collapse-title text-[17px]">
                      {accordion.title}
                    </div>
                    <div className="collapse-content">
                      <p className="text-[17px] font-semibold">
                        {accordion.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpFaqAccordion;
