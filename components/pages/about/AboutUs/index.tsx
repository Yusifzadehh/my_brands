import MainImage from "@/components/common/MainImage";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Haqqımızda | MyBrands</title>
        <meta name="description" content="MyBrands Haqqımızda səhifəsi" />
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="container mx-auto w-[870px] px-4 py-12">
          <h1 className="pb-[0 0 20px] mb-10 text-center text-4xl font-bold text-gray-800">
            HAQQIMIZDA
          </h1>

          <div className="space-y-6 text-center leading-7 text-gray-700">
            <p className="pb-5">
              NOVCO şirkətlər qrupuna məxsus olan mağazalar MyBrands çətiri
              altında birləşmişdir. Şirkətin əsas fəaliyyət sahəsi pərakəndə
              ticarətdir.
            </p>
            <p className="pb-5">
              MYBRANDS.AZ saytı sizə dünya ölkələrindən dəbli məhsullar əldə
              etmək imkanı təqdim edir. Şirkət Liu JO, Coccinelle, Tommy
              Hilfiger, Calvin Klein, Adidas, Pablosky, Accessorize, Monsoon,
              United Colors of Benetton, Benetton Kids, Sisley, OVS, Atelier
              Rebul kimi məşhur brendləri bir şəbəkədə birləşdirir.
            </p>
            <p className="pb-5">
              Dəbi, qlamur və şıqlıq kimi qəbul edən insanların nə düşünməsindən
              asılı olmayaraq, biz dünyanı fərqli görürük. Biz ən xırda
              detallarda belə mükəmməliyə can atırıq, çünki onlar məhsulu
              əvəzsiz və dəyərli edir.
            </p>
            <p className="pb-5">
              MYBRANDS.AZ – Azərbaycanda ən böyük dəbli geyim və aksesuar
              saytıdır.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 md:flex-row">
            <div className="w-full md:w-2/3">
              <MainImage
                src="/assets/icons/aboutUsImg1.jpg"
                alt="Fashion Group"
                className="rounded-lg"
                width={872}
                height={426}
              />
            </div>
            <div className="w-full md:w-1/3">
              <MainImage
                src="/assets/icons/aboutUsImg2.jpg"
                alt="Fashion Group Individual"
                className="rounded-lg"
                width={424}
                height={426}
              />
            </div>
          </div>
          <div className="mt-16 text-center">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Məqsədimiz
            </h2>
            <p className="leading-7 text-gray-700">
              Ən yüksək keyfiyyətli məhsullar təqdim edən dünya brendlərini
              geniş çeşiddə təqdim etmək. Təkliflərimizin keyfiyyətinə görə tam
              məsuliyyəti daşıdığımız üçün Sizə yalnız etibarlı məhsullar təqdim
              etmək istəyirik.
            </p>
            <div className="mt-8">
              <MainImage
                src="/assets/icons/aboutUsImg3.jpg"
                alt="Mission"
                className="rounded-lg"
                width={1200}
                height={600}
              />
            </div>
          </div>
          <div className="mt-16 text-center">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Müştəri deyil, Dost
            </h2>
            <p className="mb-10 leading-7 text-gray-700">
              Biz müştərilərimizə fərqli yanaşma qərarı alaraq yola çıxmışıq.
              Müştərilərimizin tələblərini tam şəkildə anlamaq və onların
              inamını doğrultmaqla imicimizi möhkəmləndirmək istəyirik. Biz hər
              bir müştərinin bizim dostumuz olduğu faktını tamamilə anlayırıq.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <MainImage
                src="/assets/icons/aboutUsImg4.jpg"
                alt="Customer 1"
                className="rounded-lg"
                width={424}
                height={426}
              />
              <MainImage
                src="/assets/icons/aboutUsImg5.jpg"
                alt="Customer 2"
                className="rounded-lg"
                width={424}
                height={426}
              />
              <MainImage
                src="/assets/icons/aboutUsImg6.jpg"
                alt="Customer 3"
                className="rounded-lg"
                width={424}
                height={426}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
