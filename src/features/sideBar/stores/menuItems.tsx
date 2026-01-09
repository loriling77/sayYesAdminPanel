
import type { MenuProps } from 'antd';
import CategoryIcon from '../../sideBar/assets/categoryIcon.svg';
import DashBoardIcon from '../../sideBar/assets/dashBoardIcon.svg';
import TemplateIcon from '../../sideBar/assets/templateIcon.svg';
import UserIcon from '../../sideBar/assets/userIcon.svg';



type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'sub1',
        label: 'Dashboard',
        icon: <img src={DashBoardIcon} alt="Category Icon" style={{ width: 20, height: 20 }} />,
        // type: 'group',
        children:

            [
                { key: '1', label: 'Dashboard' },

            ],



    },
    {
        key: 'sub1',
        label: 'User',
        icon: <img src={UserIcon} alt="Category Icon" style={{ width: 25, height: 25 }} />,
        // type: 'group',
        children:

            [
                { key: '1', label: 'UserInfo' },

            ],



    },
    {
        key: 'sub2',
        label: 'Template',
        icon: <img src={TemplateIcon} alt="Category Icon" style={{ width: 20, height: 20 }} />,
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
        icon: <img src={CategoryIcon} alt="Category Icon" style={{ width: 20, height: 20 }} />,
        children: [
            { key: '9', label: 'Category Management' },
        ],
    },

];
export { items };