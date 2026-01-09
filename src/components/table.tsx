import React from 'react';
import Search from '@/components/search';
import { Table } from 'antd';
import { columns, type DataType } from '@/features/viewPort/stores/userStateTable';



const App: React.FC = () => {
    return (
        <>
            <div className="w-full">
                <div className='ml-10 mt-10 w-1/2 mb-5'>
                    <Search></Search>
                </div>
                <div className='ml-10'>
                    <Table<DataType> columns={columns} />;
                </div>

            </div>

        </>


    )
}

export default App;