import React from "react";
import Image from "next/image";
import Copy from "../../images/copy.svg";
import Edit from "../../images/edit.svg";
import Code from "../../images/code.svg";

const iconMap = {
  code: Code,
  copy: Copy,
  edit: Edit,
};

// type
// icon
// iconButton
// textButton

export default function Button({ icon, label, type }) {
  if (type === "icon") {
    return <Image src={iconMap[icon]} alt="Logo" width={30} height={30} />;
  } else if (type === "iconButton") {
    return <Image src={iconMap[icon]} alt="Logo" width={30} height={30} />;
  } else {
    return <div>{label}</div>;
  }
}
