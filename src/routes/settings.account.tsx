
import AccountSettings from '@/features/settings/settings'
import { ViewPort } from '@/features/viewPort/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/account')({
    component: RouteComponent,
})

function RouteComponent() {
    return <ViewPort >

        <AccountSettings></AccountSettings>

    </ViewPort>
}
