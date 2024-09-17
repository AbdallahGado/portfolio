import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:abdallahgado22@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6 pb-4">
          {socialMedia.map((info) => (
            <a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              key={info.id}
            >
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image
                  src={info.img}
                  alt="icons"
                  width={20}
                  height={20}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
            </a>
          ))}
        </div>
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Abdallah
        </p>
      </div>
    </footer>
  );
};

export default Footer;
