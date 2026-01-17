import LoginForm from '@/features/login/components/login-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
    component: Login,
})

function Login() {
    return <LoginForm></LoginForm>
}
