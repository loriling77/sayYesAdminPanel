import React from 'react';

interface ViewPortProps {
  children: React.ReactNode;
}

export const ViewPort: React.FC<ViewPortProps> = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-auto bg-gray-50">
      <div className="p-8">
        {children}
      </div>
    </div>
  );
};
