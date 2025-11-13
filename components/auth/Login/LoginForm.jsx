"use client";
import React, { useEffect, useState } from "react";
import { User, Mail, ShieldCheck, Shield } from "lucide-react";
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const [otpForm, setOtpForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setinputValue] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [isPasswordMode, setIsPasswordMode] = useState(false);
    const router = useRouter();

    const validateSignup = () => {
        if (!inputValue || !password) {
            toast.error("All fields are required!");
            return false;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters!");
            return false;
        }
        return true;
    };

    const loginWithPassword = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true); // optional loading state
            if (!validateSignup) return;

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API}/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ inputValue, password }),
                }
            );
            const data = await res.json();

            if (data.success) {
                toast.success(`${data.message}`);
                localStorage.setItem("user", JSON.stringify(data.user));
                Cookies.set("token", data.user.token);
                setinputValue("");
                setPassword("");
                router.push("/");

                setIsLoading(false);
            }
            if (!data.success) {
                toast.error(`${data.message}`);

                setIsLoading(false);
            }
        } catch (error) {
            toast.error(`${error.message}`);
        }
    };

    const sendOTP = async (e) => {
        // Implement OTP sending logic here
        e.preventDefault();
        console.log("Sending OTP to:", inputValue);
        // setOtpForm(true); // Uncomment this to switch to OTP form after clicking
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        // Implement OTP verification logic here
        console.log("Verifying OTP:", otp);
    }

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <section>
            <div>
                {!otpForm ? (
                    // --- Login Form ---
                    <form className="space-y-6">
                        {/* Full Name */}
                        <div className="flex items-center border-b-2 border-gray-300 focus-within:border-emerald-500 transition">
                            <User className="text-gray-500 mr-3 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="email or username"
                                value={inputValue}
                                onChange={(e) => setinputValue(e.target.value)}
                                className="w-full py-2 bg-transparent text-gray-900 placeholder-gray-500 outline-none"
                                required
                            />
                        </div>

                        {isPasswordMode ? (
                            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-emerald-500 transition">
                                <Shield className="text-gray-500 mr-3 w-5 h-5" />
                                <input
                                    type="password"
                                    placeholder="**********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full py-2 bg-transparent text-gray-900 placeholder-gray-500 outline-none"
                                    required
                                />
                            </div>
                        ) : null}

                        {/* Submit */}
                        {isPasswordMode ? (
                            <button
                                type="submit"
                                onClick={loginWithPassword}
                                className="w-full py-3 mt-8 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 transition"
                            >
                                Login
                            </button>
                        ) : (
                            <button
                                type="submit"
                                onClick={sendOTP}
                                className="w-full py-3 mt-8 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 transition"
                            >
                                Send OTP
                            </button>
                        )}

                        {/* OR Divider */}
                        <div className="flex items-center my-6">
                            <div className="flex-grow h-[1px] bg-gray-300"></div>
                            <span className="px-3 text-gray-500 text-sm">or</span>
                            <div className="flex-grow h-[1px] bg-gray-300"></div>
                        </div>

                        {/* Login with Password Button */}
                        {isPasswordMode ? (
                            <button
                                onClick={() => setIsPasswordMode(!isPasswordMode)}
                                type="button"
                                className="w-full py-3 text-emerald-500 font-medium rounded-lg hover:text-cyan-500 transition"
                            >
                                Login with OTP
                            </button>
                        ) : (
                            <button
                                onClick={() => setIsPasswordMode(!isPasswordMode)}
                                type="button"
                                className="w-full py-3 text-emerald-500 font-medium rounded-lg hover:text-cyan-500 transition"
                            >
                                Login with Password
                            </button>
                        )}
                    </form>
                ) : (
                    // --- OTP Verification Form ---
                    <form className="space-y-6" onSubmit={handleOtpSubmit}>
                        <div className="flex items-center justify-center mb-4">
                            <ShieldCheck className="w-10 h-10 text-emerald-500" />
                        </div>

                        <p className="text-gray-600 text-center text-sm mb-6">
                            Enter the 6-digit OTP sent to your email.
                        </p>

                        <input
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            type="number"
                            maxLength={6}
                            className="w-full h-16 bg-transparent border-2 border-gray-300 rounded-lg text-center text-2xl text-gray-900 focus:border-emerald-500 outline-none"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full py-3 mt-8 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 transition"
                        >
                            Verify OTP
                        </button>

                        <p
                            onClick={() => setOtpForm(false)}
                            className="text-center text-sm text-emerald-500 hover:text-cyan-500 cursor-pointer mt-6 transition"
                        >
                            ← Back to Login
                        </p>
                    </form>
                )}
            </div>
        </section>
    );
};

export default LoginForm;