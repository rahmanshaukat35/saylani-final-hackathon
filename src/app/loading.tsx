"use client";

import React from "react";
import { TailSpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="w-full  flex-col min-h-full h-screen flex items-center justify-center ">
      <TailSpin
        height="60"
        width="60"
        color="gray"
        ariaLabel="tail-spin-loading"
        radius="2"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p className="text-sm mt-2 font-semibold text-gray-600">Loading ....</p>
    </div>
  );
}
