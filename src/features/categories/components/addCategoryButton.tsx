import React from 'react';
import { Button, ConfigProvider, Flex } from 'antd';

interface AddCategoryButtonProps {
    handleAddCategory?: () => void;
}

const App: React.FC<AddCategoryButtonProps> = ({ handleAddCategory }) => (

    <Flex className='flex items-center justify-center'>
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        defaultBgDisabled: 'rgba(0,0,0,0.5)',
                        dashedBgDisabled: 'rgba(0,0,0,0.8)',
                    },
                },
            }}
        >
            <Button type="primary" className="fixed bottom-8 right-8 shadow-lg" onClick={handleAddCategory}>
                Add New Category
            </Button>

        </ConfigProvider>
    </Flex>


);

export default App;