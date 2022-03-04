import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #fff9f3;
  font-size: 1.8rem;
`;

export const CardResult = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300px;
  overflow: auto;
  border-radius: 10px;
  background-color: #fff2e4;
  color: #565655;
  p {
    font-weight: bold;
    color: #505050;
  }

  .place {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    .Xbotton {
      margin-left: 120px;
      text-align: center;
      cursor: pointer;
      padding: 5px;
      width: 20px;
      border: none;
      font-size: 1.5rem;
      color: #ffa900;
      text-weight: bold;
    }
  }
  .temp {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 80px;
    }
    h1 {
      font-size: 2rem;
      font-weight: 700;
      padding-bottom: 15px;
      padding-left: 15px;
    }
    img {
    }
  }
  .moreInformation {
    display: flex;
    gap: 40px;
    border-top: 1px solid #ffa900;
    .info1 {
      display: flex;
      flex-direction: column;
      gap: 5px;
      .arrow {
        color: #ffa900;
      }
      p {
        padding: 5px;
        font-weight: bold;
        span {
          font-weight: lighter;
        }
      }
    }
    .info2 {
      display: flex;
      flex-direction: column;
      gap: 5px;
      p {
        padding: 5px;
        span {
          font-weight: lighter;
        }
      }
    }
  }
`;

export const ContainerCapitais = styled.div``;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border: none;
  width: 500px;
  input {
    padding: 10px;
    width: 100%;
    border: none;
    font-size: 1.1rem;
    border-radius: 10px 0px 0px 10px;
  }
  button {
    padding: 13px;
    cursor: pointer;
    border: none;
    border-radius: 0px 10px 10px 0px;
  }
`;
