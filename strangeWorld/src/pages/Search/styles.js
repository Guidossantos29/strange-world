import styled from "styled-components";
import { Link } from "react-router-dom";

export const NoSearh = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    border: solid 1px;
`
export const SearchComponent = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     gap: 20px;    

`
export const BtnReturn = styled(Link)`
     background-color: black;
    transition: color 0.3s ease;
    text-decoration: none;
    padding: 10px;
    text-align: center;
    color: white;
    border-radius: 5px;

  &:hover {
    background-color: #3399ff;
  }


`