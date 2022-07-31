import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { BackgroundImage } from "../components/images";
import { TopMenu } from "../components/top-menu";
import { Sidebar } from "../components/sidebar";
import { Dashboard } from "../components/dashboard";
import { Account } from "../components/account";
import { Calculator } from "../components/calculator";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
export const Home = () => {
    const [sidebar, setSidebar] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const [tab, setTab] = useState(1);
    useEffect(() => {
        document.title = "SURF";
    }, []);
    useEffect(() => {
        if (location.pathname.includes("/dashboard")) {
            setTab(1);
        } else if (location.pathname.includes("/account")) {
            setTab(2);
        } else if (location.pathname.includes("/calculator")) {
            setTab(3);
        } else if (location.pathname.includes("/referral")) {
            setTab(4);
        }
    }, [location]);
    const StyledTopSection = styled.div`
        background-image: url(${BackgroundImage});
        background-blend-mode: multiply;
        background-repeat: no-repeat;

        background-position: center;
        background-size: cover;
        position: relative;
        height: 100vh;
        width: 100vw;
        padding: 10px 10px;
        @media (max-width: 601px) {
            height: auto;
        }
    `;
    const StyledMain = styled.div`
        padding: 8px;
        overflow: auto;
        transition: margin 969ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
        margin-left: 280px;
        @media (max-width: 1080px) {
            margin-left: 0 !important;
        }
    `;
    const StyledCubeTop = styled.div`
        opacity: 0.6;
        position: absolute;
        top: -120px;
    `;
    const StyledCubeBottom = styled.div`
        opacity: 0.6;
        position: absolute;
        bottom: -256px;
        right: -140px;
    `;
    const sidebarChange = () => {
        setSidebar(!sidebar);
    };
    return (
        <div>
            <StyledTopSection
                style={
                    sidebar === true
                        ? {
                              backgroundColor: "rgba(0, 0, 0, 0.5)",
                          }
                        : {}
                }
                id="home"
            >
                <TopMenu sidebar={sidebar} setSidebar={sidebarChange} />
                <Sidebar sidebar={sidebar} tabIndex={tab} />
                <StyledMain>
                    <StyledCubeTop></StyledCubeTop>
                    <StyledCubeBottom></StyledCubeBottom>
                    <Outlet />
                </StyledMain>
            </StyledTopSection>
        </div>
    );
};
