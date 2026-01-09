import { Space } from 'antd';
import type { TableProps } from 'antd';
import type { List } from 'postcss/lib/list';

export interface DataType {
    key: string;
    thumbNailImageUrl: string;
    musicUrl: string;
    sections: List;


}

export const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',

    },
    {
        title: 'ThumbNailImageUrl',
        dataIndex: 'thumbNailImageUrl',
        key: 'thumbNailImageUrl',
    },
    {
        title: 'MusicUrl',
        dataIndex: 'musicUrl',
        key: 'musicUrl',
    },
    {
        title: 'Sections',
        dataIndex: 'sections',
        key: 'sections',
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
