"use client";

import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState, useRef } from "react";

import ChatRenderer from "@/app/Features/ChatRenderer";
import InputField from "@/app/components/InputField";
import Loader from "@/app/components/Loader";
import { ToastContainer } from "react-toastify";

import { serviceCosts, s3Costs, ec2Costs } from "./data.js";

import dataContext, { DataProvider } from "./Context/Provider";

export default function Home() {
  const [chatData, setChatData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [requestType, setRequestType] = useState("");
  const [requestLabel, setRequestLabel] = useState("");
  const messagesEndRef = useRef(null);

  const onSelectSuggestion = (val, label) => {
    if (val === "ec2_costs") {
      setChatData([]);
      setRequestLabel(label);
    } else {
      setChatData([
        ...chatData,
        {
          type: "userInput",
          data: {
            message: label,
          },
        },
      ]);
    }
    setRequestType(val);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [chatData]);

  useEffect(() => {
    switch (requestType) {
      case "service_costs":
        setLoading(true);
        setTimeout(() => {
          setChatData([...chatData, ...serviceCosts]);
          setLoading(false);
        }, 2000);
        return;
        break;
      case "s3":
        setLoading(true);
        setTimeout(() => {
          setChatData([...chatData, ...s3Costs]);
          setLoading(false);
        }, 2000);
        return;
        break;
      case "ec2_costs":
        setLoading(true);
        setTimeout(() => {
          setChatData([
            {
              type: "userInput",
              data: {
                message: requestLabel,
              },
            },
            ...ec2Costs,
          ]);
          setLoading(false);
        }, 2000);
        return;
        break;
      default:
        break;
    }
  }, [requestType]);

  return (
    <>
      <DataProvider>
        <main className="flex min-h-screen flex-col items-center p-8 pb-28 bg-slate-50">
          <ChatRenderer
            data={chatData}
            onSelectSuggestion={onSelectSuggestion}
          />
          {loading ? (
            <div>
              <Loader />
            </div>
          ) : null}
          <InputField
            showSuggestions={!chatData.length}
            onSelectSuggestion={onSelectSuggestion}
          />
          <ToastContainer />
        </main>
        <div ref={messagesEndRef} />
      </DataProvider>
    </>
  );
}
