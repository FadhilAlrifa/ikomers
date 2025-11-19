import React from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";

const HomePage = () => {
    const products = [
        {
            title: "Lepis 900",
            price: "Rp 230.000",
            category: "Celana",
            image: process.env.PUBLIC_URL + "/assets/lepis1.png",
        },
        {
            title: "Lepis",
            price: "Rp 999.999",
            category: "Celana",
            image: process.env.PUBLIC_URL + "/assets/lepis2.png",
        },
        {
            title: "NIKA",
            price: "Rp 100.000",
            category: "Baju",
            image: process.env.PUBLIC_URL + "/assets/baju1.png",
        },
        {
            title: "Baju panb",
            price: "Rp 878.000",
            category: "Baju",
            image: process.env.PUBLIC_URL + "/assets/baju2.png",
        },
        {
            title: "Baju panb",
            price: "Rp 878.000",
            category: "Baju",
            image: process.env.PUBLIC_URL + "/assets/baju2.png",
        },
        {
            title: "NIKA",
            price: "Rp 100.000",
            category: "Baju",
            image: process.env.PUBLIC_URL + "/assets/baju1.png",
        },
        {
            title: "Lepis 900",
            price: "Rp 230.000",
            category: "Celana",
            image: process.env.PUBLIC_URL + "/assets/lepis1.png",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">

            {/* HEADER */}
            <div className="flex items-center justify-between px-5 py-4 bg-white shadow-sm md:px-10">
                <div className="flex items-center gap-3">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/profil.png"}
                        alt="profile"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-lg">Halo, Fadhil</h3>
                        <p className="text-gray-500 text-sm -mt-1">Ayo mulai belanja</p>
                    </div>
                </div>

                <div className="flex gap-4 text-xl">
                    <FiSearch />
                    <FiShoppingBag />
                </div>
            </div>

            {/* BANNER */}
            <div className="p-5 md:px-10">
                <div className="w-full bg-yellow-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-sm">
                    <div>
                        <h2 className="font-bold text-lg md:text-2xl leading-tight">
                            Nikmati promo hari ini <br /> dengan belanja sepatu
                        </h2>
                        <p className="text-gray-600 text-sm mt-1">
                            di Ecommerce anak2ka
                        </p>
                    </div>

                    {/* GAMBAR HANYA TAMPIL DI DESKTOP */}
                    <img
                        src={process.env.PUBLIC_URL + "/assets/shoes.png"}
                        className="hidden md:block w-40 md:w-56 drop-shadow-md"
                        alt="shoes"
                    />
                </div>

                {/* Slider dots */}
                <div className="flex justify-center mt-3 gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
            </div>

            {/* PRODUK TERBARU */}
            <div className="px-5 md:px-10 mt-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Produk Terbaru</h2>
                    <button className="text-yellow-500 font-medium">
                        Lihat lainnya
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3 mt-4">
                    {products.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-2 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-32 md:h-40 lg:h-44 rounded-lg object-cover"
                            />
                            <h3 className="font-bold mt-2 text-sm md:text-base">{item.title}</h3>
                            <p className="text-gray-600 text-xs md:text-sm">{item.category}</p>
                            <p className="font-bold mt-1 text-sm md:text-base">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* BOTTOM NAV (Mobile) */}
            <div className="fixed bottom-0 left-0 w-full bg-white py-3 shadow-inner flex justify-around md:hidden">
                <div className="flex flex-col items-center text-yellow-500">
                    <IoHomeOutline size={25} />
                    <p className="text-xs">Home</p>
                </div>
                <div className="flex flex-col items-center text-gray-400">
                    <FiShoppingBag size={25} />
                    <p className="text-xs">Pesanan</p>
                </div>
                <div className="flex flex-col items-center text-gray-400">
                    <IoChatbubbleEllipsesOutline size={25} />
                    <p className="text-xs">Chat</p>
                </div>
                <div className="flex flex-col items-center text-gray-400">
                    <HiOutlineUser size={25} />
                    <p className="text-xs">Profile</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
