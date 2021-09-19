import React from "react";

export default function Forms({ change, value, title, type }) {
  return (
    <div className="flex flex-col m-3">
      <label className="font-bold font-xl text-gray-800">{title}</label>
      <input
        onChange={(e) => {
          change(e.target.value);
          console.log(e.target.value);
        }}
        value={value}
        type={type}
        className="border-green-500 border-2 outline-none rounded-lg w-1/3 p-3 shadow-lg font-medium"
      />
    </div>
  );
}
