import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    width: 100vw;
    position: relative;
    z-index: 1;
    background: #DAE0E2;
`;
export const AboutWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
    @media screen and (max-width: 768px){
        height: 70vh;
    }
`;

export const AboutContent = styled.div`
    display: flex;
    flex-direction:column;
    margin-right:20px;
    margin-left: 20px;
    padding:20px;
    background: white;
    border-radius: 10px;
    max-width: 90vw;
    box-shadow: -5px 6px #A4B0BD;
`;
export const ContentItem = styled.div`
    padding: 15px;
    margin-left: auto;
    margin-right:auto;
    display:flex;
    flex-direction:column;
    justify-content: center;
    
    @media screen and (max-width: 768px){
        padding: 18px;
    }
    @media screen and (max-width: 480px){
        padding: 15px;
    }
`;
export const AboutTitle = styled.h1`
    margin-bottom: 40px;
    color: #0A79DF;
    font-size: 32px;
    max-width: 480px;
    text-align:center;

    @media screen and (max-width: 768px){
        font-size: 28px;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 480px){
        font-size: 24px;
    }
`;
export const ContentTitle = styled.h2`
    color: #0A79DF;
    font-size: 20px;
    max-width: 380px;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
    @media screen and (max-width: 480px){
        font-size: 10px;
    }
`;
export const ContentBody = styled.p`
    margin-top: 10px;
    color: #616C6F;
    font-size: 16px;
    text-align: left;
    max-width: 480px;

    @media screen and (max-width: 768px){
        font-size: 14px;
    }
    @media screen and (max-width: 480px){
        font-size: 10px;
    }
`;
export const AboutImage = styled.div`
    padding: 30px;
    
`;
export const Image = styled.img`
        width: 450px;
    @media screen and (max-width: 768px){
        height: 300px;
    }
`;