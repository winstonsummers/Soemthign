import React, { MouseEvent } from "react";
import "./Button.css";

type TButtons = "default" | "linkButton";

interface IButtonProps {
  text        : string;
  onClick     : (evt: MouseEvent) => void;
  disabled    : boolean;
  buttonType? : TButtons;
}

const Button: React.FC<IButtonProps> = ({
  text,
  onClick,
  disabled,
  buttonType = "default",
}) => {

  const className =
    (buttonType === "default" ? "" : "link-") +
    "button " +
    (disabled ? "disabled" : "");

  const clickFunc = !disabled ? onClick : () => null;

  return (
    <div className={className} onClick={clickFunc}>
      {text}
    </div>
  );
};

export default Button;
