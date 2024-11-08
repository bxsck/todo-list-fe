import { Col, Row, Button, Typography } from "antd";
import { useState } from "react";
import { todoListItems } from "../../data";
import Styles from "./styles";
const { Title } = Typography;

type Todo = {
  name: string;
  type: string;
};

enum TodoType {
  FRUIT = "Fruit",
  VEGETABLE = "Vegetable",
}

const RESET_TODO_ITEM_DELAY = 5000;
const MOVE_TODO_TRANSITION_DELAY = 500;

const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>(todoListItems);
  const [fruits, setFruits] = useState<Array<Todo>>([]);
  const [vegetables, setVegetables] = useState<Array<Todo>>([]);

  const fadeOutElement = (name: string) => {
    const element = document.getElementById(name);
    if (element) {
      element.style.transition = "opacity 0.5s ease-in-out";
      element.style.opacity = "0";
      element.style.pointerEvents = "none";
    }
  };

  const fadeInElement = (name: string, suffix: string) => {
    const element = document.getElementById(name + suffix);
    if (element) {
      element.style.transition = "opacity 0.5s ease-in-out";
      element.style.opacity = "1";
    }
  };

  const onMoveTodoItem = (
    name: string,
    type: string,
    setTypeList: React.Dispatch<React.SetStateAction<Todo[]>>,
    suffix: string
  ) => {
    setTodoList((prev) => prev.filter((todo) => todo.name !== name));
    setTypeList((prev) => [...prev, { name, type }]);
    setTimeout(() => fadeInElement(name, suffix), 0);
    setTimeout(
      () => resetTodoItem(name, type, setTypeList),
      RESET_TODO_ITEM_DELAY
    );
  };

  const resetTodoItem = (
    name: string,
    type: string,
    setTypeList: React.Dispatch<React.SetStateAction<Todo[]>>
  ) => {
    setTypeList((prev) => {
      if (prev.some((todo) => todo.name === name)) {
        return prev.filter((todo) => todo.name !== name);
      }
      return prev;
    });
    setTodoList((prev) => {
      if (!prev.some((todo) => todo.name === name)) {
        return [...prev, { name, type }];
      }
      return prev;
    });
  };

  const handleClickTodoItem = (name: string, type: string) => {
    fadeOutElement(name);
    setTimeout(() => {
      if (type === TodoType.FRUIT) {
        onMoveTodoItem(name, type, setFruits, "-fruit");
      } else if (type === TodoType.VEGETABLE) {
        onMoveTodoItem(name, type, setVegetables, "-vegetable");
      }
    }, MOVE_TODO_TRANSITION_DELAY);
  };

  const handleClickReturnItem = (name: string, type: string) => {
    if (type === TodoType.FRUIT) {
      setFruits((prev) => prev.filter((todo) => todo.name !== name));
    } else if (type === TodoType.VEGETABLE) {
      setVegetables((prev) => prev.filter((todo) => todo.name !== name));
    }
    setTodoList((prev) => [...prev, { name, type }]);
  };

  return (
    <Styles>
      <div className="page-container">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <span className="todo-list-container">
              <Title level={3}>Todo List</Title>
              {todoList.map((item) => {
                return (
                  <div key={item.name} id={item.name} className="todo-item">
                    <Button
                      className="button-item"
                      style={{ width: 200 }}
                      onClick={() => handleClickTodoItem(item.name, item.type)}
                    >
                      {item.name}
                    </Button>
                  </div>
                );
              })}
            </span>
          </Col>
          <Col xs={24} md={8}>
            <span className="todo-list-container">
              <Title level={3}>Fruits</Title>
              {fruits.map((item) => {
                return (
                  <div
                    key={item.name}
                    id={item.name + "-fruit"}
                    className="todo-item"
                    style={{ opacity: 0 }}
                  >
                    <Button
                      style={{ width: 200 }}
                      onClick={() =>
                        handleClickReturnItem(item.name, item.type)
                      }
                    >
                      {item.name}
                    </Button>
                  </div>
                );
              })}
            </span>
          </Col>
          <Col xs={24} md={8}>
            <span className="todo-list-container">
              <Title level={3}>Vegetables</Title>
              {vegetables.map((item) => {
                return (
                  <div
                    key={item.name}
                    id={item.name + "-vegetable"}
                    className="todo-item"
                    style={{ opacity: 0 }}
                  >
                    <Button
                      style={{ width: 200 }}
                      onClick={() =>
                        handleClickReturnItem(item.name, item.type)
                      }
                    >
                      {item.name}
                    </Button>
                  </div>
                );
              })}
            </span>
          </Col>
        </Row>
      </div>
    </Styles>
  );
};

export default TodoList;
