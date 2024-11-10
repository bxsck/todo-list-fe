import React from "react";
import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";

const Copyright: React.FC = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 0px",
        borderTop: "1px solid #e8e8e8",
        background: "#1A1A1D",
        width: "100%",
      }}
    >
      <p style={{ margin: "0 0 10px 0", color: "#A64D79" }}>
        &copy; {new Date().getFullYear()} Teerapat (Bosck) Surasin. All rights
        reserved.
      </p>
      <p style={{ margin: "0" }}>
        <a
          href="https://github.com/bxsck"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px" }}
        >
          <GithubOutlined style={{ fontSize: "24px", color: "#A64D79" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/teerapat-srs"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px" }}
        >
          <LinkedinOutlined style={{ fontSize: "24px", color: "#A64D79" }} />
        </a>
      </p>
    </div>
  );
};

export default Copyright;
