/**
 * =============================================================================
 * QUICK ACTIONS CARD COMPONENT
 * =============================================================================
 *
 * Displays quick action links and recent activity section.
 *
 * FUTURE IMPROVEMENTS:
 * --------------------
 * - Connect quick actions to actual navigation or modals
 * - Fetch and display real recent activity from the API
 * - Add icons to quick action links
 *
 * =============================================================================
 */

import React from 'react';
import { Card, Row, Col } from 'antd';

export const QuickActionsCard: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      {/* Recent Activity - left side */}
      <Col xs={24} lg={12}>
        <Card title="Recent Activity" className="h-full">
          <p className="text-gray-500">No recent activity to display</p>
        </Card>
      </Col>

      {/* Quick Actions - right side */}
      <Col xs={24} lg={12}>
        <Card title="Quick Actions" className="h-full">
          <div className="space-y-2">
            <p className="text-blue-500 cursor-pointer hover:underline">
              Create New Template
            </p>
            <p className="text-blue-500 cursor-pointer hover:underline">
              Add New User
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
