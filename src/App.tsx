import React from "react";
import { Typography } from "antd";
import TodoList from "./components/todoList";
import {
  LinkedinOutlined,
  GithubOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

import "./App.css";

const { Title } = Typography;

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <Title level={2} style={{ color: "white" }}>
          Simple Todo{" "}
        </Title>
      </header>
      <main>
        <TodoList />
      </main>
      <footer className="footer">
        <p>&copy; 2024 Teerapat (Bosck) Surasin. All rights reserved.</p>
        <p style={{ margin: "0" }}>
          <a
            href="https://github.com/bxsck"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px" }}
          >
            <GithubOutlined style={{ fontSize: "24px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/teerapat-srs"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px" }}
          >
            <LinkedinOutlined style={{ fontSize: "24px" }} />
          </a>
          <a
            href="https://bosckts.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px" }}
          >
            <GlobalOutlined style={{ fontSize: "24px" }} />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
