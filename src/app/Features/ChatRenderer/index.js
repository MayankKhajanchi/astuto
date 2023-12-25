import React from "react";

import UserInput from "../../components/UserInput";
import Accordion from "../../components/Accordion";

export default function ChatRenderer({ data, onSelectSuggestion }) {
  return data.map(({ type, data }) => {
    switch (type) {
      case "userInput":
        return <UserInput message={data.message} />;
        break;
      case "accordion":
        return (
          <Accordion
            items={data.items}
            onSelectSuggestion={onSelectSuggestion}
            openTabs={data.items.map((item, index) => {
              if (item.isOpen) {
                return index;
              }
            })}
          />
        );
      default:
        break;
    }
  });
}
