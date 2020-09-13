import React from "react";

const PageHeader = ({ title, icon }) => {
  return (
    <div className="row">
      <h1 className="text-center ml-5">
        <i class={icon}></i> {title}
      </h1>
    </div>
  );
};

export default PageHeader;
