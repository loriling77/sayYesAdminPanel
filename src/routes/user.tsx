import { createFileRoute } from "@tanstack/react-router";
import Search from "@/components/search";
import { PageHeader, ErrorMessage } from "@/components";
import { useUsers, useDeleteUser } from "@/features/users/api";
import { UserTable } from "@/features/users/components";
import { ViewPort } from "@/features/viewPort/components";

export const Route = createFileRoute("/user")({
  component: User,
});

function User() {
  const { data: users, isLoading, error } = useUsers();
  const deleteUser = useDeleteUser();

  if (error) {
    return (
      <ViewPort>
        <ErrorMessage message={error.message} />
      </ViewPort>
    );
  }

  return (
    <ViewPort>
      <PageHeader title="User Information" createButtonText="Create User" />
      <div className="mb-5">
        <Search />
      </div>
      <UserTable
        users={users}
        loading={isLoading}
        onDelete={(id) => deleteUser.mutate(id)}
        deleteLoading={deleteUser.isPending}
      />
    </ViewPort>
  );
}
