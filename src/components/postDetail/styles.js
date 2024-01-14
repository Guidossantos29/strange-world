import { Link } from "react-router-dom";
import styled from "styled-components";


export const FeedItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-bottom: solid 1px #ccc;
    padding: 30px;
    
    margin-bottom: 10px;

`

export const BtnRead = styled(Link)`
  background-color: black;
  transition: color 0.3s ease;
  text-decoration: none;
  margin-right: 90%;
  padding: 10px;
  text-align: center;
  color: white;
  border-radius: 5px;

  &:hover {
    background-color: #3399ff;
  }
`;

