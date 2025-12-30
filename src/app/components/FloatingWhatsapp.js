"use client";

import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";

const FloatingWhatsapp = () => {
  const whatsappLink =
    "https://wa.me/03218365564?text=Hi, I visited your website and I'm interested in WhatsApp or Website automation for my business. Please guide me further.";

  const handleClick = () => {
    window.open(whatsappLink, "_blank"); // open in new tab
  };

  return (
    <div>
      <Image
        src={assets.whatsapp}
        alt="WhatsApp"
        className="h-[50px] w-[50px] fixed bottom-6 right-4 cursor-pointer z-40 md:hidden"
        onClick={handleClick}
      />
    </div>
  );
};

export default FloatingWhatsapp;
