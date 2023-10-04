import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex items-center my-10">
      <button className="btn btn-secondary rounded-sm ">Breaking News</button>

      <Marquee pauseOnHover={true} speed={100} className="bg-neutral-200 py-3">
        <Link className="mr-10" to={"/"}>I can be a React component, multiple React components, or just some
        text.</Link>
        <Link className="mr-10" to={"/"}>I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
