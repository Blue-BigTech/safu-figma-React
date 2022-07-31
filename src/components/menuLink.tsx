import styled from "styled-components";
import { Linked, Image, Text } from "./common";
import {
    DashboardSvg,
    AccountSvg,
    CalculatorSvg,
    SwapSvg,
    DocsSvg,
} from "./images";
import "./style.css";
export const MenuLink = (props: any) => {
    const StyledMenuLink = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    const StyledNav = styled.div`
        display: flex;
        flex-flow: column;
    `;
    const StyledLink = styled(Linked)`
        margin-top: 20px;
        align-items: center;
        margin-bottom: 20px;
        text-decoration: none;
    `;
    const StyledMenuItem = styled.div`
        display: flex;
        grid-gap: 12px;
        gap: 12px;
        flex-direction: row;
        align-items: center;
    `;
    const StyledItem = styled(Text)`
        font-family: "Montserrat_SemiBold";
        font-weight: 600;
        font-size: 22px;
        color: #fff;
    `;
    return (
        <StyledMenuLink>
            <StyledNav>
                <StyledLink to="/dashboard">
                    <StyledMenuItem>
                        <DashboardSvg className="svgFile" />
                        <StyledItem
                            className={props.tabIndex === 1 ? "colorStyle" : ""}
                        >
                            Dashboard
                        </StyledItem>
                    </StyledMenuItem>
                </StyledLink>
                <StyledLink to="/account">
                    <StyledMenuItem>
                        <AccountSvg className="svgFile" />
                        <StyledItem
                            className={props.tabIndex === 2 ? "colorStyle" : ""}
                        >
                            Account
                        </StyledItem>
                    </StyledMenuItem>
                </StyledLink>
                <StyledLink to="/calculator">
                    <StyledMenuItem>
                        <CalculatorSvg className="svgFile" />
                        <StyledItem
                            className={props.tabIndex === 3 ? "colorStyle" : ""}
                        >
                            Calculator
                        </StyledItem>
                    </StyledMenuItem>
                </StyledLink>
                <StyledLink to="/referral">
                    <StyledMenuItem>
                        <CalculatorSvg className="svgFile" />
                        <StyledItem
                            className={props.tabIndex === 4 ? "colorStyle" : ""}
                        >
                            Referral
                        </StyledItem>
                    </StyledMenuItem>
                </StyledLink>
                <StyledLink to="/swap">
                    <StyledMenuItem>
                        <SwapSvg className="svgFile" />
                        <StyledItem>Swap</StyledItem>
                    </StyledMenuItem>
                </StyledLink>
                <StyledLink to="/docs">
                    <StyledMenuItem>
                        <DocsSvg className="svgFile" />
                        <StyledItem>Docs</StyledItem>
                    </StyledMenuItem>
                </StyledLink>
            </StyledNav>
        </StyledMenuLink>
    );
};
