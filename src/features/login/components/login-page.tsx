
import LoginForm from './login-form'

export default function LoginPage() {
    return (
        <>
            <div className="flex flex-col items-center mt-50 min-h-screen bg-white w-full">

                <div className="text-center mb-20">
                    <div className="text-4xl font-bold text-gray-800">SayYes Admin Management Panel</div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md w-100 ">
                    <LoginForm />
                </div>
            </div>

        </>
    )
}
