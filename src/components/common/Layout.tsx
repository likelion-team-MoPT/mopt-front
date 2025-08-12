import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`flex flex-col min-h-screen bg-app ${className}`}>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;
