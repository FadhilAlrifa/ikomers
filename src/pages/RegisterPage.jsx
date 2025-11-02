import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 bg-[#FFE88C]  items-center justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/shp.svg`}
          alt="Register Illustration"
          className="w-3/4 max-w-md"
        />
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center bg-white px-6 md:px-16 py-10">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6">DAFTAR</h1>

          <div className="md:hidden flex justify-center mb-6">
            <img
              src="/register-illustration.png"
              alt="Register Illustration"
              className="w-48"
            />
          </div>

          <h2 className="text-yellow-500 font-bold text-lg">Selamat Datang</h2>
          <p className="text-gray-500 text-sm mb-6">
            Silahkan Daftar Akun Sekarang
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">Nama</label>
              <input
                type="text"
                placeholder="Masukkan Nama"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">No. Telp</label>
              <input
                type="text"
                placeholder="Masukkan Nomor Telepon"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Alamat Email
              </label>
              <input
                type="email"
                placeholder="Masukkan Email"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Masukkan Password"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
          </div>

          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 rounded-lg mt-6 transition">
            Daftar
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Sudah punya akun?{" "}
            <button
              className="text-yellow-500 font-semibold hover:underline"
              onClick={() => navigate("/")}
            >
              Masuk
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
