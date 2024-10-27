import React, { useState } from "react";

type DropdownIconSpinProps = {
  text: string;
  icon: string;
};

const DropdownIconSpin: React.FC<DropdownIconSpinProps> = ({
  text,
  icon,
}: DropdownIconSpinProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return <div>{text}</div>;
};
export default DropdownIconSpin;
