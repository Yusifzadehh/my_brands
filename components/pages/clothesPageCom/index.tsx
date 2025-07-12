"use client";

import ProductCard from "@/components/common/ProductCard";
import { IResults } from "@/services/api";
import { useAllClothes } from "@/services/queryes";
import Link from "next/link";
import React from "react";

interface UseAllClothesResponse {
  data?: IResults;
  isLoading: boolean;
  isError: boolean;
}

const ClothesPageCom = () => {
  const { data, isLoading, isError }: UseAllClothesResponse = useAllClothes();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading clothes!</div>;
  }

  if (!data?.results?.length) {
    return <div>No clothes here...</div>;
  }

  console.log("Fetched clothes:", data.results);

  return (
    <div className="py-10">
      <div className="container grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-4">
        {data.results?.map((clo) => {
          return (
            <Link href={`/clothes/${clo.id}`} key={clo.id}>
              <ProductCard
                name={clo.name}
                brand={clo.brand}
                categories={clo.categories}
                images={clo.images}
                price={clo.price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ClothesPageCom;
