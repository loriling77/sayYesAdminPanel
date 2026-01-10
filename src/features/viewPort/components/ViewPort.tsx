/**
 * =============================================================================
 * VIEWPORT COMPONENT
 * =============================================================================
 *
 * A wrapper component for page content. Provides consistent layout and styling.
 *
 * WHAT IT DOES:
 * - Adds padding around page content
 * - Sets a light gray background
 * - Makes the content area scrollable if content is too tall
 * - Takes up the full available width
 *
 * =============================================================================
 */

import React from "react";

interface ViewPortProps {
  /** The page content to display inside the viewport */
  children: React.ReactNode;
}

export const ViewPort: React.FC<ViewPortProps> = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-auto bg-gray-50">
      <div className="p-8">{children}</div>
    </div>
  );
};
