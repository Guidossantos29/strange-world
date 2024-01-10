import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    margin-top: 50px;

`
export const Tags = styled.p`
    font-weight: bold;

`
export const TagsContainer = styled.div`
    display: flex;
    gap: 10px;

`

export const ContentPost = styled.p`
    font-size: 1.5rem;


`

export const TitlePost = styled.span`
    font-size: 2rem;
    border-bottom: solid 2px #ccc;
    padding-bottom: 10px;

`
export const ContentPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 50%;
    background-color: aliceblue;
    padding: 30px;
    border-radius: 20px;


`
export const ImagePost = styled.img`

    max-width: 90%;

`