import styled from "styled-components";
import { Text } from "../common";

export const Item = (props: any) => {
    const StyledItem = styled.div`
        padding: 8px;
        @media (min-width: 600px) {
            flex-grow: 0;
            max-width: 100%;
            flex-basis: 100%;
        }
        @media (min-width: 960px) {
            flex-grow: 0;
            max-width: 100%;
            flex-basis: 100%;
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
        box-sizing: border-box;
    `;
    const StyledCard = styled.div`
        color: rgba(243, 240, 240, 0.87);
        transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        background-color: rgba(0, 0, 0, 0.2);
        justify-content: center;
        padding: 0 5px;
        margin: 30px auto auto;
        border-radius: 10px;
        border: 1px solid #62745e;
        box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
            0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    `;
    const StyledDetail = styled.div`
        display: flex;
        flex-direction: column;
        padding: 15px, 10px;
        height: 150px;
        justify-content: center;
        align-items: center;
    `;
    const StyledTitle = styled(Text)`
        font-size: 1.2rem;
        font-family: "Square";
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: 0.00938em;
        margin: 0;
        color: #fff;
    `;
    const StyledContent = styled(Text)`
        font-family: "Montserrat_Medium";
        color: rgb(97, 206, 112);
        font-weight: bolder;
        font-size: 2.125rem;
        line-height: 1.235;
        letter-spacing: 0.00735rem;
    `;
    return (
        <StyledItem>
            <StyledCard>
                <StyledDetail>
                    <StyledTitle>{props.title}</StyledTitle>
                    <StyledContent>{props.content}</StyledContent>
                    <StyledTitle>{props.footer}</StyledTitle>
                </StyledDetail>
            </StyledCard>
        </StyledItem>
    );
};
