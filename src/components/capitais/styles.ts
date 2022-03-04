import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  justify-content: center;
  font-size: 1.4rem;
  padding-top: 20px;
  .containerTitle {
    h1 {
      color: #fff9f3;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  color: #0d1117;
  font-weight: bold;

  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    .labels1 {
      display: none !important;
    }
    .labels2 {
      margin-right: 120px;
    }
  }
  .containerLabels {
  }

  .containerCapitals {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
  }
  .labels1 {
    display: flex;
    justify-content: center;
  }
`;

export const Labels = styled.span`
  font-size: 1rem;
  font-weight: 400;
  padding: 10px;
  margin-right: 0px;
`;

export const Info = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  padding: 6px;
`;
