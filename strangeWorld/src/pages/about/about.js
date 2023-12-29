import { Link } from "react-router-dom";
import styled from "styled-components";


export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    margin-top: 30px;


   


`

export const CreateBtn = styled(Link)`
    display: block;
    margin-top: 15px;
    padding: 10px 15px;
    background-color: green;
    border-radius: 30px;
    color: white;
    text-decoration: none;
    font-weight: bold;

`