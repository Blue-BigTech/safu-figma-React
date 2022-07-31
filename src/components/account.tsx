import styled from "styled-components";
import { Header } from "./account/header";
import { Body } from "./account/body";

export const Account = (props: any) => {
    const StyledAccountView = styled.div`
        width: 75%;
        margin: auto;
    `;
    const StyledContainer = styled.div`
        padding-left: 3.3rem;
        padding-right: 3.3rem;
        @media (min-width: 600px) {
            padding-left: 24px;
            padding-right: 24px;
        }
        @media (min-width: 1280px) {
            max-width: 1280px;
        }
        width: 100%;
        display: block;
        box-sizing: border-box;
        margin-left: auto;
        margin-right: auto;
        /* padding-left: 16px;
        padding-right: 16px; */
    `;
    return (
        <StyledAccountView>
            <StyledContainer>
                <Header />
                <Body />
            </StyledContainer>
        </StyledAccountView>
    );
};
