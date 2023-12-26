import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
      * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Montserrat" ;
    
  }  
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 300px;
  }
  label{
    
    gap: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    

    
  }
  input{
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 0.8em 0em;
    background-color: transparent;
    
  }

  button{
    height: 40px;
    width: 180px;
    position: relative;
    background-color: blue;
    cursor: pointer;
    border: 2px solid #252525;
    overflow: hidden;
    border-radius: 30px;
    color: white;
    transition: all 0.5s ease-in-out;

  &:hover{
    box-shadow: 1px 1px 200px #252525;
    border: none;

  }
    
  }

`