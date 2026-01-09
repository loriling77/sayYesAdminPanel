import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { items } from '../stores/menuItems';



const App: React.FC = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <>
            <div className='text-[28px] font-bold mb-5 flex-column'>
                <div className='pl-10 pt-5'>SayYes</div>
                <Menu
                    onClick={onClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />

            </div>

        </>

    );
};

export default App;