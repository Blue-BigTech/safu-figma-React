import styled from "styled-components";
import { useState, useEffect } from "react";
import { Linked, Image, Text } from "./common";
import { Logo } from "./Logo";
import { MenuLink } from "./menuLink";
import { Social } from "./social";

export const Sidebar = (props: any) => {
    const StyledSidebar = styled.div`
        @media (min-width: 960px) {
            width: 280px;
            flex-shrink: 0;
        }
    `;
    const StyledSidebarRoot = styled.div`
        flex: 0 0 auto;
    `;
    const StyledSidebarTool = styled.div`
        @media (max-width: 1080px) {
            transform: translateX(-280px);
            visibility: hidden;
        }
        transform: none;
        visibility: visible;
        @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
            background: transparent;
            -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
        }
        z-index: 7;
        border-right: 1px solid rgba(0, 0, 0, 0.12);
        left: 0;
        right: auto;
        top: 0;
        flex: 1 0 auto;
        height: 100%;
        display: flex;
        outline: 0;
        position: fixed;
        overflow-y: auto;
        flex-direction: column;
        box-shadow: none;
        color: rgba(0, 0, 0, 0.87);
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `;
    const StyledSidebarMenu = styled.div`
        height: 100vh;
        min-width: 280px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `;
    return (
        <StyledSidebar>
            <StyledSidebarRoot>
                <StyledSidebarTool
                    style={
                        props.sidebar === true
                            ? {
                                  transform: "none",
                                  transition:
                                      "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
                                  visibility: "visible",
                              }
                            : {
                                  transform: "translateX(-280px)",
                                  visibility: "hidden",
                              }
                    }
                >
                    <StyledSidebarMenu>
                        <div>
                            <Logo />
                            <MenuLink tabIndex={props.tabIndex} />
                            <Social />
                        </div>
                    </StyledSidebarMenu>
                </StyledSidebarTool>
            </StyledSidebarRoot>
        </StyledSidebar>
    );
};
