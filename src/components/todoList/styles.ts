import styled from "styled-components";

const todoListStyled = styled.div`
  width: 100%;
  background: #a64d79;
  min-height: calc(100vh - 140px);
  .page-container {
    max-width: 1280px;
    margin: 0 auto;
  }
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
      color: #1a1a1d;
    }
  }
  h4 {
    color: #1A1A1D;
  }
`;

export default todoListStyled;
