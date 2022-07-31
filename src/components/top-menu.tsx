import { useState, useEffect } from "react";
import styled from "styled-components";
import { LogoImage, MenuSvg } from "./images";
import { Image } from "./common";

export const TopMenu = ({
    sidebar,
    setSidebar,
}: {
    sidebar: boolean;
    setSidebar: () => void;
}) => {
    const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);
    const StyledMenuContainer = styled.div`
        transition: margin 969ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
        margin-left: 280px;
        @media (max-width: 1080px) {
            margin-left: 0;
        }
    `;
    const StyledFlexWrap = styled.div`
        @media (min-width: 600px) {
            width: 100%;
            padding: 25px 0 35px 0;
        }
        z-index: 10;
        background: transparent;
        align-items: flex-end;
        backdrop-filter: none;
        justify-content: flex-end;
        color: #fff;
        display: flex;
        box-sizing: border-box;
        flex-shrink: 0;
        flex-direction: column;
        box-shadow: none;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        top: 0;
        left: auto;
        right: 0;
        position: sticky;
    `;
    const StyledButtonGroup = styled.div`
        @media (min-width: 0px) and (orientation: landscape) {
            min-height: 48px;
        }
        @media (min-width: 600px) {
            min-height: 64px;
        }
        min-height: 56px;
        display: flex;
        position: relative;
        align-items: center;
        width: 89%;
        max-width: 937px;
        margin: auto;
    `;
    const StyledTitle = styled.div`
        @media (min-width: 1080px) {
            display: none;
        }
        background: hsla(0, 0%, 100%, 0.2);
        box-shadow: 0 0 10px rgb(44 39 109 / 10%);
        border-radius: 10px;
        padding: 10px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-right: 16px;
    `;
    const StyledGroup = styled.div`
        display: flex;
        align-items: center;
        margin-left: auto;
    `;
    const StyledExtraButton = styled.div`
        padding: 10px 21px;
        background: hsla(0, 0%, 100%, 0.2);
        box-shadow: 0 0 10px rgb(44 39 109 / 10%);
        border-radius: 14px;
        cursor: pointer;
        margin-right: 20px !important;
        font-family: "Montserrat_SemiBold";
        font-weight: 600;
        font-size: 20px;
        color: white;
        margin: 0;
        @media (max-width: 450px) {
            display: none;
        }
    `;
    const StyledExtraButton1 = styled.div`
        padding: 10px 21px;
        background: hsla(0, 0%, 100%, 0.2);
        box-shadow: 0 0 10px rgb(44 39 109 / 10%);
        border-radius: 14px;
        cursor: pointer;
        margin-right: 20px !important;
        font-family: "Montserrat_SemiBold";
        font-weight: 600;
        font-size: 20px;
        color: white;
        margin: 0;
        margin-right: 0px !important;
    `;
    return (
        <StyledMenuContainer>
            <StyledFlexWrap>
                <StyledButtonGroup>
                    <StyledTitle onClick={() => setSidebar()}>
                        <MenuSvg />
                    </StyledTitle>
                    <StyledGroup>
                        <StyledExtraButton>SURF</StyledExtraButton>
                        <StyledExtraButton1>Connect Wallet</StyledExtraButton1>
                    </StyledGroup>
                </StyledButtonGroup>
            </StyledFlexWrap>
        </StyledMenuContainer>
    );
};
