import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// console.log(LOGO_URL);
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const btnChangeHandler = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  }
  console.log("header rendered");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 h-20">
      <div className="logo-container">
        <img className="w-20 h-20" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-10">
          <li className="px-4">Online status: {onlineStatus ? "On" : "Off"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
          <button className="login" onClick={btnChangeHandler}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
