import { BiCheckCircle } from "react-icons/bi"
import { FaShoppingCart, FaStar } from "react-icons/fa"
import { MdAttachMoney, MdError, MdInventory } from "react-icons/md"

const DashboardView = () => {
    return (
<div className="mr-10 min-h-screen bg-gray-100 justify">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Dashboard Overview
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                            <MdInventory className="text-2xl" /></div>
                        <div>
                            <p className="text-sm text-gray-500">Total Products</p>
                            <h3 className="text-xl font-bold text-gray-800">4</h3>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                            <FaShoppingCart className="text-2xl" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Orders</p>
                            <h3 className="text-xl font-bold text-gray-800">4</h3>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
                            <FaStar className="text-2xl" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Reviews</p>
                            <h3 className="text-xl font-bold text-gray-800">4</h3>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-600">
                            <MdAttachMoney className="text-2xl" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Revenue</p>
                            <h3 className="text-xl font-bold text-gray-800">$4</h3>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600">
                            <MdError className="text-2xl" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Out of Stock</p>
                            <h3 className="text-xl font-bold text-gray-800">4</h3>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                            <BiCheckCircle className="text-2xl" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">In Stock</p>
                            <h3 className="text-xl font-bold text-gray-800">4</h3>
                        </div>
                    </div>
                </div>
            </div>
    )}

    export default DashboardView