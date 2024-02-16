"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    name: "",
    title: "",
    country: "",
    companysize: "", // Add company size state
    privacyPolicy: false, // Add privacyPolicy state
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onSubmit = async () => {
    try {
      const response = await axios.post("/api/users/contectus", user);
      console.log("contacted successfully", response.data);
      toast.success("Request has been sent");
      router.push("/login");
    } catch (error) {
      console.error("Error contacting:", error);
      toast.error("Error sending request");
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.name.length > 0 &&
      user.title.length > 0 &&
      user.companysize.length > 0 && // Check if company size is selected
      user.privacyPolicy // Check if privacy policy is accepted
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
    console.log(user.companysize.length);
  }, [user]);

  const handleCheckboxChange = () => {
    setUser({ ...user, privacyPolicy: !user.privacyPolicy });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <h1 className="text-black text text-3xl">Contact Us</h1>
      <hr />
      <label className="text-black">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <label className="text-black">Name</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        placeholder="Name"
      />
      <label className="text-black">Title</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        value={user.title}
        onChange={(e) => setUser({ ...user, title: e.target.value })}
        placeholder="Title"
      />
      <label className="text-black">Country</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black "
        type="text"
        value={user.country}
        onChange={(e) => setUser({ ...user, country: e.target.value })}
        placeholder="Country"
      />

      <label className="text-black">Company Size</label>
      <select
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black "
        value={user.companysize}
        onChange={(e) => setUser({ ...user, companysize: e.target.value })}
      >
        <option value="">Select Size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <div className="flex items-center">
        <input
          type="checkbox"
          checked={user.privacyPolicy}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label className="text-black">Accept Privacy Policy</label>
      </div>

      <button
        onClick={onSubmit}
        className="p-2 border bg-blue-700 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-600 text-white"
        disabled={buttonDisabled}
      >
        {buttonDisabled ? "Submit" : "Submit"}
      </button>
      <Link href="/login">Visit login page</Link>
    </div>
  );
}
