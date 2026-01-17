import ForgotPasswordForm from '@/features/login/components/forgot-password'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/forgotPassword')({
    component: RouteComponent,
})

function RouteComponent() {
    return <ForgotPasswordForm></ForgotPasswordForm>
}
