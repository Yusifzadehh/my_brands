"use client";
import { useQuery } from "@tanstack/react-query";
import { getAllClothes, getCloById } from "./api";

export function useAllClothes() {
  return useQuery({
    queryKey: ["clothes"],
    queryFn: getAllClothes,
    refetchOnWindowFocus: false,
  });
}

export function useCloSingle(id: number) {
  return useQuery({
    queryKey: ["item", id],
    // queryFn: () => getCloById(id!),
    refetchOnWindowFocus: false,
    queryFn: async () => {
      if (!id) throw new Error("Invalid product ID");
      return getCloById(id);
    },
  });
}
