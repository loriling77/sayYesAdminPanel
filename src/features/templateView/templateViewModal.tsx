import { Button, Form } from 'antd';
import TemplateView from '../templateView/templateView'

interface TemplateViewModalProps {
    openModal: boolean;

    handleOpenModal?: () => void;
    handleCloseModal?: () => void;
    template: string | null;
}

export default function TemplateViewModal({ openModal, handleCloseModal }: TemplateViewModalProps) {
    console.log("Modal open state:", openModal);
    if (!openModal) return null;


    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex-column items-center justify-center" >

            <div >
                <TemplateView />
            </div>

            <div className='flex gap-2 justify-center items-center mt-10'>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                </Form.Item>
            </div>


        </div>
    )
}
