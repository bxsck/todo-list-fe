import styled from "styled-components";

const todoListStyled = styled.div`
  .todo-list-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    .todo-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  .todo-item {
    transition: opacity 0.5s ease-in-out;
    .button-item {
        color: #1A1A1D;
    }
  }
  h4 {
    color: #3B1C32;
  }
`;

export default todoListStyled;
