import React, { useCallback, useEffect, useState } from "react";
import { NavBar } from "../../component/layout/index";
import { Public } from "../../component/wrapper/index";
import { Image } from "../../component/image";

const words = ["easier", "better", "more free", "more flexible"];

const Home = () => {
  const [newName, setnewName] = useState(words[words.length - 1]);
  let index = 0;
  const shuffle = useCallback(() => {
    setnewName(words[index]);
    if (index + 1 < words.length) index++;
    else index = 0;
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <Public>
      <NavBar>
        <div className="flex flex-col justify-center w-full h-full min-h-screen pt-20 px-10">
          <p className="text-[#6096B4]">
            <span className="font-semibold text-lg text-gray-600 ">
              make life
            </span>
            <br />
            <span className="font-bold text-5xl transition ease-in-out delay-150 transform duration-600">
              {newName}
            </span>
          </p>
        </div>
      </NavBar>
    </Public>
  );
};

export default Home;
