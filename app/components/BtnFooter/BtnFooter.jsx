import React from "react";

const BtnFooter = ({ Icon, title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 "
    >
      <p>{title}</p>
      <Icon />
    </a>
  );
};

export default BtnFooter;
