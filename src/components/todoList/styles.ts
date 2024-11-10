import styled from "styled-components";

const todoListStyled = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #2c3e50, #4ca1af);
  min-height: calc(100vh - 162.5px);
  overflow-y: auto;

  .header, .footer {
    background-color: #34495e;
    color: #ecf0f1;
    padding: 1rem;
    text-align: center;
  }

  .page-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
  }

  .todo-list-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    .todo-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  .todo-item {
    transition: opacity 0.5s ease-in-out;
    .button-item {
      color: #ecf0f1;
      background-color: #34495e;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: #2c3e50;
      }
    }
  }


  h4 {
    color: #ecf0f1;
  }

  @media (max-width: 768px) {
    .page-container {
      padding: 1rem;
    }
    .todo-list-container {
      width: 100%;
    }
  }
`;

export default todoListStyled;
