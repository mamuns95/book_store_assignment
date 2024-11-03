import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import userPic from "../../../assets/user.png";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const sliderImages = [
  {
    url: "https://img.cf.rokomari.com/banner/DESKTOP1526f927-378b-4504-9f64-8e2798f21e5c.png",
  },
  {
    url: "https://img.cf.rokomari.com/banner/DESKTOP0d802618-03d6-423b-9d06-6fd14fe0cc4e.webp",
  },
  {
    url: "https://img.cf.rokomari.com/banner/DESKTOPc7c1f355-1b4c-4379-95dd-52e5e44dd3c9.webp",
  },
];

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/category/08">ALL Products </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium"
            >
              {navLinks}
            </ul>
          </div>

          <Link
            to="/"
            className="btn btn-ghost font-bold hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            Homepage
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user && <span className="text-white mr-3">{user.displayName}</span>}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mr-3"
          >
            <div className="w-10 rounded-full">
              <img alt="User" src={userPic} />
            </div>
          </div>

          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-sm btn-outline btn-success text-md rounded-none"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm btn-info text-md rounded-none">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>

      <div className="px-8 py-2 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
          <div>
            {/* 
            <span>
              <img src="/src/assets/banner1.png" className="w-auto to-100%"></img>
              <img src="/src/assets/banner2.png" className="w-auto to-100%"></img>
              <img src="/src/assets/banner3.png" className="w-auto to-100%"></img>
            </span>
            */}
          </div>
        </div>
      </div>
      <div className="content-center">
        <SimpleImageSlider
          width="82%"
          height={250}
          images={sliderImages}
          showNavs={true}
          autoPlay={true}
        />
      </div>
    </>
  );
};
export default Navbar;
