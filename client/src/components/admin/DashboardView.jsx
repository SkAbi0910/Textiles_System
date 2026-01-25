import {
  BiCheckCircle
} from "react-icons/bi";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { MdAttachMoney, MdError, MdInventory } from "react-icons/md";
import Sidebar from "./Sidebar";

const DashboardView = () => {
  const stats = [
    {
      title: "Total Products",
      value: 4,
      icon: <MdInventory />,
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    {
      title: "Total Orders",
      value: 4,
      icon: <FaShoppingCart />,
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
    {
      title: "Total Reviews",
      value: 4,
      icon: <FaStar />,
      bg: "bg-yellow-100",
      text: "text-yellow-600",
    },
    {
      title: "Total Revenue",
      value: "$4",
      icon: <MdAttachMoney />,
      bg: "bg-emerald-100",
      text: "text-emerald-600",
    },
    {
      title: "Out of Stock",
      value: 4,
      icon: <MdError />,
      bg: "bg-red-100",
      text: "text-red-600",
    },
    {
      title: "In Stock",
      value: 4,
      icon: <BiCheckCircle />,
      bg: "bg-green-100",
      text: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-6 lg:px-10 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Dashboard <span className="text-amber-500">Overview</span>
          </h2>
          <p className="text-gray-600 mt-1">
            Monitor store performance and inventory status
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-sm
                         flex items-center gap-4
                         transition-all duration-300
                         hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center
                            ${item.bg} ${item.text} text-2xl`}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.value}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Section (Future Use) */}
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Store Insights
          </h3>
          <p className="text-gray-600 text-sm">
            Analytics, charts, and reports can be displayed here.
          </p>
        </div>
      </main>
    </div>
  );
};

export default DashboardView;
