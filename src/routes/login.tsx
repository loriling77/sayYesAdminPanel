import LoginPage from '@/features/login/components/login-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
    component: Login,
})

function Login() {
    return <LoginPage></LoginPage>
}
