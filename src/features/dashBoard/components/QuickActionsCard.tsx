import React from 'react';
import { Card, Row, Col } from 'antd';
import { Link, Navigate } from '@tanstack/react-router';

export const QuickActionsCard: React.FC = () => {
    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} lg={12}>
                <Card title="Recent Activity" className="h-full">
                    <p className="text-gray-500">No recent activity to display</p>
                </Card>
            </Col>

            <Col xs={24} lg={12}>
                <Card title="Quick Actions" className="h-full">
                    <div className="space-y-2">
                        <p className="text-blue-500 cursor-pointer hover:underline">
                            Create New Template
                        </p>
                        <Link to="/user">
                            <p className="text-blue-500 cursor-pointer hover:underline">
                                Manage Users
                            </p>
                        </Link>
                        <Link to="/category">
                            <p className="text-blue-500 cursor-pointer hover:underline">
                                Manage Categories
                            </p>
                        </Link>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};
