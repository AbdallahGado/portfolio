"use client";

import { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Html", "Typescript"];
  const rightLists = ["Bootstrap", "NuxtJS", "TailwindCSS"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "Abdallahgado22@gmail.com";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
    } else {
      alert("Clipboard functionality not supported in this browser.");
    }
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.05] group/bento hover:border-[#D4AF37]/30 hover:shadow-[0_8px_30px_rgb(212,175,55,0.05)] transition duration-500 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(10,10,10)",
        backgroundImage:
          "linear-gradient(145deg, rgba(15,15,15,1) 0%, rgba(5,5,5,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt="Project image"
              className={cn(imgClassName, "object-cover object-center")}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt="Spare image"
              className="w-full h-full object-cover object-center"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-light md:max-w-32 md:text-xs lg:text-base text-sm text-[#E2E8F0]/70 z-10 uppercase tracking-widest mt-2">
            {description}
          </div>

          <div className="font-sans text-lg lg:text-3xl max-w-96 font-normal z-10 text-white mt-1 group-hover/bento:text-[#D4AF37] transition-colors duration-300">
            {title}
          </div>

          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-70 lg:opacity-100 rounded-lg text-center bg-black/40 border border-white/5 text-[#E2E8F0]/80 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-black/40 border border-white/5 backdrop-blur-sm"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-black/40 border border-white/5 backdrop-blur-sm"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-70 lg:opacity-100 rounded-lg text-center bg-black/40 border border-white/5 text-[#E2E8F0]/80 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#0A0A0A] text-[#D4AF37]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
