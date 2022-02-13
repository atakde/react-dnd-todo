import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  gap: 1rem;
  color: #98a2b3;
  font-size: 14px;

  background: #fcfcfd;
  box-shadow: 0px 0.5px 2px rgba(16, 24, 40, 0.3);
  border-radius: 8px;

  h2 {
    color: #1d2939;
    font-size: 20px;
    font-weight: bold;
  }

  .card-header {
    display: flex;
    flex-direction: column;
  }

  .card-info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }

  .dot {
    height: 4px;
    width: 4px;
    background-color: #c4c4c4;
    border-radius: 50%;
    display: inline-block;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    p {
      margin: 0;
    }
  }

  .card-tags {
    display: flex;
    width: 100%;
    gap: 0.2rem;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;

    .assigned {
      display: flex;
      gap: 0.2rem;
    }

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

export const Tag = styled.label`
  padding: 6px 12px;
  background: #f2f4f7;
  color: #475467;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  border-radius: 6px;
  text-align: center;
  margin-right: 8px;
`;
