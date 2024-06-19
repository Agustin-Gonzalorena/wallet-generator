"use client";
import React, { useState, useRef } from "react";
import { IoCopyOutline } from "react-icons/io5";

import generateEthereumAccount from "@/app/generatorWallet";
const Generator = () => {
  const [wallet, setWallet] = useState([
    {
      title: "Mnemonic",
      clave: "Click to generate a new wallet.",
    },
    {
      title: "Private Key",
      clave: "Click to generate a new wallet.",
    },
    {
      title: "Public Key",
      clave: "Click to generate a new wallet.",
    },
    {
      title: "Address",
      clave: "Click to generate a new wallet.",
    },
  ]);

  const generate = () => {
    const result = generateEthereumAccount();
    const re = [
      {
        title: "Mnemonic",
        clave: result.mnemonic,
      },
      {
        title: "Private Key",
        clave: result.privateKey,
      },
      {
        title: "Public Key",
        clave: result.publicKey,
      },
      {
        title: "Address",
        clave: result.address,
      },
    ];
    setWallet(re);
  };
  return (
    <section className="w-full flex justify-center items-center mb-24">
      <div className="w-11/12 p-2 flex flex-col gap-3 bg-[#FAE5F0] shadow-md shadow-black rounded-2xl">
        {wallet.map((item, index) => (
          <TableItem key={index} title={item.title} clave={item.clave} />
        ))}
        <div className="h-30 w-full flex justify-end">
          <button
            onClick={() => generate()}
            className="bg-[#534381] text-white px-6 py-4 rounded-2xl hover:shadow-md"
          >
            Create ETH Address
          </button>
        </div>
      </div>
    </section>
  );
};

export default Generator;

export const TableItem = ({ title, clave }) => {
  const paragraphRef = useRef(null);

  const copyToClipboard = () => {
    const text = paragraphRef.current.textContent;
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="min-h-22 p-2 ">
      <div className="flex items-center gap-1">
        <label className="text-neutral-700">{title}</label>
        <span
          onClick={copyToClipboard}
          className="hover:cursor-pointer active:scale-90 transition-all duration-100"
        >
          <IoCopyOutline />
        </span>
      </div>
      <p ref={paragraphRef} className="break-words font-semibold">
        {clave}
      </p>
    </div>
  );
};
