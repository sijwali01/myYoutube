import React from "react";

const ButtonList = () => {
  let buttons = [
    "All",
    "Music",
    "Sports",
    "Live",
    "News",
    "Movies",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "Hooks",
    "JavaScript",
    "Routing",
    "ReactJs",
    "Redux"
  ];
  return (
    <>
      <div className="mt-3 ml-4">
        {buttons.map((s) => (
          <button
          key={s}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {s}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonList;
