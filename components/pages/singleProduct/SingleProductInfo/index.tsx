"use client";

import { useCloSingle } from "@/services/queryes";
import { useParams } from "next/navigation";

const SingleProductInfo = () => {
  const { id } = useParams();
  const productId = parseInt(id as string);
  const { data: product, isLoading, isError } = useCloSingle(productId);
  console.log(product);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product!</div>;
  if (!product) return <div>Product not found.</div>;
  const {
    brand: { name: brand },
    categories: { name: cat_name },
    gender: { type: gender },
    color,
    parent_category: { name: par_name },
    product_code,
    size,
    collection,
  } = product;
  return (
    <>
      <div className="container mb-8 mt-[110px] flex flex-wrap justify-between">
        <div className="w-[430px] border px-[50px] py-10">
          <h2 className="mb-5 text-lg font-bold uppercase leading-6">
            məhsul haqqında əsas məlumat
          </h2>
          <div className="content">
            <p className="mb-4">Məhsulun kodu: {product_code}</p>
            <div>
              <p>- {par_name}</p>
              <p>- {cat_name}</p>
              <p>- {gender}</p>
              <p>- {collection}</p>
              <p>- {brand}</p>
            </div>
          </div>
        </div>
        <div className="w-[430px] border px-[50px] py-10">
          <h2 className="mb-5 text-lg font-bold uppercase leading-6">
            MƏHSUL HAQQINDA ƏTRAFLI MƏLUMAT
          </h2>
        </div>
        <div className="w-[430px] border px-[50px] py-10">
          <h2 className="mb-5 text-lg font-bold uppercase leading-6">
            Seçilmiş parametrlər
          </h2>
          <div className="content">
            <div>
              <p>- Ölçü: {size}</p>
              <p>- Rəng: {color}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductInfo;
