import React from "react";
import { SendOutlined } from "@ant-design/icons";

const SuggestionPill = ({ label, onClick, disabled }) => {
  return (
    <div
      onClick={onClick}
      style={{ border: "1px solid #eaeaea", height: 60, padding: 10 }}
      className={`flex items-center rounded-lg  ${
        disabled ? "cursor-not-allowed" : "hover:bg-slate-100"
      }`}
    >
      <div className="grow">{label}</div>
      <div className="flex-none">
        <SendOutlined style={{ color: "#357858" }} />
      </div>
    </div>
  );
};

export default function SuggestionPills({
  fullWidth,
  suggestions,
  onSelectSuggestion,
}) {
  return (
    <div className={`grid grid-cols-2 gap-4 ${fullWidth ? "" : "w-8/12"}`}>
      {suggestions.map(({ label, value, disabled }) => (
        <SuggestionPill
          label={label}
          value={value}
          disabled={disabled}
          onClick={() => {
            disabled ? null : onSelectSuggestion(value, label);
          }}
        />
      ))}
    </div>
  );
}
