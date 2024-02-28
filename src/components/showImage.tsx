"use client";
import Image from "next/image";
import React from "react";

const ShowImage = () => {
  const [image, setImage] = React.useState<string[]>([
    "https://ucarecdn.com/6e3630f5-f63c-467c-9f38-751d3dfca06f/-/preview/100x100/",
  ]);
  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      {image.map((data, i) => (
        <div className="col-span-1 h-60" key={i}>
          <Image
            src={data}
            width={500}
            height={500}
            alt="images"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ShowImage;
