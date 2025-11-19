import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi2";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const navigate = useNavigate(); 

    const [cart, setCart] = useState([
        {
            id: 1,
            title: "Lepis 900",
            price: 230000,
            qty: 1,
            image: process.env.PUBLIC_URL + "/assets/lepis1.png",
        },
        {
            id: 2,
            title: "NIKA Shirt",
            price: 120000,
            qty: 2,
            image: process.env.PUBLIC_URL + "/assets/baju1.png",
        },
    ]);

    const increaseQty = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
            )
        );
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div className="min-h-screen bg-gray-50 pb-24 md:pb-10 md:px-10">

            {/* HEADER */}
            <div className="px-5 py-4 bg-white shadow-sm">
                <h1 className="text-xl font-bold">Keranjang Belanja</h1>
                <p className="text-sm text-gray-500 -mt-1">Produk yang kamu pilih</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-4 px-5 md:px-0">

                {/* LIST PRODUK */}
                <div className="md:col-span-2 space-y-4">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-4 rounded-xl shadow-sm flex gap-4"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-24 h-24 rounded-lg object-cover"
                            />

                            <div className="flex-1">
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                                <p className="text-yellow-600 font-bold">
                                    Rp {item.price.toLocaleString("id-ID")}
                                </p>

                                {/* QTY CONTROL */}
                                <div className="flex items-center gap-4 mt-2">
                                    <button
                                        onClick={() => decreaseQty(item.id)}
                                        className="px-3 py-1 bg-gray-200 rounded-lg text-lg"
                                    >
                                        -
                                    </button>
                                    <span className="font-semibold">{item.qty}</span>
                                    <button
                                        onClick={() => increaseQty(item.id)}
                                        className="px-3 py-1 bg-yellow-400 rounded-lg text-lg"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RINGKASAN BELANJA */}
                <div className="bg-white p-4 rounded-xl shadow-md h-fit">
                    <h2 className="text-lg font-bold mb-2">Ringkasan Belanja</h2>

                    <div className="flex justify-between text-gray-700 mb-1">
                        <p>Total Item</p>
                        <p>{cart.length} Produk</p>
                    </div>

                    <div className="flex justify-between font-bold text-lg mt-3">
                        <p>Total</p>
                        <p>Rp {total.toLocaleString("id-ID")}</p>
                    </div>

                    {/* BUTTON CHECKOUT */}
                    <button
                        onClick={() => navigate("/checkout")}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 rounded-lg mt-4 transition"
                    >
                        Checkout
                    </button>
                </div>
            </div>

            {/* NAV BAWAH (MOBILE) */}
            <div className="fixed bottom-0 left-0 w-full bg-white py-3 shadow-inner flex justify-around md:hidden">
                <div className="flex flex-col items-center text-gray-400">
                    <IoHomeOutline size={25} />
                    <p className="text-xs">Home</p>
                </div>
                <div className="flex flex-col items-center text-yellow-500">
                    <FiShoppingBag size={25} />
                    <p className="text-xs">Keranjang</p>
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

export default CartPage;
