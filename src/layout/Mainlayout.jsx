import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div className="font-poppins max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 lg:px-0">
      <Outlet></Outlet>
    </div>
  );
};

export default Mainlayout;
