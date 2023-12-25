import React from "react";

export default function Information({ data }) {
  return data.map((item) => (
    <div style={{
      padding: '10px',
      border: '2px solid #357858',
      borderRadius: '6px',
      margin: '8px',
    }}>
      <div dangerouslySetInnerHTML={{ __html: item.label }} />
    </div>
  ));
}
