"use client";

import React, { useState, useEffect } from "react";
import { Collapse } from "antd";
import Image from "next/image";
import styled from "styled-components";

import Logo from "../../images/logo.png";

import SuggestionPills from "../SuggestionPill";
import CodeEditor from "../CodeEditor";
import PieChart from "../PieChart";
import SankeyChart from "../SankeyChart";
import Information from "../Information";

const StyledCollapse = styled(Collapse)`
  width: 100%;
  border: none;
  boxshadow: none;
  background: white;
  box-shadow: 0px 0px 10px 4px rgba(235, 235, 235, 1);
  border-radius: 10px;
  margin-bottom: 20px;
  & .ant-collapse-header {
    padding: 20px !important;
  }
`;

const StyledPreHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

const Accordion = ({ items, onSelectSuggestion, openTabs }) => {
  const [accordionItems, setAccordionItems] = useState([]);
  const [activeIndexes, setActiveIndexes] = useState([]);

  useEffect(() => {
    if (items.length && !accordionItems.length) {
      let indexes = [];
      const itemsToShow = items.map((item, index) => {
        if (item.isOpen) {
          indexes.push(index.toString());
        }
        return {
          key: index,
          label: (
            <div className="testHere">
              {item.preHeader ? (
                <>
                  <StyledPreHeader>
                    <Image src={Logo} alt="Logo" width={30} height={30} />
                    <div dangerouslySetInnerHTML={{ __html: item.preHeader }} />
                  </StyledPreHeader>
                  <br />
                </>
              ) : null}
              <div
                class="container"
                style={{ display: "flex", alignItems: "center" }}
              >
                <p style={{ marginRight: "auto" }}>{item.label}</p>
                <hr
                  class="line"
                  style={{
                    flexGrow: 1,
                    border: "none",
                    borderBottom: "1px solid #d6d6d6",
                    marginLeft: "10px",
                  }}
                />
              </div>
            </div>
          ),
          children: (
            <div style={{ display: "flex", justifyContent: "center" }}>
              {item.component.type === "codeEditor" ? (
                <CodeEditor index={index} />
              ) : item.component.type === "pieChart" ? (
                <div style={{ height: 350, width: "100%" }}>
                  <PieChart />
                </div>
              ) : item.component.type === "suggestions" ? (
                <SuggestionPills
                  onSelectSuggestion={onSelectSuggestion}
                  suggestions={item.component.data}
                />
              ) : item.component.type === "sankey" ? (
                <div style={{ height: 500, width: "100%" }}>
                  <SankeyChart />
                </div>
              ) : item.component.type === "information" ? (
                <Information data={item.component.data} />
              ) : null}
            </div>
          ),
        };
      });
      setAccordionItems(itemsToShow);
      setActiveIndexes(indexes);
    }
  }, [items]);

  return (
    <>
      <StyledCollapse
        ghost
        // defaultActiveKey={activeIndexes.length ? ["0"] : null}
        defaultActiveKey={openTabs}
        expandIconPosition={"end"}
        items={accordionItems}
      />
    </>
  );
};
export default Accordion;
