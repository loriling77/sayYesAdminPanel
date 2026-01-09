import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface PageHeaderProps {
  title: string;
  onCreateClick?: () => void;
  createButtonText?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  onCreateClick,
  createButtonText = 'Create',
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      {onCreateClick && (
        <Button type="primary" icon={<PlusOutlined />} onClick={onCreateClick}>
          {createButtonText}
        </Button>
      )}
    </div>
  );
};
