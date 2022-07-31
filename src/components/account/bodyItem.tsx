import styled from "styled-components";
import { Text } from "../common";

export const BodyItem = (props: any) => {
    const StyledDataRow = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        padding: 10px 30px;
    `;
    const StyledTitle = styled(Text)`
        font-family: "Montserrat_Medium";
        font-weight: 700;
        font-size: 1.2rem;
        color: #fff;
        line-height: 1;
    `;
    const StyledContent = styled(Text)`
        font-family: "Montserrat_Medium";
        font-weight: bolder;
        font-size: 1.5rem;
        line-height: 1.334;
        letter-spacing: 0;
        color: #fff;
    `;
    return (
        <StyledDataRow>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledContent>{props.content}</StyledContent>
        </StyledDataRow>
    );
};
