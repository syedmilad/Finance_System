import React from "react";

const Checkbox = ({ checked,classes, onChange, label, disabled }) => {
  return (
    <div className={`${classes}`}>
      <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: disabled ? "not-allowed" : "pointer" }}>
        <input
          type="checkbox"
          onChange={onChange}
          disabled={disabled}
          style={{ width: "16px", height: "16px" }}
        />
        {label && <span>{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
