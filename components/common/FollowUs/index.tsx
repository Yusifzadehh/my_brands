import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false; 
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";

const FollowUS = () => {
  return (
    <footer className="bg-[#1B2430] text-white py-8">
      <div className="container mx-auto px-4 text-center flex justify-center gap-24">
        <div className=" text-start w-2/5">
          <h2 className="text-xl font-bold mb-2">BİZİ İZLƏMƏYİ UNUTMAYIN</h2>
          <p className="text-sm mb-6 opacity-60">
          Bizim müştərilər qrupuna qoşulun. Yeni məhsullar və aksiyalardan ilk xəbərdar olun.
        </p>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <span className="text-sm opacity-60">Bizi izləyin</span>
          <span className=" opacity-60">---</span>
          <div className="flex space-x-3 gap-6">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebookF} size="sm" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} size="sm" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-500">
              <FontAwesomeIcon icon={faYoutube} size="sm" />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-black">
              <FontAwesomeIcon icon={faTiktok} size="sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default FollowUS;