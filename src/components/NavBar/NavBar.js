import React from "react";
import { FaRegEye } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
      
        return (
          <nav style={{minHeight:"100%"}} className="shadow-2xl">
            <div className="flex flex-col">
                <Link to="/eyecare" className="shadow-sm text-center w-full h-16 justify-center flex flex-col" id="link-nav">
                    <div className="flex justify-center">
                        <FaRegEye/>
                    </div>
                </Link>
                <Link to="/posturecare" className="shadow-sm text-center w-full h-16 justify-center flex flex-col" id="link-nav">
                    <div className="flex justify-center">
                        <BsPersonWorkspace/>
                    </div>
                </Link>
            </div>
            <Link to="/settings" className="shadow-sm w-full h-16 flex justify-center flex-col self-end sticky" style={{top:"99%"}} id="link-nav">
                <div className="flex justify-center">
                    <IoMdSettings/>
                </div>
            </Link>
          </nav>
        )
}


export default NavBar;