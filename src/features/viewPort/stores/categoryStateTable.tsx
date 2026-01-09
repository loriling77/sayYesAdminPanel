import { Space } from 'antd';
import type { TableProps } from 'antd';

export interface DataType {
    key: string;
    categoryName: string;
    icon: string;

}

export const columns: TableProps<DataType>['columns'] = [
    {
        title: 'CategoryName',
        dataIndex: 'categoryName',
        key: 'categoryName',

    },
    {
        title: 'Icon',
        dataIndex: 'icon',
        key: 'icon',
    },


    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
