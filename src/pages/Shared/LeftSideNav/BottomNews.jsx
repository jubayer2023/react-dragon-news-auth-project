import moment from "moment";
import { BiBox } from "react-icons/bi";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";

const BottomNews = () => {
  return (
    <div>
      <h3 className="font-semibold text-[#403F3F] px-10 py-3 mb-5">All News</h3>
      <div className="mb-4">
        <img src={img1} alt="" />
        <h3 className="font-semibold text-lg mt-4 mb-6">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
        <p className="flex items-center text-gray-500 gap-4">
          <span className="text-black text-sm">Sports</span>
          <BiBox></BiBox>
          {moment().format("MMMM D YYYY")}
        </p>
      </div>
      <div className="mb-4">
        <img src={img2} alt="" />
        <h3 className="font-semibold text-lg mt-4 mb-6">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
        <p className="flex items-center text-gray-500 gap-4">
          <span className="text-black text-sm">Sports</span>
          <BiBox></BiBox>
          {moment().format("MMMM D YYYY")}
        </p>
      </div>
      <div className="mb-4">
        <img src={img3} alt="" />
        <h3 className="font-semibold text-lg mt-4 mb-6">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
        <p className="flex items-center text-gray-500 gap-4">
          <span className="text-black text-sm">Sports</span>
          <BiBox></BiBox>
          {moment().format("MMMM D YYYY")}
        </p>
      </div>
    </div>
  );
};

export default BottomNews;
