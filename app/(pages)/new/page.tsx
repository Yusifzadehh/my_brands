// "use client";

// import { useAllClothes, useCloSingle } from "@/services/queryes";

// const NewPage = () => {
//   const { data, isLoading, isError } = useAllClothes();
//   // const { data, isLoading, isError } = useCloSingle(11);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading clothes!</div>;
//   }

//   console.log("Fetched clothes:", data);

//   return (
//     <>
//       <h1>New page</h1>
//       {data?.results?.map((d) => {
//         return (
//           <div className="m-20 bg-teal-400" key={d.id}>
//             <p>id: {d.id}</p>
//             <p>brand: {d.brand.name}</p>
//             <p>category: {d.categories.name}</p>
//             <p>gender: {d.gender.type}</p>
//             <p>price {d.price}</p>
//           </div>
//         );
//       })}
//       single:
//       {/* {data?.id}
//       {data?.brand.name} */}
//     </>
//   );
// };

// export default NewPage;

const NewPage = () => {
  return <div>NewPage</div>;
};

export default NewPage;
