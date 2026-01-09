/**
 * =============================================================================
 * ERROR MESSAGE COMPONENT
 * =============================================================================
 *
 * Displays an error message in a consistent style (red text).
 *
 * USAGE:
 * ------
 *   const { error } = useUsers();
 *
 *   if (error) {
 *     return <ErrorMessage message={error.message} />;
 *   }
 *
 * =============================================================================
 */

import React from "react";

interface ErrorMessageProps {
  /** The error message to display */
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className="text-red-500">Error: {message}</div>;
};
