import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Image */}
      <div className="md:hidden xl:block">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" />
      </div>
      {/* details */}
      <div className="">
        <Link to="/" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        </Link>
        <div className="">
          <span>Written by</span>
          <Link to="/" className="text-blue-800">
            John Doe
          </Link>
          <span>on</span>
          <Link to="/" className="text-blue-800">
            January 15, 2022
          </Link>
          <span> 2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          numquam eveniet facilis dolore cum id, temporibus hic illo! Aliquid
          perferendis dolorum earum est quia ea iure doloremque aperiam
          reiciendis omnis?
        </p>
        <Link to="/" className="underline text-blue-800">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
