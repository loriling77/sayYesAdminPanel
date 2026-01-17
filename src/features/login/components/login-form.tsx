import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input, Alert } from "antd";
import { Link, useNavigate } from "@tanstack/react-router";
import type { LoginUserRequest } from "@/types";
import { useLogin } from "@/features/login/api/use-login";

const LoginForm: React.FC = () => {
    const { mutateAsync, isPending } = useLogin();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string>("");

    const onFinish = async (values: any) => {
        try {
            setErrorMessage("");
            const req: LoginUserRequest = {
                username: values.username,
                password: values.password,
            };

            await mutateAsync(req);



            navigate({ to: "/dashboard" });

        } catch (error: any) {
            console.error("Login failed:", error);
            const message = error?.message || "Login failed. Please try again.";
            setErrorMessage(message);
        }
    };

    return (
        <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-gray-100">
            {/* Left Brand Panel */}
            <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-700 px-16 text-white">
                <h1 className="text-4xl font-bold mb-6">SayYes Admin Platform</h1>
                <p className="text-lg opacity-90 leading-relaxed max-w-md">
                    Secure enterprise management system for internal operations, analytics, and administration.
                </p>
            </div>

            {/* Right Login Panel */}
            <div className="flex items-center justify-center px-6">
                <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-semibold text-gray-900">Log in</h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Welcome back, please sign in to your account
                        </p>
                    </div>

                    <Form
                        name="login"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        layout="vertical"
                    >
                        {errorMessage && (
                            <Alert
                                message={errorMessage}
                                type="error"
                                showIcon
                                closable
                                onClose={() => setErrorMessage("")}
                                className="mb-4"
                            />
                        )}

                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: "Please input your Username!" }]}
                        >
                            <Input
                                size="large"
                                prefix={<UserOutlined />}
                                placeholder="Username"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: "Please input your Password!" }]}
                        >
                            <Input.Password
                                size="large"
                                prefix={<LockOutlined />}
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Flex justify="space-between" align="center">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox className="text-sm text-gray-600">Remember me</Checkbox>
                                </Form.Item>

                                <Link to="/forgotPassword">
                                    <span className="text-sm text-blue-600 hover:underline">
                                        Forgot password
                                    </span>
                                </Link>
                            </Flex>
                        </Form.Item>

                        <Form.Item className="mt-6">
                            <Button
                                block
                                type="primary"
                                htmlType="submit"
                                size="large"
                                loading={isPending}
                            >
                                Log in
                            </Button>
                        </Form.Item>


                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
