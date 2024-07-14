import React from "react";
import Button from "../ui/Button";

const NavActionBtns = () => {
  return (
    <div className="lg:flexCenter hidden">
      <Button
        type={"button"}
        title={"login"}
        icon="nav/user.svg"
        varient={"btn_dark_green"}
      />
    </div>
  );
};

export default NavActionBtns;
