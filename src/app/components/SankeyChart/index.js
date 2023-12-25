import React from "react";
import { ResponsiveSankey } from "@nivo/sankey";
import { toast } from "react-toastify";
import Image from "next/image";

import Copy from "../../images/copy.svg";
import Redo from "../../images/redo.svg";

const data = {
  nodes: [
    {
      id: "Excess Costs",
      nodeColor: "hsl(97, 70%, 50%)",
    },
    {
      id: "Production",
      nodeColor: "hsl(98, 70%, 50%)",
    },
    {
      id: "Purpose",
      nodeColor: "hsl(203, 70%, 50%)",
    },
    {
      id: "Customer",
      nodeColor: "hsl(227, 70%, 50%)",
    },
    {
      id: "Product",
      nodeColor: "hsl(349, 70%, 50%)",
    },
    {
      id: "Staging",
      nodeColor: "hsl(220, 70%, 50%)",
    },
    {
      id: "Analytics",
      nodeColor: "hsl(220, 70%, 50%)",
    },
    {
      id: "Web App",
      nodeColor: "hsl(220, 70%, 50%)",
    },
    {
      id: "API",
      nodeColor: "hsl(220, 70%, 50%)",
    },
    {
      id: "Workflow",
      nodeColor: "hsl(220, 70%, 50%)",
    },
    {
      id: "AMEX",
      nodeColor: "hsl(220, 70%, 50%)",
    },
    {
      id: "Citi",
      nodeColor: "hsl(220, 70%, 50%)",
    },
    {
      id: "Mobile App",
      nodeColor: "hsl(220, 70%, 50%)",
    },
    {
      id: "Chat",
      nodeColor: "hsl(220, 70%, 50%)",
    },
  ],
  links: [
    {
      source: "Excess Costs",
      target: "Production",
      value: 2000,
    },
    {
      source: "Excess Costs",
      target: "Staging",
      value: 300,
    },
    {
      source: "Excess Costs",
      target: "Analytics",
      value: 200,
    },
    {
      source: "Production",
      target: "Purpose",
      value: 800,
    },
    {
      source: "Production",
      target: "Customer",
      value: 600,
    },
    {
      source: "Production",
      target: "Product",
      value: 600,
    },
    {
      source: "Purpose",
      target: "Web App",
      value: 700,
    },
    {
      source: "Purpose",
      target: "API",
      value: 240,
    },
    {
      source: "Purpose",
      target: "Workflow",
      value: 160,
    },
    {
      source: "Customer",
      target: "AMEX",
      value: 420,
    },
    {
      source: "Customer",
      target: "Citi",
      value: 420,
    },
    {
      source: "Product",
      target: "Web App",
      value: 300,
    },
    {
      source: "Product",
      target: "Mobile App",
      value: 180,
    },
    {
      source: "Product",
      target: "Chat",
      value: 120,
    },
  ],
};

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function SankeyChart() {
  return (
    <>
      <ResponsiveSankey
        data={data}
        margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
        align="justify"
        colors={{ scheme: "category10" }}
        nodeOpacity={1}
        nodeHoverOthersOpacity={0.35}
        nodeThickness={18}
        nodeSpacing={24}
        nodeBorderWidth={0}
        nodeBorderColor={{
          from: "color",
          modifiers: [["darker", 0.8]],
        }}
        nodeBorderRadius={3}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        linkContract={3}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="vertical"
        labelPadding={16}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1]],
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 130,
            itemWidth: 100,
            itemHeight: 14,
            itemDirection: "right-to-left",
            itemsSpacing: 2,
            itemTextColor: "#999",
            symbolSize: 14,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
      <div
        className="flex justify-between pt-2"
        style={{ color: "#357858", position: "relative", top: "-20px" }}
      >
        <div
          className="flex cursor-pointer"
          onClick={() => {
            toast.success("Chart will be added to dashboard shortly.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              progress: undefined,
              theme: "light",
            });
          }}
        >
          <Image src={Copy} alt="copy" width={20} height={20} />
          Add to dashboard
        </div>
        <div
          className="flex cursor-pointer"
          onClick={() => {
            toast.success("Data will soon be exported.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              progress: undefined,
              theme: "light",
            });
          }}
        >
          <Image src={Redo} alt="copy" width={20} height={20} />
          Export
        </div>
      </div>
    </>
  );
}
