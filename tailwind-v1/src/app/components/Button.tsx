import React from "react";

type ButtonProps = {
  backgroundColor: string;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ backgroundColor, label }) => {
  return <div style={{ backgroundColor: backgroundColor }}>{label}</div>;
};

export default Button;
