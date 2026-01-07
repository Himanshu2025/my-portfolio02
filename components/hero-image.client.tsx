"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  containerClass?: string;
};

export default function HeroImage({ src, alt = "", className = "", containerClass = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <div className={containerClass}>
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} className={className} />
      </div>
    </motion.div>
  );
}
