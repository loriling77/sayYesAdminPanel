/**
 * =============================================================================
 * STATISTICS CARDS COMPONENT
 * =============================================================================
 *
 * Displays three cards showing totals for users, templates, and categories.
 *
 * PROPS:
 * ------
 * - userCount, templateCount, categoryCount: The numbers to display
 * - usersLoading, templatesLoading, categoriesLoading: Show loading state
 *
 * ANT DESIGN COMPONENTS USED:
 * ---------------------------
 * - Card: A container with a white background and shadow
 * - Row/Col: Grid layout (like rows and columns in a spreadsheet)
 * - Statistic: Displays a number with a label
 *
 * RESPONSIVE DESIGN:
 * ------------------
 * The grid changes based on screen size:
 * - xs (extra small, phones): 1 card per row
 * - sm (small, tablets): 2 cards per row
 * - lg (large, desktops): 3 cards per row
 *
 * =============================================================================
 */

import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { UserOutlined, FileTextOutlined, FolderOutlined } from '@ant-design/icons';

interface StatisticsCardsProps {
  userCount: number;
  templateCount: number;
  categoryCount: number;
  usersLoading?: boolean;
  templatesLoading?: boolean;
  categoriesLoading?: boolean;
}

export const StatisticsCards: React.FC<StatisticsCardsProps> = ({
  userCount,
  templateCount,
  categoryCount,
  usersLoading,
  templatesLoading,
  categoriesLoading,
}) => {
  return (
    <Row gutter={[16, 16]} className="mb-8">
      {/* Users Card */}
      <Col xs={24} sm={12} lg={8}>
        <Card>
          <Statistic
            title="Total Users"
            value={userCount}
            prefix={<UserOutlined />}
            loading={usersLoading}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>

      {/* Templates Card */}
      <Col xs={24} sm={12} lg={8}>
        <Card>
          <Statistic
            title="Total Templates"
            value={templateCount}
            prefix={<FileTextOutlined />}
            loading={templatesLoading}
            valueStyle={{ color: '#1677ff' }}
          />
        </Card>
      </Col>

      {/* Categories Card */}
      <Col xs={24} sm={12} lg={8}>
        <Card>
          <Statistic
            title="Total Categories"
            value={categoryCount}
            prefix={<FolderOutlined />}
            loading={categoriesLoading}
            valueStyle={{ color: '#cf1322' }}
          />
        </Card>
      </Col>
    </Row>
  );
};
