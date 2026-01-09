
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'sub1',
        label: 'Dashboard',
        icon: <MailOutlined />,
        // type: 'group',
        children:

            [
                { key: '1', label: 'Dashboard' },

            ],



    },
    {
        key: 'sub1',
        label: 'User',
        icon: <MailOutlined />,
        // type: 'group',
        children:

            [
                { key: '1', label: 'UserInfo' },

            ],



    },
    {
        key: 'sub2',
        label: 'Template',
        icon: <AppstoreOutlined />,
        children: [
            { key: '5', label: 'Invitation' },
            { key: '6', label: 'MV' },
            { key: '7', label: 'Poster' },

        ],
    },
    {
        type: 'divider',
    },
    {
        key: 'sub4',
        label: 'Category',
        icon: <SettingOutlined />,
        children: [
            { key: '9', label: 'Category Management' },

        ],
    },

];
export { items };