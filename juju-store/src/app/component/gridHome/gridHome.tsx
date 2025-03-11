import React from "react";

interface GridHomeProps {
    children: React.ReactNode;
}

export const GridHome: React.FC<GridHomeProps> = ({ children }) => {
    return (
        <div className="grid-container">
            {children}
        </div>
    );
};
