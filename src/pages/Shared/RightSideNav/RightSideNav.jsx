import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="mb-4">
      {/* Login with */}
      <div className="space-y-3 p-4 bg-neutral-50">
        <h3 className="text-2xl font-semibold">Login With</h3>

        <button className="btn w-full btn-outline btn-info text-sm capitalize">
          <FcGoogle className="text-lg"></FcGoogle>
          Login with Google
        </button>
        <button className="btn w-full btn-outline btn-info text-sm capitalize">
          <AiFillGithub className="text-lg"></AiFillGithub>
          Login with Github
        </button>
      </div>

      {/* social links */}
      <div className="p-4 bg-neutral-100">
        <h3 className="text-2xl mb-4">Find Us</h3>

        <a
          className="flex text-center items-center border-2 rounded-t-md text-sm p-4"
          href="/blank"
        >
          <FaFacebook className="text-lg mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a
          className="flex text-center items-center border-x-2 text-sm p-4"
          href="/blank"
        >
          <FaTwitter className="text-lg mr-3"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="flex text-center items-center border-2 rounded-b-md text-sm p-4"
          href="/blank"
        >
          <FaInstagram className="text-lg mr-3"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>

      {/* Q Zone */}
      <div className="space-y-3 p-4 bg-neutral-50">
        <h3 className="text-2xl font-semibold">Q - Zone</h3>

        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
