# SayYes Admin Panel

A modern admin panel built with React, TanStack Router, and TanStack Query.

## Table of Contents

1. [What is this project?](#what-is-this-project)
2. [Key Technologies Explained](#key-technologies-explained)
3. [Project Structure](#project-structure)
4. [How to Run](#how-to-run)
5. [How Data Flows in This App](#how-data-flows-in-this-app)
6. [Adding New Features](#adding-new-features)

---

## What is this project?

This is an **admin panel** - a web application that helps manage data for the SayYes platform. 
It allows administrators to:

- View and manage **users**
- View and manage **templates** (invitations, MVs, posters)
- View and manage **categories**

The app connects to a backend API (server) running at `http://localhost:8080`.

---

## Key Technologies Explained

### React
React is a JavaScript library for building user interfaces. Instead of writing HTML directly,
we write **components** - small, reusable pieces of UI. For example, a "Button" component
can be used anywhere in the app.

### TypeScript
TypeScript is JavaScript with **types**. Types help us catch errors before running the code.
For example, if a function expects a number but we give it text, TypeScript will warn us.

```typescript
// Example: TypeScript tells us what shape our data should have
interface User {
  id: string;
  name: string;
  email: string;
}
```

### TanStack Router (Navigation)
TanStack Router handles **navigation** - moving between different pages in the app.

**How it works:**
- Each page is a "route" (example: `/users`, `/dashboard`)
- When you click a menu item, the router changes the URL and shows the right page
- The router is "file-based" - each file in `src/routes/` becomes a page automatically

**Simple explanation:**
Think of routes like chapters in a book. The router is like the table of contents - 
it knows which chapter (page) to show based on where you want to go.

### TanStack Query (Data Fetching)
TanStack Query handles **getting data from the server** and **keeping it up-to-date**.

**Why do we need it?**
Without TanStack Query, we would need to:
1. Write code to fetch data
2. Handle loading states ("Loading...")
3. Handle errors ("Something went wrong")
4. Remember the data so we don't fetch it again unnecessarily
5. Update the data when it changes

TanStack Query does ALL of this automatically!

**Key concepts:**

1. **Query** = Getting data (reading)
   ```typescript
   // This fetches all users from the server
   const { data, isLoading, error } = useUsers();
   ```

2. **Mutation** = Changing data (creating, updating, deleting)
   ```typescript
   // This deletes a user
   const deleteUser = useDeleteUser();
   deleteUser.mutate(userId);
   ```

3. **Query Keys** = Names for cached data
   ```typescript
   // Query keys help TanStack Query know which data to update
   queryKey: ['users', 'list']
   ```

4. **Cache Invalidation** = Telling TanStack Query to fetch fresh data
   ```typescript
   // After deleting a user, fetch the list again
   queryClient.invalidateQueries({ queryKey: ['users'] });
   ```

### Ant Design (UI Components)
Ant Design provides pre-built UI components like buttons, tables, and menus.
Instead of building everything from scratch, we use these ready-made components.

---

## Project Structure

```
src/
├── app/              # App setup (providers, router configuration)
├── components/       # Shared UI components (used across many pages)
├── features/         # Feature-specific code (users, templates, categories)
├── lib/              # Utility code (API client, helper functions)
├── routes/           # Pages of the application
└── types/            # TypeScript type definitions
```

Each folder has its own README or index.ts file explaining what it contains.

---

## How to Run

1. Make sure your backend is running at `http://localhost:8080`

2. Start the development server:
   ```bash
   deno task dev
   ```

3. Open your browser to `http://localhost:5173`

---

## How Data Flows in This App

Here's what happens when you open the Users page:

```
1. You click "User" in the menu
         ↓
2. TanStack Router changes URL to "/user"
         ↓
3. Router renders the User page component (src/routes/user.tsx)
         ↓
4. User page calls useUsers() hook
         ↓
5. TanStack Query checks: "Do I have this data cached?"
         ↓
   If NO: Fetch from server → Show loading → Display data
   If YES: Show cached data immediately → Fetch fresh data in background
         ↓
6. Data is displayed in the UserTable component
```

---

## Adding New Features

To add a new feature (example: "Products"), follow these steps:

### Step 1: Create Types
```
src/types/product.types.ts
```

### Step 2: Create Feature Folder
```
src/features/products/
├── api/
│   ├── product-service.ts    # API calls
│   ├── use-products.ts       # React Query hooks
│   └── index.ts
└── components/
    ├── ProductTable.tsx      # Table component
    ├── product-columns.tsx   # Table column definitions
    └── index.ts
```

### Step 3: Create Route
```
src/routes/products.tsx
```

### Step 4: Add to Menu
Update `src/features/sideBar/stores/menuItems.tsx`

---

## Need Help?

- Each folder has documentation in its `index.ts` file
- Read the comments in the code - they explain what each part does
- Check the TanStack Query docs: https://tanstack.com/query
- Check the TanStack Router docs: https://tanstack.com/router
