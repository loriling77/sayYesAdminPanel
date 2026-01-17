import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { Link } from '@tanstack/react-router';

const ForgotPassword: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        setLoading(true);
        console.log('Forgot password:', values);

        message.success('Password reset link has been sent to your email');
        setLoading(false);
    };

    return (
        <div className="min-h-screen  flex items-center justify-center px-6">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
                <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
            </div>

            {/* Card */}
            <div className="relative w-full max-w-md bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-semibold text-gray-900">Forgot your password?</h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Enter your email and we will send you a reset link
                    </p>
                </div>

                {/* Form */}
                <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
                    <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your email' },
                            { type: 'email', message: 'Invalid email format' },
                        ]}
                    >
                        <Input size="large" placeholder="you@example.com" />
                    </Form.Item>

                    <Form.Item className="mt-6">
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            loading={loading}
                            block
                        >
                            Send reset link
                        </Button>
                    </Form.Item>
                </Form>

                {/* Footer */}
                <Row justify="space-between" className="mt-6 text-sm">
                    <Col>
                        <Link to="/login">
                            <a className="text-blue-600 hover:underline">Back to login</a>
                        </Link>
                    </Col>
                    <Col className="text-gray-500">
                        Need help? Contact admin
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ForgotPassword;