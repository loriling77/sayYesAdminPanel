# Routes Folder

## What is this folder?

This folder contains **all the pages** of the application. Each file here becomes a page that users can visit.

## How TanStack Router Works

TanStack Router uses "file-based routing". This means:

**The file name = the URL path**

| File Name | URL |
|-----------|-----|
| `index.tsx` | `/` (home page) |
| `dashboard.tsx` | `/dashboard` |
| `user.tsx` | `/user` |
| `category.tsx` | `/category` |
| `template.invitation.tsx` | `/template/invitation` |
| `template.mv.tsx` | `/template/mv` |
| `template.poster.tsx` | `/template/poster` |

### Special Files

- `__root.tsx` - The "layout" that wraps ALL pages. Contains the sidebar menu.
- `index.tsx` - The home page (`/`). We redirect to `/dashboard`.

### Nested Routes (Using Dots)

Files with dots create nested URLs:

```
template.invitation.tsx  →  /template/invitation
template.mv.tsx          →  /template/mv
template.poster.tsx      →  /template/poster
```

## How a Route File is Structured

Every route file has this basic structure:

```typescript
import { createFileRoute } from '@tanstack/react-router';

// 1. Create the route
export const Route = createFileRoute('/path')({
  component: PageComponent,
});

// 2. Define the page component
function PageComponent() {
  return (
    <div>
      Your page content here
    </div>
  );
}
```

## The Root Layout (`__root.tsx`)

The root layout wraps every page. It contains:

1. **The sidebar menu** (left side)
2. **The Outlet** (where page content appears)

```
+------------------+------------------------+
|                  |                        |
|     Sidebar      |      Page Content      |
|      Menu        |       (Outlet)         |
|                  |                        |
+------------------+------------------------+
```

When you navigate to `/dashboard`:
- The root layout stays the same
- The Dashboard page renders inside the `<Outlet />`

## Auto-Generated Route Tree

TanStack Router automatically creates a file called `routeTree.gen.ts`.

**NEVER EDIT THIS FILE!**

It's generated automatically whenever you:
- Add a new route file
- Delete a route file
- Rename a route file

## Adding a New Page

1. Create a new file in this folder:
   ```
   src/routes/products.tsx
   ```

2. Add the basic structure:
   ```typescript
   import { createFileRoute } from '@tanstack/react-router';
   import { ViewPort } from '@/features/viewPort/components';

   export const Route = createFileRoute('/products')({
     component: Products,
   });

   function Products() {
     return (
       <ViewPort>
         <h1>Products Page</h1>
       </ViewPort>
     );
   }
   ```

3. Add a menu item in `src/features/sideBar/stores/menuItems.tsx`

4. Start the dev server - the route tree updates automatically!

## Common Patterns

### Page with Data Fetching

```typescript
import { createFileRoute } from '@tanstack/react-router';
import { useUsers } from '@/features/users/api';
import { ViewPort } from '@/features/viewPort/components';
import { PageHeader, ErrorMessage } from '@/components';

export const Route = createFileRoute('/user')({
  component: User,
});

function User() {
  // Fetch data using React Query hook
  const { data: users, isLoading, error } = useUsers();

  // Handle error state
  if (error) {
    return (
      <ViewPort>
        <ErrorMessage message={error.message} />
      </ViewPort>
    );
  }

  // Render the page
  return (
    <ViewPort>
      <PageHeader title="Users" />
      {isLoading ? <p>Loading...</p> : <UserTable users={users} />}
    </ViewPort>
  );
}
```

### Page with Navigation

```typescript
import { useNavigate } from '@tanstack/react-router';

function MyPage() {
  const navigate = useNavigate();

  const goToUsers = () => {
    navigate({ to: '/user' });
  };

  return (
    <button onClick={goToUsers}>Go to Users</button>
  );
}
```
