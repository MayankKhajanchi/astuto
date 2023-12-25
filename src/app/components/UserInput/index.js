"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";

import UserAvatar from "../../images/man.png";

import { Typography } from "antd";

const { Text } = Typography;

const MessageDisplay = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  border-radius: 10px;
  background: #eee;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

export default function UserInput({ message = "Here is my message" }) {
  return (
    <MessageDisplay>
      <Image src={UserAvatar} alt="Logo" width={30} height={30} />
      <Text>{message}</Text>
    </MessageDisplay>
  );
}
