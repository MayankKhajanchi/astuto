"use client";

import React, { useState } from "react";
import { AutoComplete, Input, Tooltip } from "antd";
import { InfoCircleOutlined, SendOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { toast } from "react-toastify";

import SuggestionPills from "../SuggestionPill";

const StyledInput = styled(Input)`
  height: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 4px rgba(235, 235, 235, 1);
`;

const options = [
  {
    label: "Which services costs are rising the fast?",
    value: "Which services costs are rising the fast?",
  },
  {
    label:
      "Why are EC2 costs increasing  much? (This query will open a new chat)",
    value: "Why are EC2 costs increasing  much?",
    key: "ec2_costs",
  },
  {
    label: "How can I reduce my S3 costs?",
    value: "How can I reduce my S3 costs?",
  },
  {
    label: "How can I reduce my RDS costs?",
    value: "How can I reduce my RDS costs?",
  },
];

export default function InputField({ showSuggestions, onSelectSuggestion }) {
  // const [options, setOptions] = useState([
  //   { label: "Which services costs are rising the fast?", value: "test" },
  // ]);
  const handleSearch = (value) => {
    // setOptions(value ? [...options, searchResult(value)] : []);
  };
  const onSelect = (value) => {
    onSelectSuggestion();
  };
  return (
    <div
      className="px-8 w-8/12"
      style={{ position: "fixed", bottom: "20px", zIndex: 100 }}
    >
      {showSuggestions ? (
        <div className="mb-5">
          <SuggestionPills
            fullWidth
            onSelectSuggestion={onSelectSuggestion}
            suggestions={[
              {
                label: "Top cloud costs by services in production.",
                value: "service_costs",
              },
              {
                label: "Which application costs are increasing the fastest?",
                value: "application_costs",
                disabled: true,
              },
              {
                label:
                  "How much money are we losing by not moving to graviton instances?",
                value: "graviton",
                disabled: true,
              },
              {
                label: "Which are the largest S3 buckets by size?",
                value: "largets_s3_buckets",
                disabled: true,
              },
            ]}
          />
        </div>
      ) : null}
      <AutoComplete
        popupMatchSelectWidth="60vw"
        style={{
          width: "100%",
        }}
        filterOption={(inputValue, option) =>
          option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        options={options}
        onSelect={(a, option) => {
          if (!option.key) {
            toast.error("Please select another option!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            onSelectSuggestion(option.key, option.value);
          }
        }}
        onSearch={handleSearch}
        size="large"
      >
        <StyledInput
          size="large"
          placeholder="Start typing your query here..."
          suffix={
            <Tooltip title="Extra information">
              <SendOutlined style={{ color: "#357858" }} />
            </Tooltip>
          }
        />
      </AutoComplete>
    </div>
  );
}
