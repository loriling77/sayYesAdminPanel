import React from 'react';
import { Card, Row, Col } from 'antd';

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
                        <p className="text-blue-500 cursor-pointer hover:underline">
                            Manage Users
                        </p>
                        <p className="text-blue-500 cursor-pointer hover:underline">
                            Manage Categories
                        </p>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};
