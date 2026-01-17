/**
 * =============================================================================
 * PAGE HEADER COMPONENT
 * =============================================================================
 *
 * A reusable header for pages. Shows a title and optionally a "Create" button.
 *
 * USAGE:
 * ------
 *   // Just a title
 *   <PageHeader title="Users" />
 *
 *   // With a create button
 *   <PageHeader
 *     title="Users"
 *     createButtonText="Add User"
 *     onCreateClick={() => openModal()}
 *   />
 *
 * =============================================================================
 */

import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "@tanstack/react-router";

interface PageHeaderProps {
    /** The page title to display */
    title: string;

    /** Function to call when Create button is clicked (optional) */
    onCreateClick?: () => void;

    /** Text for the Create button (default: "Create") */
    createButtonText?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    onCreateClick,
    createButtonText = "Create",
}) => {
    return (
        <div className="flex justify-between items-center mb-6 w-full">
            {/* Page title */}
            <div className="flex justify-between w-full">
                <h1 className="text-2xl font-bold">{title}</h1>
                <Link to="/settings/account" className="ml-4">
                    <div className="w-10 h-10 border border-gray-300 rounded-full">
                        <img src="" alt="Avatar" />
                    </div>
                </Link>
            </div>


            {/* Create button - only shown if onCreateClick is provided */}
            {onCreateClick && (
                <Button type="primary" icon={<PlusOutlined />} onClick={onCreateClick}>
                    {createButtonText}
                </Button>
            )}
        </div>
    );
};
