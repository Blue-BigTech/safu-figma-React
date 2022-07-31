import { HashRouter, Routes, Route, Outlet } from "react-router-dom";

import { Home } from "./home";
import { Dashboard } from "../components/dashboard";
import { Account } from "../components/account";
import { Calculator } from "../components/calculator";
import { Referral } from "../components/referral";
export const Links = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/referral" element={<Referral />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};
