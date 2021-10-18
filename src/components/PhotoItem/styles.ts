import styled from "styled-components";

export const Container = styled.div`
    background-color: #F2F2F2;
    border-radius: 10px;
    padding:10px;
    text-align: center;

    {
        color: black;
    }

    img{
        width: 200px;
        height: 230px;
        display: block;
        margin: 0 auto;
        margin-bottom: 10px;
        border-radius: 10px;
    }
    button {
        display: block;
        background-color: #007953;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 10px auto 0 auto;
        cursor: pointer;
        &:hover {
            opacity: .9;
        }
    }
`;
