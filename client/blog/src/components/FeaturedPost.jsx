import { Link } from "react-router-dom";
import Image from "./Image";
const FeaturedPost = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* FIRST */}
      <div
        className="w-full lg:w-1/2 flex-col gp4
      "
      >
        {/* IMAGE */}
        <Image src="featured1.jpeg" className="rounded-3xl object-cover" />
        {/* Details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to="/" className="text-blue-800 lg:text-lg">
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut debitis
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex gap-4 flex-col">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* details title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/" className="text-blue-800">
                Photography
              </Link>
              <span className="text-gray-500">3 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl font-semibold lg:text-3xl"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* details title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/" className="text-blue-800">
                Photography
              </Link>
              <span className="text-gray-500">3 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl font-semibold lg:text-3xl"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            </Link>
          </div>
        </div>
        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* details title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/" className="text-blue-800">
                Photography
              </Link>
              <span className="text-gray-500">3 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl font-semibold lg:text-3xl"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
