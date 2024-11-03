import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import p1 from "../../../assets/p1.jpg";
import p2 from "../../../assets/p2.jpg";
import p3 from "../../../assets/p3.jpg";
import p4 from "../../../assets/p4.jpg";
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4 hover:text-indigo-600 transition duration-500 ease-in-out">
          Find Us On
        </h2>
        <Link
          to="https://www.facebook.com/profile.php?id=100064649683511"
          target="_blank"
          className="p-4 flex text-lg items-center border rounded-tl-md"
        >
          <FaFacebook className="mr-2 text-blue-700"></FaFacebook> Facebook
        </Link>
        <Link
          to="https://www.youtube.com/channel/UCMtGHnB-gqavI2L0d8SP2xg"
          target="_blank"
          className="p-4 flex text-lg items-center border rounded-br-md"
        >
          <FaYoutube className="mr-2 text-orange-600"></FaYoutube> YouTube
        </Link>
        <Link
          to="https://twitter.com/RokomariDotCom"
          target="_blank"
          className="p-4 flex text-lg items-center border-x"
        >
          <FaTwitter className="mr-2"></FaTwitter> Twitter
        </Link>
        <Link
          to="https://www.instagram.com/rokomari"
          target="_blank"
          className="p-4 flex text-lg items-center border rounded-br-md"
        >
          <FaInstagram className="mr-2 text-orange-600"></FaInstagram>{" "}
          Instragram
        </Link>
      </div>

      <div className="p-4 mb-6">
        <h2
          className="text-3xl mb-4 hover:text-indigo-600 transition 
              duration-500 ease-in-out"
        >
          Kids Area
        </h2>
        <div className="space-y-3">
          <img src={p1} alt="p1" />
          <img src={p2} alt="p2" />
          <img src={p3} alt="p3" />
          <img src={p4} alt="p4" />
        </div>
      </div>
    </div>
  );
};
export default RightSideNav;
