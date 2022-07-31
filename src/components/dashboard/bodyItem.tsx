import styled from "styled-components";
import { Text } from "../common";

export const BodyItem = (props: any) => {
    const StyledCard = styled.div`
        @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
            background: #09160c;
            -webkit-backdrop-filter: blur(100px);
            backdrop-filter: blur(100px);
        }
        border: 1px solid #62745e;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        z-index: 2;
        height: 100px;
        margin-top: 1.3rem;
    `;
    const StyledTitle = styled(Text)`
        font-family: "Montserrat_Medium";
        font-weight: 500;
        font-size: 1.2rem;
        color: hsla(0, 0%, 100%, 0.6);
        padding: 5px 0;
        margin: 0;
    `;
    const StyledContent = styled(Text)`
        font-family: "Montserrat_Bold";
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        margin: 0;
    `;
    return (
        <StyledCard>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledContent>{props.content}</StyledContent>
        </StyledCard>
    );
};
