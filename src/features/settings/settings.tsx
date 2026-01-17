import React, { useState } from 'react';
import { Tabs, Form, Input, Button, Upload, Select, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Option } = Select;

const SettingsPage: React.FC = () => {
    const [personalForm] = Form.useForm();
    const [securityForm] = Form.useForm();
    const [preferencesForm] = Form.useForm();

    const [loadingPersonal, setLoadingPersonal] = useState(false);
    const [loadingSecurity, setLoadingSecurity] = useState(false);
    const [loadingPreferences, setLoadingPreferences] = useState(false);

    // 个人信息提交
    const onPersonalFinish = async (values: any) => {
        setLoadingPersonal(true);
        console.log('Personal Info submitted:', values);
        await new Promise((r) => setTimeout(r, 1200));
        message.success('Personal information saved.');
        setLoadingPersonal(false);
    };

    // 安全设置提交
    const onSecurityFinish = async (values: any) => {
        setLoadingSecurity(true);
        console.log('Security submitted:', values);
        await new Promise((r) => setTimeout(r, 1200));
        message.success('Password updated successfully.');
        setLoadingSecurity(false);
    };

    // 偏好设置提交
    const onPreferencesFinish = async (values: any) => {
        setLoadingPreferences(true);
        console.log('Preferences submitted:', values);
        await new Promise((r) => setTimeout(r, 1200));
        message.success('Preferences saved.');
        setLoadingPreferences(false);
    };

    return (
        <div className="min-h-screen  py-12 px-6 flex justify-center">
            <div className="w-full  bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-semibold text-gray-900 mb-6">Settings Management</h1>
                <Tabs defaultActiveKey="1" size="large" type="card">
                    {/* 个人信息 */}
                    <TabPane tab="Personal Info" key="1">
                        <Form layout="vertical" form={personalForm} onFinish={onPersonalFinish}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input placeholder="Username" size="large" />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    { required: true, message: 'Please input your email!' },
                                    { type: 'email', message: 'Invalid email format' },
                                ]}
                            >
                                <Input placeholder="Email" size="large" />
                            </Form.Item>



                            <Form.Item label="Avatar">
                                <Upload
                                    name="avatar"
                                    listType="picture"
                                    maxCount={1}
                                    beforeUpload={() => false}
                                >
                                    <Button icon={<UploadOutlined />}>Upload Avatar</Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item className="mt-6">
                                <Button type="primary" htmlType="submit" size="large" block loading={loadingPersonal}>
                                    Save Changes
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>

                    {/* 安全设置 */}
                    <TabPane tab="Security" key="2">
                        <Form layout="vertical" form={securityForm} onFinish={onSecurityFinish}>
                            <Form.Item
                                label="Current Password"
                                name="currentPassword"
                                rules={[{ required: true, message: 'Please input your current password!' }]}
                            >
                                <Input.Password placeholder="••••••••" size="large" />
                            </Form.Item>

                            <Form.Item
                                label="New Password"
                                name="newPassword"
                                rules={[{ required: true, message: 'Please input your new password!' }]}
                            >
                                <Input.Password placeholder="••••••••" size="large" />
                            </Form.Item>

                            <Form.Item
                                label="Confirm New Password"
                                name="confirmPassword"
                                dependencies={['newPassword']}
                                rules={[
                                    { required: true, message: 'Please confirm your new password!' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('newPassword') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Passwords do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder="••••••••" size="large" />
                            </Form.Item>

                            <Form.Item className="mt-6">
                                <Button type="primary" htmlType="submit" size="large" block loading={loadingSecurity}>
                                    Update Password
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>

                    {/* 偏好设置 */}
                    <TabPane tab="Preferences" key="3">
                        <Form layout="vertical" form={preferencesForm} onFinish={onPreferencesFinish}>
                            <Form.Item label="Theme" name="theme">
                                <Select size="large">
                                    <Option value="light">Light</Option>
                                    <Option value="dark">Dark</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Language" name="language">
                                <Select size="large">
                                    <Option value="en">English</Option>
                                    <Option value="zh">中文</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item className="mt-6">
                                <Button type="primary" htmlType="submit" size="large" block loading={loadingPreferences}>
                                    Save Preferences
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};

export default SettingsPage;
