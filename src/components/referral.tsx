import styled from "styled-components";
import { Text } from "./common";
export const Referral = (props: any) => {
    const StyledReferralView = styled.div`
        width: 89%;
        max-width: 930px;
        margin: auto;
    `;
    const StyledCard = styled.div`
        transform: none;
        transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
            background: rgba(36, 39, 41, 0.1);
            -webkit-backdrop-filter: blur(40px);
            backdrop-filter: blur(40px);
        }
        position: relative;
        z-index: 2;
        border-radius: 10px;
        padding: 20px;
        width: 100%;
    `;
    const StyledMenu = styled.div`
        width: 100%;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    `;
    const StyledTitle = styled(Text)`
        font-size: 22px;
        font-family: "Montserrat_Bold";
        color: #fff;
    `;
    const StyledInput = styled.input`
        &::focus {
            outline: 0;
        }
        margin: 20px;
        font-family: "Montserrat_Medium";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: hsla(0, 0%, 100%, 0.6);
        padding: 14px 20px;
        font: inherit;
        width: 80%;
        border: 0;
        height: 1.1876em;
        display: block;
        min-width: 0;
        background-color: rgb(255, 255, 255, 0.12);
        border-radius: 10px;
        box-sizing: content-box;
        animation-name: mui-auto-fill-cancel;
        letter-spacing: inherit;
        animation-duration: 10ms;
        -webkit-tap-highlight-color: transparent;
    `;
    const StyledButton = styled.button`
        width: 100px;
        padding: 10px 20px;
        border-color: #61ce70;
        border-radius: 10px;
        background-color: #61ce70;
        color: white;
    `;
    return (
        <StyledReferralView>
            <StyledCard>
                <StyledMenu>
                    <StyledTitle>Your Referral Link</StyledTitle>
                    <StyledInput placeholder="Link Url" type="text" />
                    <StyledButton type="button">Copy</StyledButton>
                </StyledMenu>
            </StyledCard>
        </StyledReferralView>
    );
};
