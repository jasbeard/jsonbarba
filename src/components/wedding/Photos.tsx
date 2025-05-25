import Image from "next/image";
import { Loading } from "../Loading";
import React, { Suspense } from "react";

const fetchImages = async () => {
  const response = await fetch(`/api/getPhotos`);

  if (!response.ok) {
    throw new Error("error");
  }

  return response.json();
};

type PhotosData = {
  id: number;
  url: string;
  sequence: number;
}[];

const PhotoContentList = React.lazy(() => 
  fetchImages().then((data: PhotosData) => {
    const sortedResult = data.sort((a, b) => {
      return a.sequence - b.sequence;
    });
    /* Returning a component directly since React.lazy expects a module with a default export */
    console.log(sortedResult)
    return {
      default: () => {
    	  const listItems = sortedResult.map((item) => (
          <div className="w-full md:w-[244.92px] h-[367.38px]" key={item.id}>
            <Image
              src={item.url}
              alt={`${item.sequence}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              width={1000}
              height={1000}
              className="border rounded-md shadow-lg"
            /> 
          </div>
    	  ));
    	  return <>{listItems}</>;
  	},
    };
  })
);

const PhotoListWithSuspense  = () => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-3">
      <Suspense fallback={Array(9)
      .fill(null)
      .map((_, i) => (
        <Loading key={i} />
      ))}>
        <PhotoContentList />
      </Suspense>
    </div>
  );
};

export default PhotoListWithSuspense;