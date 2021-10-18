import styled from 'styled-components';


export const MainContainer = styled.div`
background: rgb(79,217,173);
background: linear-gradient(180deg, rgba(79,217,173,1) 5%, rgba(255,255,255,0.99) 55%);
`;
export const Container = styled.div`
    
    color: #FFF;
    min-height: 100vh;

    h1{
        font-family: 'Rochester', cursive;
        color: white;
        text-shadow: 5px -2px 0px rgba(29,125,97,1);
    }
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji{
        font-size: 50px;
        margin-bottom: 20px;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const UploadForm = styled.form`
    background-color: #EFF7F6;
    display:flex;
    justify-content: center;
    margin: auto;
    height: 40px;
    width: 500px;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    input[type=file] {
        background-color:#007953;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
        height: 20px;

        &:hover{
            opacity: .9;
        }
    }
    input[type=submit] {
        background-color:#007953;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
        height: 35px;

        &:hover{
            opacity: .9;
        }
    }
`;