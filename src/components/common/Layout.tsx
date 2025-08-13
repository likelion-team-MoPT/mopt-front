import React from 'react';
import BottomTabBar from './BottomTabBar';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  showBottomTab?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className = '',
  showBottomTab = true,
}) => {
  return (
    <div className={`flex flex-col min-h-screen bg-app ${className}`}>
      <div className="flex-1">
        {children}
      </div>
      {showBottomTab && <BottomTabBar />}
    </div>
  );
};

export default Layout;
