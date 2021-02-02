import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const SiteLayout = ({
    children,
    menu = c => null
}) => {
    return (
        <div className="site-container">
            <div>{menu}</div>
            <div>{children}</div>
        </div>
    );
};

const Menu = () => (
    <ErrorBoundary>
        <p style={{ color: "white" }}>TODO: Build menu</p>
    </ErrorBoundary>
);

const Callout = ({ children }) => (
    <ErrorBoundary>
        <div className="callout">{children}</div>
    </ErrorBoundary>
);

export default function Main() {
    return (
        <SiteLayout menu={<Menu />}>
            <Callout>Welcome to the site</Callout>
            <ErrorBoundary>
                <h1>TODO: Home page</h1>
                <p>complete the main contents for this home page</p>
            </ErrorBoundary>
        </SiteLayout>
    );
}