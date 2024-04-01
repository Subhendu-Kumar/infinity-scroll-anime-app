"use client";

// import { fetchAnime } from "@/app/action";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";
// import AnimeCard from "./AnimeCard";

// let page = 2;

// export type AnimeCard = JSX.Element;

// function LoadMore() {
//   const { ref, inView } = useInView();
//   const [data, setData] = useState<AnimeCard[]>([]);

//   useEffect(() => {
//     if (inView) {
//       fetchAnime(page).then((res) => {
//         setData([...data, ...res]);
//         page++;
//       });
//     }
//   }, [data, inView]);
//   return (
//     <>
//       <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
//         {data}
//       </section>
//       <section className="flex justify-center items-center w-full">
//         <div ref={ref}>
//           <Image
//             src="./spinner.svg"
//             alt="spinner"
//             width={56}
//             height={56}
//             className="object-contain"
//           />
//         </div>
//       </section>
//     </>
//   );
// }

// export default LoadMore;

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { fetchAnime } from "@/app/action";
import AnimeCard from "./AnimeCard";

export type AnimeCard = JSX.Element;
function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true);
      fetchAnime(page).then((res) => {
        setData((prevData) => [...prevData, ...res]);
        setPage((prevPage) => prevPage + 1);
        setIsLoading(false);
      });
    }
  }, [inView, page, isLoading]);

  const handleLoadMore = () => {
    setIsLoading(true);
    fetchAnime(page).then((res) => {
      setData((prevData) => [...prevData, ...res]);
      setPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    });
  };

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      {page <= 15 && (
        <section className="flex justify-center items-center w-full">
          <div ref={ref}>
            <Image
              src="/spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
        </section>
      )}
      {page > 15 && (
        <section className="flex justify-center items-center w-full">
          <button
            onClick={handleLoadMore}
            className="bg-stone-300 text-black p-2 rounded font-semibold"
          >
            Load More
          </button>
        </section>
      )}
    </>
  );
}

export default LoadMore;
