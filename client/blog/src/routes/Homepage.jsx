import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import MainCategories from "../components/MainCategories";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>*</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-center">
        {/* titles */}
        <div>
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className="mt-8 text-sm md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          </p>
        </div>
        {/* animated button */}
        <Link to="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width={200}
            height={200}
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m-75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write a Blog
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your Blog
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full flex items-center justify-center">
            <img src="arrow.svg" alt="arrow" className="h-32 w-32" />
          </button>
        </Link>
      </div>
      {/* MAIN CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      {/* POST LIST */}
    </div>
  );
};

export default Homepage;
