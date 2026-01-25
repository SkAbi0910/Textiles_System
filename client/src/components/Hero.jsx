import React from "react";
import { Link } from "react-router-dom";
import doneImg from '../assets/done.avif';
import Membership from "./MemberShip";


const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat pt-39 pb-70"
      style={{ backgroundImage: `url(${doneImg})` }}
    >




      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl  font-extrabold text-amber-400 leading-tight">
            Discover Your{" "}
            <span className="text-slate-50">Perfect Style</span>
          </h1>

          <p className="mt-4 text-slate-100 text-lg">
            Explore the latest fashion trends in textiles.
            Premium quality dresses at affordable prices.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/collections"
              className="px-6 py-3 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition"
            >
              Shop Now
            </Link>

            <button onClick={()=> <Membership/>} className="px-6 py-3 border-2 border-amber-400 text-white rounded-full font-medium hover:bg-amber-50/30 transition">
              Get MemberShip
            </button>
          </div>
        </div>


        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default Hero;
