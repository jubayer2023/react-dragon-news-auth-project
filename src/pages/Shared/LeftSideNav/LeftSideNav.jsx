import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BottomNews from "./BottomNews";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);


  return (
    <div>
      <h3 className="capitalize text-[#403F3F] mb-5 font-semibold">
        All category
      </h3>
      <h3 className="font-semibold text-[#403F3F] bg-neutral-200 px-10 py-3 mb-5">
        National News
      </h3>
      <ul className="space-y-5 text-[#9F9F9F] px-10">

        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}> {category.name} </Link>
          </li>
        ))}

      </ul>

      <BottomNews></BottomNews>
      
    </div>
  );
};

export default LeftSideNav;
