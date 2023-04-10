import Image from "next/image";
import React from "react";

type Props = {};

const PostPreview = (props: Props) => {
  return (
    <div className="group transition-all flex p-2 rounded-xl cursor-pointer hover:bg-slate-100 hover:shadow-md hover:shadow-primary-100">
      <div className="flex-1 flex flex-col gap-2 pr-2">
        <h3 className="font-bold text-md text-slate-600">
          Lorem ipsum dolor sit amet.
        </h3>
        <p className="font-light text-xs line-clamp-2 text-slate-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam quo
          iste amet voluptates voluptas accusantium atque neque repellendus
          minima praesentium!
        </p>
        <div className="font-light flex gap-2 text-xs text-slate-500">
          <span>06.07.1999 22:30</span>
          <span>10 min read</span>
        </div>
      </div>
      <div className="relative w-[125px] overflow-hidden rounded-md">
        <Image
          style={{ objectFit: "cover" }}
          fill
          src="/post_image.jpg"
          alt="Post Image"
        />
      </div>
    </div>
  );
};

export default PostPreview;
