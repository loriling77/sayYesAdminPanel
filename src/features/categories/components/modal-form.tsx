import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import ModalUpload from '../components/modal-upload'
import type { CreateCategoryRequest } from '@/types/category.types';

type FieldType = {
    categoryname?: string;
    categoryicon?: string;


};

interface ModalFormProps {
    openModal: boolean;
    handleClose: () => void;
    editingCategory?: {
        id: string;
        categoryName: string;
        categoryicon: string;
    } | null;
    onClickCreate: (data: CreateCategoryRequest) => void;
}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const App: React.FC<ModalFormProps> = ({ handleClose, onClickCreate }) => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <Form
            name="basic"
            layout="vertical"
            style={{ width: "600px", border: '1px solid #f0f0f0', padding: '20px', borderRadius: '8px', backgroundColor: "white" }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Category Name"
                name="categoryname"
                rules={[{ required: true, message: 'Please input category name!' }]}

            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Category Icon"
                name="categoryicon"
                rules={[{ required: true, message: 'Please upload category icon!' }]}
            >
                <ModalUpload onClickCreate={function (data: CreateCategoryRequest): void {
                    throw new Error('Function not implemented.');
                }} />
            </Form.Item>


            <div className='flex gap-2 justify-center items-center mt-10'>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Form.Item>
            </div>

        </Form>
    </div>

);

export default App;