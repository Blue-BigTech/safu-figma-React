import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "./common";
import { Slidermenu } from "./slider";
import "./style.css";
export const Calculator = (props: any) => {
    const StyledCalculatorView = styled.div`
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
        flex-wrap: wrap;
        box-sizing: border-box;
    `;
    const StyledItem = styled.div`
        padding: 8px;
        box-sizing: border-box;
    `;
    const StyledCardTitle = styled(Text)`
        display: block;
        font-family: "Montserrat_Bold";
        font-weight: 700;
        font-size: 20px;
        color: #fff;
        margin-bottom: 4px;
    `;
    const StyledCardSubTitle = styled(Text)`
        display: block;
        font-family: "Montserrat_SemiBold";
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        color: #fff;
    `;
    const StyledCardMetrics = styled.div`
        display: flex;
        width: 100%;
        padding: 0;
        text-align: center;
        margin-top: 10px;
    `;
    const StyledContainer = styled.div`
        width: calc(100% + 16px);
        margin: -8px;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
    `;
    const StyledGrid = styled.div`
        padding: 8px;
        @media (min-width: 600px) {
            flex-grow: 0;
            max-width: 33.333333%;
            flex-basis: 33.333333%;
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
    `;
    const StyledCalculatorCard = styled.div`
        flex: 1 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-align: center;
    `;
    const StyledCardMetricTitle = styled(Text)`
        font-family: "Montserrat_Medium";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: hsla(0, 0%, 100%, 0.6);
        margin-bottom: 2px;
    `;
    const StyledCardMetricValue = styled(Text)`
        font-family: "Montserrat_Bold";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #fff;
    `;
    const StyledCardArea = styled.div``;
    const StyledCardActionArea = styled.div`
        width: 100%;
        margin-top: 25px;
    `;
    const STyledCardContainer = styled.div`
        width: calc(100% + 24px);
        margin: -12px;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
    `;
    const StyledCardGrid = styled.div`
        padding: 12px;
        @media (min-width: 600px) {
            flex-grow: 0;
            max-width: 50%;
            flex-basis: 50%;
        }
        flex-grow: 0;
        max-width: 100%;
        flex-basis: 100%;
        margin: 0;
        box-sizing: border-box;
    `;
    const StyledItemTitle = styled(Text)`
        font-family: Montserrat Medium;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        display: block;
        color: #fff;
        margin-bottom: 5px;
        margin-left: 10px;
    `;
    const StyledInputDetail = styled.div`
        width: 100%;
        background: hsla(0, 0%, 100%, 0.2);
        border: 1px solid hsla(0, 0%, 100%, 0.2);
        border-radius: 10px;
        outline: none;
        padding-right: 14px;
        position: relative;
        color: rgba(0, 0, 0, 0.87);
        cursor: text;
        display: inline-flex;
        font-size: 1rem;
        box-sizing: border-box;
        align-items: center;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        line-height: 1.1876em;
        letter-spacing: 0.00938em;
    `;
    const StyledInput = styled.input`
        &::focus {
            outline: 0;
        }
        font-family: "Montserrat_Medium";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: hsla(0, 0%, 100%, 0.6);
        padding: 14px 20px;
        font: inherit;
        width: 100%;
        border: 0;
        height: 1.1876em;
        margin: 0;
        display: block;
        min-width: 0;
        background: none;
        box-sizing: content-box;
        animation-name: mui-auto-fill-cancel;
        letter-spacing: inherit;
        animation-duration: 10ms;
        -webkit-tap-highlight-color: transparent;
    `;
    const StyledInputRoot = styled.div`
        margin-left: 8px;
        height: 0.01em;
        display: flex;
        max-height: 2em;
        align-items: center;
        white-space: nowarp;
    `;
    const StyledActionInputButton = styled.div`
        cursor: pointer;
    `;
    const StyledMax = styled(Text)`
        font-family: "Montserrat_SemiBold";
        font-weight: 600;
        font-size: 18px;
        color: #fff;
        margin: 0;
    `;
    const StyledFieldSet = styled.fieldset`
        padding-left: 8px;
        border-color: hsla(0, 0%, 100%, 0.2) !important;
        top: -5px;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
        padding: 0 8px;
        overflow: hidden;
        position: absolute;
        border-style: solid;
        border-width: 1px;
        border-radius: inherit;
        pointer-events: none;
    `;
    const StyledLegend = styled.legend`
        width: 0.01px;
        padding: 0;
        text-align: left;
        transition: width 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        line-height: 11px;
    `;
    const StyledUserData = styled.div`
        justify-content: center;
        padding: 0 5px;
        margin: 30px auto auto;
    `;
    const StyledDataRow = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 12px 0;
    `;
    const StyledDataName = styled(Text)`
        font-family: "Montserrat_Medium";
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        color: #fff;
    `;
    const StyledDataValue = styled(Text)`
        font-family: "Montserrat_Medium";
        font-size: 17px;
        line-height: 20px;
        color: #fff;
    `;
    return (
        <StyledCalculatorView className="calculator-container">
            <StyledCard>
                <StyledMenu>
                    <StyledItem>
                        <div>
                            <StyledCardTitle>Calculator</StyledCardTitle>
                            <StyledCardSubTitle>
                                Estimate your returns
                            </StyledCardSubTitle>
                        </div>
                    </StyledItem>
                    <StyledItem>
                        <StyledCardMetrics>
                            <StyledContainer>
                                <StyledGrid>
                                    <StyledCalculatorCard>
                                        <StyledCardMetricTitle>
                                            SURF Price
                                        </StyledCardMetricTitle>
                                        <StyledCardMetricValue>
                                            $200.33
                                        </StyledCardMetricValue>
                                    </StyledCalculatorCard>
                                </StyledGrid>
                                <StyledGrid>
                                    <StyledCalculatorCard>
                                        <StyledCardMetricTitle>
                                            Current APY
                                        </StyledCardMetricTitle>
                                        <StyledCardMetricValue>
                                            383,025.8%
                                        </StyledCardMetricValue>
                                    </StyledCalculatorCard>
                                </StyledGrid>
                                <StyledGrid>
                                    <StyledCalculatorCard>
                                        <StyledCardMetricTitle>
                                            Your SURF Balance
                                        </StyledCardMetricTitle>
                                        <StyledCardMetricValue>
                                            0 SURF
                                        </StyledCardMetricValue>
                                    </StyledCalculatorCard>
                                </StyledGrid>
                            </StyledContainer>
                        </StyledCardMetrics>
                    </StyledItem>
                    <StyledCardArea>
                        <div>
                            <StyledCardActionArea>
                                <STyledCardContainer>
                                    <StyledCardGrid>
                                        <div>
                                            <StyledItemTitle>
                                                SURF Amount
                                            </StyledItemTitle>
                                            <StyledInputDetail>
                                                <StyledInput
                                                    placeholder="Amount"
                                                    type="number"
                                                    value="0"
                                                />
                                                <StyledInputRoot>
                                                    <StyledActionInputButton>
                                                        <StyledMax>
                                                            Max
                                                        </StyledMax>
                                                    </StyledActionInputButton>
                                                </StyledInputRoot>
                                                {/* <StyledFieldSet aria-hidden="true">
                                                    <StyledLegend>
                                                        <span>
                                                            &ZeroWidthSpace;
                                                        </span>
                                                    </StyledLegend>
                                                </StyledFieldSet> */}
                                            </StyledInputDetail>
                                        </div>
                                    </StyledCardGrid>
                                    <StyledCardGrid>
                                        <div>
                                            <StyledItemTitle>
                                                APY (%)
                                            </StyledItemTitle>
                                            <StyledInputDetail>
                                                <StyledInput
                                                    placeholder="Amount"
                                                    type="number"
                                                    value="0"
                                                />
                                                <StyledInputRoot>
                                                    <StyledActionInputButton>
                                                        <StyledMax>
                                                            Current
                                                        </StyledMax>
                                                    </StyledActionInputButton>
                                                </StyledInputRoot>
                                                {/* <StyledFieldSet aria-hidden="true">
                                                    <StyledLegend>
                                                        <span>
                                                            &ZeroWidthSpace;
                                                        </span>
                                                    </StyledLegend>
                                                </StyledFieldSet> */}
                                            </StyledInputDetail>
                                        </div>
                                    </StyledCardGrid>
                                    <StyledCardGrid>
                                        <div>
                                            <StyledItemTitle>
                                                SURF price at purchase ($)
                                            </StyledItemTitle>
                                            <StyledInputDetail>
                                                <StyledInput
                                                    placeholder="Amount"
                                                    type="number"
                                                    value="0"
                                                />
                                                <StyledInputRoot>
                                                    <StyledActionInputButton>
                                                        <StyledMax>
                                                            Current
                                                        </StyledMax>
                                                    </StyledActionInputButton>
                                                </StyledInputRoot>
                                                {/* <StyledFieldSet aria-hidden="true">
                                                    <StyledLegend>
                                                        <span>
                                                            &ZeroWidthSpace;
                                                        </span>
                                                    </StyledLegend>
                                                </StyledFieldSet> */}
                                            </StyledInputDetail>
                                        </div>
                                    </StyledCardGrid>
                                    <StyledCardGrid>
                                        <div>
                                            <StyledItemTitle>
                                                Future SURF market price ($)
                                            </StyledItemTitle>
                                            <StyledInputDetail>
                                                <StyledInput
                                                    placeholder="Amount"
                                                    type="number"
                                                    value="0"
                                                />
                                                <StyledInputRoot>
                                                    <StyledActionInputButton>
                                                        <StyledMax>
                                                            Current
                                                        </StyledMax>
                                                    </StyledActionInputButton>
                                                </StyledInputRoot>
                                                {/* <StyledFieldSet aria-hidden="true">
                                                    <StyledLegend>
                                                        <span>
                                                            &ZeroWidthSpace;
                                                        </span>
                                                    </StyledLegend>
                                                </StyledFieldSet> */}
                                            </StyledInputDetail>
                                        </div>
                                    </StyledCardGrid>
                                </STyledCardContainer>
                            </StyledCardActionArea>
                            <Slidermenu />
                            <StyledUserData>
                                <StyledDataRow>
                                    <StyledDataName>
                                        Your initial investment
                                    </StyledDataName>
                                    <StyledDataValue>$0</StyledDataValue>
                                </StyledDataRow>
                                <StyledDataRow>
                                    <StyledDataName>
                                        Current wealth
                                    </StyledDataName>
                                    <StyledDataValue>$0</StyledDataValue>
                                </StyledDataRow>
                                <StyledDataRow>
                                    <StyledDataName>
                                        SURF rewards estimation
                                    </StyledDataName>
                                    <StyledDataValue>0 SURF</StyledDataValue>
                                </StyledDataRow>
                                <StyledDataRow>
                                    <StyledDataName>
                                        Potential return
                                    </StyledDataName>
                                    <StyledDataValue>$0</StyledDataValue>
                                </StyledDataRow>
                            </StyledUserData>
                        </div>
                    </StyledCardArea>
                </StyledMenu>
            </StyledCard>
        </StyledCalculatorView>
    );
};
