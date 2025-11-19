import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";

const CheckoutPage = () => {
  const items = [
    {
      title: "Baju Polos",
      color: "Hijau",
      price: 120000,
      image: process.env.PUBLIC_URL + "/assets/baju2.png",
    },
    {
      title: "Baju Berkera lengan pendek",
      color: "Biru",
      price: 140000,
      image: process.env.PUBLIC_URL + "/assets/baju1.png",
    },
  ];

  const subtotalPesanan = items.reduce((sum, item) => sum + item.price, 0);
  const subtotalPengiriman = 9000;
  const biayaLayanan = 1000;

  const total = subtotalPesanan + subtotalPengiriman + biayaLayanan;

  return (
    <div className="min-h-screen bg-white px-5 py-4 pb-24 md:px-10">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-4">
        <IoChevronBack size={24} className="text-yellow-700" />
        <h1 className="text-xl font-bold mx-auto transform -translate-x-5">
          Checkout
        </h1>
      </div>

      {/* ALAMAT */}
      <h2 className="text-lg font-bold mb-2">Alamat</h2>
      <div className="bg-white rounded-xl border p-4 shadow-sm">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <img
              src={process.env.PUBLIC_URL + "/assets/map.png"}
              alt="map"
              className="w-36 h-24 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-base">Rumah</h3>
              <p className="text-sm text-gray-600 leading-tight">
                Jalan Kembang Sepatu No.7, Kota Makassar, Sulawesi Selatan.
                Sebelah Kedai Berkah Tujuh Turunan.
              </p>
            </div>
          </div>
          <button className="h-fit bg-yellow-400 px-3 py-1 rounded-lg text-sm font-semibold">
            Edit
          </button>
        </div>
      </div>

      {/* PESANAN */}
      <h2 className="text-lg font-bold mt-6 mb-3">
        Pesanan ({items.length})
      </h2>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3 border rounded-xl p-3 shadow-sm">
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm">Warna : {item.color}</p>
            </div>

            <p className="font-semibold text-right">
              Rp {item.price.toLocaleString("id-ID")}
            </p>
          </div>
        ))}
      </div>

      {/* OPSI PENGIRIMAN */}
      <h2 className="text-lg font-bold mt-6 mb-2">Opsi Pengiriman</h2>
      <div className="border rounded-xl p-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <img
            src={process.env.PUBLIC_URL + "/assets/sicepat.png"}
            alt="SiCepat"
            className="w-16"
          />
          <div>
            <p className="font-semibold">Si Cepat Kilat</p>
            <p className="text-gray-500 text-sm">
              Estimasi tiba tanggal 16 Agustus
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold text-yellow-700">
            Rp. 9.000
          </p>
        </div>
        <FiChevronRight className="text-gray-500 ml-2" size={22} />
      </div>

      {/* METODE PEMBAYARAN */}
      <h2 className="text-lg font-bold mt-6 mb-2">Metode Pembayaran</h2>
      <div className="border rounded-xl p-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <img
            src={process.env.PUBLIC_URL + "/assets/bank.png"}
            alt="Bank Mandiri"
            className="w-20"
          />
          <div>
            <p className="font-semibold">Transfer Bank</p>
            <p className="text-gray-500 text-sm">Bank Mandiri</p>
          </div>
        </div>
        <FiChevronRight className="text-gray-500" size={22} />
      </div>

      {/* RINCIAN PEMBAYARAN */}
      <h2 className="text-lg font-bold mt-6 mb-2">Rincian Pembayaran</h2>
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <p>Subtotal Pesanan</p>
          <p>Rp {subtotalPesanan.toLocaleString("id-ID")}</p>
        </div>

        <div className="flex justify-between">
          <p>Subtotal Pengiriman</p>
          <p>Rp {subtotalPengiriman.toLocaleString("id-ID")}</p>
        </div>

        <div className="flex justify-between">
          <p>Biaya Layanan</p>
          <p>Rp {biayaLayanan.toLocaleString("id-ID")}</p>
        </div>

        <div className="flex justify-between font-bold text-base mt-1">
          <p>Total Pembayaran</p>
          <p>Rp {total.toLocaleString("id-ID")}</p>
        </div>
      </div>

      {/* BUTTON BAYAR */}
      <button className="w-full bg-yellow-400 py-3 rounded-xl font-semibold mt-6 text-gray-800">
        Bayar Sekarang
      </button>
    </div>
  );
};

export default CheckoutPage;
