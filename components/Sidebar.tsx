import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import { AiFillHome, AiOutlineMenu, AiOutlineTable } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const userProfile = false;
  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center x1:justify-start cursor-pointer font-semibold text-[#F51997] rounded";

  return (
    <div>
      <div
        className="block x1:hidden m-2 m1-4 mt-3 text-x1"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div
          className="x1:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 
        border-gray-10 x1:border-0 p-3"
        >
          <div
            className="x1:border-b-2
          border-gray-200 x1:pb-4"
          >
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2x1">
                  <AiFillHome />
                </p>
                <span className="text-x1 hidden x1:block">For you</span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className="px-2 py-4 hidden x1:block">
              <p className="text-gray-400">
                Log in to like and comment on vidoes
              </p>
              <div className="pr-4">
                <GoogleLogin
                  clientId=""
                  render={(renderProps) => (
                    <button
                      className="bg-white text-lg text-[#F51997] border-[1px] 
                      border-[#F51997] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 
                      hober:text-white hober:bg-[#F51997]"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Log in
                    </button>
                  )}
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy="single_host_origin"
                />
              </div>
            </div>
          )}
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
