# Game-Hub Copilot Instructions

## Architecture Overview

**Game-Hub** is a React + TypeScript + Vite application focused on game-related features with a component-driven UI architecture using Chakra UI.

### Key Architecture Patterns

- **Component Structure**: All UI components live in `src/components/ui/` and are wrapped by `Provider` component exported from `src/components/ui/provider.tsx`
- **Design System**: Chakra UI (`@chakra-ui/react`) provides the component library with `defaultSystem` as the base theme configuration
- **Theme Management**: Theme/color mode switching uses `next-themes` (ThemeProvider) integrated with Chakra UI, managing light/dark mode via the `class` attribute
- **Styling**: CSS modules and inline styles via Chakra's component props (no separate CSS-in-JS needed for components)

### Provider Setup (Critical for New Components)

Always wrap the app with the `Provider` component from `src/components/ui/provider.tsx`:
```tsx
// main.tsx: Already configured
import { Provider } from "@/components/ui/provider";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
```

Use `useColorMode()` hook for accessing/toggling theme:
```tsx
import { useColorMode } from "@/components/ui/color-mode";
const { colorMode, toggleColorMode } = useColorMode();
```

## Build & Development Commands

- **`npm run dev`** - Start Vite dev server with HMR (hot module replacement)
- **`npm run build`** - TypeScript check (`tsc -b`) then Vite production build to `dist/`
- **`npm run lint`** - Run ESLint on all `.ts`/`.tsx` files
- **`npm run preview`** - Preview production build locally

**Note**: Build runs TypeScript compilation first (`tsc -b`), so type errors block the build. Fix all TypeScript errors before attempting build.

## TypeScript Configuration

- **`tsconfig.json`**: Root config that references `tsconfig.app.json` and `tsconfig.node.json`
- **`tsconfig.app.json`**: Application code configuration
- **`tsconfig.node.json`**: Build tool configuration (Vite, etc.)

Use path aliases defined in tsconfig (e.g., `@/components/ui/` imports work via alias resolution).

## Linting & Code Quality

- **Tool**: ESLint with flat config (`eslint.config.js`)
- **Rules**: Includes `typescript-eslint`, React Hooks, and React Refresh rules
- **Target Files**: Only `**/*.{ts,tsx}` files are linted
- **Common Issues**: React Hook dependencies, missing key props in lists, unused variables

When adding external packages, verify they don't trigger ESLint warnings about missing peer dependencies.

## Key Dependencies

- **React 19.2**: Latest React with stable hooks API
- **Chakra UI 3.30**: Component library with built-in accessibility
- **next-themes 0.4**: Theme provider for class-based dark mode
- **react-icons 5.5**: Icon library (LuSun, LuMoon used in color-mode component)
- **Vite (rolldown-vite 7.2.5)**: Build tool with fast HMR

The `vite` package is overridden to use `rolldown-vite` for faster builds.

## Common Patterns & Conventions

1. **Component Exports**: Export components as named exports where possible for better tree-shaking
2. **UI Component Wrappers**: Extend Chakra components via props composition rather than wrapper components when simple
3. **Type Safety**: Always use TypeScript interfaces/types for props (e.g., `ColorModeProviderProps`)
4. **Color Mode Integration**: Use `useColorModeValue(lightValue, darkValue)` hook for color-dependent styling

## File Organization

```
src/
├── components/
│   └── ui/          # Reusable UI primitives & providers
├── assets/          # Static images, SVGs
├── App.tsx          # Root component
├── main.tsx         # Entry point with Provider setup
├── index.css        # Global styles
└── App.css          # App-specific styles
```

New feature components should live in `src/components/` (create subdirectories as needed).

## Important Notes for Contributors

- **"use client" Directive**: All Chakra/next-themes components use `"use client"` at the top (required for hook usage)
- **Import Aliases**: Always use `@/` prefix for imports within src (e.g., `@/components/ui/provider`)
- **React 19 Updates**: Modern React - use hooks (useState, useContext, etc.), avoid class components
- **No React Compiler**: Explicitly disabled due to performance impact; not expected to be enabled
