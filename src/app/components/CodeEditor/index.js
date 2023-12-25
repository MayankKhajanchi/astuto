"use client";

import "react-toastify/dist/ReactToastify.css";

import React, { useEffect, useState, useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import Image from "next/image";
import { sql, SQLDialect } from "@codemirror/lang-sql";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { toast } from "react-toastify";

import Button from "../Button";

import Copy from "../../images/copy.svg";
import Redo from "../../images/redo.svg";

import dataContext, { DataProvider } from "@/app/Context/Provider";

const KEYWORDS = [
  "select",
  "from",
  "where",
  "and",
  "or",
  "not",
  "in",
  "between",
  "contains",
  "array",
  "limit",
  "offset",
  "union",
  "intersect",
  "except",
  "order by",
  "asc",
  "desc",
];

const TENSORS = ["images", "labels"];

const dialect = SQLDialect.define({
  keywords: KEYWORDS.join(" "),
  builtin: TENSORS.join(" "),
});

export default function CodeEditor() {
  const [visible, setVisible] = useState();
  const [code, setCode] = useState();

  const [isEditable, setIsEditable] = useState(false);

  const { lastRun, refreshPieChartData } = useContext(dataContext);

  const codeOptions = {
    theme: "monokai",
    mode: "text/x-sql",
    line: true,
    lineNumbers: true,
    tabSize: 2,
    styleActiveLine: true,
    lineWrapping: true,
    foldGutter: true,
  };

  useEffect(() => {
    setCode(
      "SELECT\n service,\n SUM(cost) AS total_cost\nFROM\n cloud_costs\nWHERE \n account_type = 'production (#24542)'\nGROUP BY\n service\nORDER BY\n total_cost DESC;"
    );
  }, [visible]);

  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <CodeMirror
        value={code}
        options={codeOptions}
        theme={darcula}
        extensions={[sql({ dialect })]}
        editable={isEditable}
        onChange={(code) => setCode(code)}
      />
      <div className="flex justify-between pt-2" style={{ color: "#357858" }}>
        <div
          className="flex cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(code);

            toast.success("Snippet copied to clipboard!", {
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
          Copy Query
        </div>
        <div className="flex cursor-pointer" onClick={refreshPieChartData}>
          <div className="pr-2">Last ran on : {lastRun}</div>
          <Image src={Redo} alt="copy" width={20} height={20} />
          Rerun Query
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 1,
          top: 1,
          color: "white",
          background: "green",
          borderRadius: "6px",
          padding: "2px",
        }}
        onClick={toggleEditable}
      >
        {isEditable ? (
          <Button icon="code" type="iconButton" />
        ) : (
          <Button icon="edit" type="iconButton" />
        )}
      </div>
    </div>
  );
}
