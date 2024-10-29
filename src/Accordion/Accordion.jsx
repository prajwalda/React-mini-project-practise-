import React, { useState } from "react";
import Tasks from "./Tasks";

const Accordion = () => {
  const [accordionData, setAccordionData] = useState([
    {
      id: 1,
      title: "Section 1",
      content:
        "This is the content of the first section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Section 2",
      content:
        "This is the content of the second section. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      title: "Section 3",
      content:
        "This is the content of the third section. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ]);

  const handleToggle = () => {};
  return (
    <div className="flex flex-col my-2 justify-center items-center w-[100%] container mx-auto">
      {accordionData.map((item, idx) => {
        return <Tasks key={idx} item={item} />;
      })}
    </div>
  );
};

export default Accordion;
