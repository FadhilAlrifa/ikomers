import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 bg-[#FFE88C] items-center justify-center">
        <img
          src="/loginil.svg"
          alt="Login Illustration"
          className="w-3/4 max-w-md"
        />
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center bg-white px-6 md:px-16 py-10">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6">LOGIN</h1>

          <div className="md:hidden flex justify-center mb-6">
            <img
              src="/login-illustration.png"
              alt="Login Illustration"
              className="w-48"
            />
          </div>

          <h2 className="text-yellow-500 font-bold text-lg">
            Selamat Datang <span className="text-black">Kembali</span>
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Silahkan Masukkan Nomor Telepon dan Password
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">No. Telp</label>
              <input
                type="text"
                placeholder="Masukkan Nomor Telepon"
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
            Masuk
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-400 text-sm mx-2">atau</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
            <FcGoogle className="text-xl" /> Masuk Dengan Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Belum punya akun?{" "}
            <button
              className="text-yellow-500 font-semibold hover:underline"
              onClick={() => navigate("/register")}
            >
              Daftar
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
