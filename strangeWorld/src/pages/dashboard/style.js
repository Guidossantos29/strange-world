import { Link } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./dashboard";

export const BtnFisrtPost = styled(Link)`
     display: block;
     margin-top: 15px;
     padding: 10px 15px;
     background-color: green;
     border-radius: 30px;
     color: white;
     text-decoration: none;
     font-weight: bold;
    


`
export const ContainerLinksDashboard = styled.div`
    display: flex;
      align-items: center;
      justify-content: space-between ;
      font-weight: bold;
      border-bottom: 2px solid #ccc;
      margin: 0 20%;
      padding: 10px;
      
      gap: 20px;

`
export const DashboardContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    
    
`

export const ContainerTitle = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between ;
      font-weight: bold;
      border-bottom: 2px solid #ccc;
      margin: 0 20%;
      padding: 10px;
      gap: 50px;
      

      
      

`
export const Title = styled.span`
     font-size: 2.2em;
     margin-bottom: 0.5em;
`

