import styled from "styled-components";

export const FetchImageWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  padding-top: 100px;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  margin: 30px 20px 15px 20px;

  .card-image {
    height: 50vh;
    width: 100%;
  }
  .card {
    padding: 10px 0 10px 0;
    border: 1px solid lightgray;
    max-width: 40rem;
    margin: 20px;
  }
  .card-body {
    text-align: left;
    padding-left: 7px;
    padding-right: 7px;
  }
  .card-text {
    font-size: 10px;
  }
  .card-title-top {
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 10px;
    padding-left: 7px;
  }
  .card-title {
    text-align: left;
    font-size: 14px;
    font-weight: 600;
  }
  .like-button {
    border: none;
    cursor: pointer;
    background: none;
  }
  .button-likes {
    font-size: 20px;
  }
  .bi-heart-fill {
    color: gray;
    font-size: 20px;
  }
`;
