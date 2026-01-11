import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Upload, Button, message } from "antd";
import type { RcFile } from "antd/es/upload";
import type { CreateCategoryRequest } from "@/types";

interface UploadIconProps {
    onClickCreate: (data: CreateCategoryRequest) => void;
}

const UploadIcon: React.FC<UploadIconProps> = ({ onClickCreate }) => {
    const [base64Image, setBase64Image] = useState<string | null>(null);

    // Convert file to Base64
    const getBase64 = (file: RcFile): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (err) => reject(err);
        });

    // Handle file selection
    const handleBeforeUpload = async (file: RcFile) => {
        try {
            const base64 = await getBase64(file);
            setBase64Image(base64);
            message.success(`${file.name} loaded successfully`);
        } catch {
            message.error("Failed to read file");
        }
        return false; // prevent default upload
    };

    // Handle button click to create category
    const handleClickCreate = () => {
        if (!base64Image) {
            return message.error("No image selected");
        }

        const data: CreateCategoryRequest = {
            categoryName: "New Category", // replace with your form input value
            icon: base64Image,
        };

        onClickCreate(data);
        setBase64Image(null); // optionally reset
    };

    return (
        <div className="flex flex-col gap-2">
            <Upload
                accept="image/*"
                beforeUpload={handleBeforeUpload}
                showUploadList={false} // hide default upload list
            >
                <Button icon={<UploadOutlined />}>Select Image</Button>
            </Upload>

            {base64Image && (
                <img
                    src={base64Image}
                    alt="preview"
                    className="w-32 h-32 object-cover border mt-2"
                />
            )}

            <Button
                type="primary"
                onClick={handleClickCreate}
                disabled={!base64Image}
            >
                Click to Upload
            </Button>
        </div>
    );
};

export default UploadIcon;
