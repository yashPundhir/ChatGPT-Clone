- next.js project initialise with bun
- add tailwind to the project
- add shadcn to the project with this preset => `--preset b6mrwatE14`
- add `prisma`, `@prisma/client` and `@prisma/adapter-pg` to the project
- create a project in neon
- initialize prisma with: `bunx prisma init`
- add the neon connection string to the `.env` file
- generate prisma client with: `bunx --bun prisma generate`
- initialize prisma client in `db.ts` under `lib` folder
- create a test model inside `schema.prisma`
- then again run: `bunx --bun prisma generate`
- then run: `bunx --bun prisma migrate dev`

> use command: `bunx prisma studio` to create a local instance of your DB visually

## Next.js Specific rules for naming files, folders and identifiers

| Element                    | Convention               | Example                                       |
| -------------------------- | ------------------------ | --------------------------------------------- |
| **Files** (all)            | kebab-case               | `user-profile.tsx`, `conversation-actions.ts` |
| **Folders**                | kebab-case               | `dashboard-settings/`, `auth/`                |
| **Component name in code** | PascalCase               | `function UserProfile() {}`                   |
| **Functions / variables**  | camelCase                | `fetchUserData()`, `userProfileData`          |
| **Custom hooks**           | camelCase + `use` prefix | `useAuth.ts` / `use-auth.ts`                  |
| **Constants**              | UPPER_SNAKE_CASE         | `API_BASE_URL`                                |
| **Types / Interfaces**     | PascalCase               | `interface UserProfileProps {}`               |
