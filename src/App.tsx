import "./App.css";
import Copyright from "./components/copyright";
import TodoList from "./components/todoList";
import { Layout, Typography } from "antd";

const { Footer, Content, Header } = Layout;
const { Title } = Typography;
const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A1A1D",
        }}
      >
        <Title level={2} style={{ color: "#A64D79" }}>
          Todo List App
        </Title>
      </Header>
      <Content
        style={{
          maxWidth: 1280,
          width: "100%",
          margin: "auto",
          flex: 1,
          background: "#A64D79",
        }}
      >
        <TodoList />
      </Content>
      <Footer style={{ textAlign: "center", padding: 0 }}>
        <Copyright />
      </Footer>
    </Layout>
  );
};

export default App;
