import logo from "../../../assets/logo.png";
import moment from 'moment';

const Header = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center space-y-3 my-10">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p className="text-xl font-semibold"> {moment().format("dddd, MMMM D, YYYY")} </p>
      </div>
    </div>
  );
};

export default Header;
