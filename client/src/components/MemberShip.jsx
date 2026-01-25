import React from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/bg-login.jpg";
import { FaCheckCircle } from "react-icons/fa";

const Membership = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Silver",
      price: "Free",
      features: [
        "Browse collections",
        "Basic customer support",
        "Standard delivery",
      ],
    },
    {
      name: "Gold",
      price: "LKR 1,999 / year",
      highlight: true,
      features: [
        "Exclusive discounts",
        "Early access to new arrivals",
        "Priority support",
        "Faster delivery",
      ],
    },
    {
      name: "Platinum",
      price: "LKR 3,999 / year",
      features: [
        "Maximum discounts",
        "VIP-only collections",
        "Personal stylist support",
        "Free express delivery",
      ],
    },
  ];

  return (
    <section
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        <div className="text-center text-white max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold">
            Become a <span className="text-amber-400">Member</span>
          </h1>
          <p className="mt-6 text-lg text-slate-200">
            Unlock exclusive fashion benefits, premium discounts,
            and early access to our latest dress collections.
          </p>
        </div>


        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 shadow-2xl transition
                ${plan.highlight
                  ? "bg-white text-gray-900 scale-105"
                  : "bg-white/10 backdrop-blur text-white"
                }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2
                                 bg-amber-400 text-black text-sm font-semibold
                                 px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-extrabold text-center">
                {plan.name}
              </h3>

              <p className="text-center mt-4 text-3xl font-bold text-amber-400">
                {plan.price}
              </p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm"
                  >
                    <FaCheckCircle className="text-amber-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate("/register")}
                className={`w-full mt-8 py-3 rounded-full font-semibold transition
                  ${plan.highlight
                    ? "bg-amber-500 text-white hover:bg-amber-600"
                    : "border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black"
                  }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>


        <div className="text-center mt-20 text-slate-200">
          <p>
            Already a member?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-amber-400 cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Membership;
