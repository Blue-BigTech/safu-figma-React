import styled from "styled-components";
import { Text } from "../common";

export const DashboardItem = (props: any) => {
    const StyledItem = styled.div`
        @media (min-width: 600px) {
            flex-grow: 0;
            max-width: 50%;
            flex-basis: 50%;
        }
        @media (min-width: 960px) {
            flex-grow: 0;
            max-width: 33.333333%;
            flex-basis: 33.333333%;
        }
        @media (min-width: 1280px) {
            flex-grow: 0;
            max-width: 33.333333%;
            flex-basis: 33.333333%;
        }

        flex-grow: 0;
        max-width: 100%;
        flex-basis: 100%;
        margin: 0;
    `;
    const StyledCard = styled.div`
        @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
            background: #09160c;
            -webkit-backdrop-filter: blur(100px);
            backdrop-filter: blur(100px);
        }
        position: relative;
        z-index: 2;
        border-radius: 10px;
        padding: 13px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `;
    const StyledTitle = styled(Text)`
        font-family: "Montserrat_Medium";
        font-weight: 500;
        font-size: 1.2rem;
        color: hsla(0, 0%, 100%, 0.6);
        padding: 3px 0;
    `;
    const StyledContent = styled(Text)`
        font-family: "Montserrat_Bold";
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
    `;
    return (
        <StyledItem>
            <StyledCard>
                <StyledTitle>{props.title}</StyledTitle>
                <StyledContent>{props.content}</StyledContent>
            </StyledCard>
        </StyledItem>
    );
};
