import React from "react";

const Icons = (name, url) => {
  const link = {
    github: "https://github.com/akintoluvic",
  };
  return (
    <a
      class="block flex items-center hover:text-gray-700 mr-5"
      href={link[url]}
    >
      <img
        src={}
        class="fill-current w-5 h-5 text-gray-700"
        alt=""
      />
    </a>
  );
};

export default Icons;
