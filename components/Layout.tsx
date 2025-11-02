import React from "react";
import AppHeader from "./AppHeader";

type LayoutProps = {
  children: React.ReactNode;
  userName?: string;
  notificationsCount?: number;
  showHeader?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  userName,
  notificationsCount = 0,
  showHeader = true,
}) => {
  return (
    <div className="app-layout">
      {showHeader && (
        <AppHeader 
          userName={userName} 
          notificationsCount={notificationsCount}
        />
      )}
      <main className="app-main">
        {children}
      </main>
    </div>
  );
};

export default Layout;
