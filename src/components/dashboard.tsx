import styled from "styled-components";
import { Header } from "./dashboard/header";
import { DashboardBody } from "./dashboard/dashboardBody";
export const Dashboard = (props: any) => {
    const StyledDashboardView = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        width: 89%;
        max-width: 930px;
        margin: 1rem auto auto;
    `;
    const StyledInfoWrap = styled.div`
        transform: none;
        transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `;
    return (
        <StyledDashboardView>
            <div>
                <StyledInfoWrap>
                    <Header />
                    <DashboardBody />
                </StyledInfoWrap>
            </div>
        </StyledDashboardView>
    );
};
