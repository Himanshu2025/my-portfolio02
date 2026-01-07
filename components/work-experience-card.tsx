"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@heroui/card";

export type WorkExperience = {
  company: string;
  role: string;
  dateRange?: string;
  bullets: string[];
  accent?: string; // tailwind class for left border accent (e.g. border-l-4 border-emerald-400)
};

export default function WorkExperienceCard({ work }: { work: WorkExperience }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
    >
      <Card className={`w-full p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow ${work.accent ?? ""}`}>
        <CardHeader>
          <div className="flex items-start">
            <div className="flex-1 pr-6">
              <h3 className="text-lg md:text-xl font-semibold">{work.company}</h3>
              <div className="text-sm font-medium text-default-600">{work.role}</div>
            </div>
            {work.dateRange && (
              <div className="flex-none text-sm text-default-600 whitespace-nowrap ml-4">{work.dateRange}</div>
            )}
          </div>
        </CardHeader>
        <CardBody>
          <ul className="mt-4 list-disc list-inside space-y-3 text-base leading-relaxed">
            {work.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </motion.div>
  );
}
