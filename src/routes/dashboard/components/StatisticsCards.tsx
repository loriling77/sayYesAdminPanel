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
