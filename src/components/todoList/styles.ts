import styled from "styled-components";

const todoListStyled = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #a64d79, #ffafbd);
  min-height: calc(100vh - 162.5px);
  overflow-y: auto;
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

  @media (max-width: 768px) {
    .page-container {
      padding: 1rem 1rem;
    }
    .todo-list-container {
      width: 100%;
    }
  }
`;

export default todoListStyled;
