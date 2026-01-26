# Unit Testing Documentation

This project uses **Jest** and **React Testing Library** for comprehensive unit testing of components and pages.

## Setup

### Installation

```bash
npm install
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Test Structure

```
├── components/
│   ├── __tests__/
│   │   ├── Navbar.test.tsx
│   │   ├── Footer.test.tsx
│   │   ├── MatrixRain.test.tsx
│   │   ├── RotatingSubtitle.test.tsx
│   │   ├── VisitorCounter.test.tsx
│   │   └── ProjectCard.test.tsx
│   └── [component files]
├── app/
│   ├── __tests__/
│   │   └── page.test.tsx
│   ├── about/__tests__/
│   │   └── page.test.tsx
│   └── [other page tests]
└── data/
    └── __tests__/
        └── projects.test.ts
```

## Test Coverage

### Component Tests

#### Navbar (`components/__tests__/Navbar.test.tsx`)
- ✅ Renders all navigation links
- ✅ Has correct href attributes
- ✅ Highlights the active route
- ✅ Applies correct styling to inactive links

#### Footer (`components/__tests__/Footer.test.tsx`)
- ✅ Renders copyright with current year
- ✅ Renders social media links
- ✅ Has correct styling classes
- ✅ Applies matrix-link class to links

#### MatrixRain (`components/__tests__/MatrixRain.test.tsx`)
- ✅ Renders canvas element
- ✅ Has correct CSS classes
- ✅ Has aria-hidden attribute
- ✅ Sets canvas dimensions on mount
- ✅ Initializes canvas context

#### RotatingSubtitle (`components/__tests__/RotatingSubtitle.test.tsx`)
- ✅ Renders first subtitle initially
- ✅ Rotates through subtitles
- ✅ Has correct styling classes
- ✅ Cleans up interval on unmount

#### VisitorCounter (`components/__tests__/VisitorCounter.test.tsx`)
- ✅ Initializes count from localStorage
- ✅ Starts count at 1 if no previous count
- ✅ Increments and saves count to localStorage
- ✅ Does not render before count is loaded
- ✅ Has correct styling
- ✅ Handles invalid localStorage data

#### ProjectCard (`components/__tests__/ProjectCard.test.tsx`)
- ✅ Renders project title
- ✅ Renders project description
- ✅ Renders all technology tags
- ✅ Renders GitHub and demo links when provided
- ✅ Does not render links when not provided
- ✅ Has correct card styling
- ✅ Applies correct styling to tech tags and title

### Page Tests

#### HomePage (`app/__tests__/page.test.tsx`)
- ✅ Renders hero section
- ✅ Renders tagline
- ✅ Renders navigation links
- ✅ Renders social media links
- ✅ Renders all sections (about, experience, credentials, services, contact)
- ✅ Has correct section IDs for anchor navigation
- ✅ Renders child components

#### Other Pages
- ✅ AboutPage - Title, bio, styling
- ✅ ContactPage - Title, email link, styling
- ✅ CredentialsPage - Title, description, back link
- ✅ ExperiencePage - Title, description, back link
- ✅ ProjectsPage - Title, project cards, grid layout
- ✅ ServicesPage - Title, description, back link

### Data Tests

#### Projects Data (`data/__tests__/projects.test.ts`)
- ✅ Exports an array of projects
- ✅ Each project has required fields
- ✅ Tech array contains strings
- ✅ GitHub and demo fields are valid URLs
- ✅ Slugs are unique
- ✅ Titles and descriptions are non-empty

## Testing Best Practices

### 1. Component Isolation
- Mock child components to test in isolation
- Use `jest.mock()` for external dependencies

### 2. User-Centric Testing
- Test from the user's perspective
- Use `screen.getByRole()` and `screen.getByText()` over test IDs when possible

### 3. Async Handling
- Use `waitFor()` for asynchronous updates
- Mock timers with `jest.useFakeTimers()` when testing intervals

### 4. Accessibility
- Test for proper ARIA attributes
- Verify semantic HTML structure

### 5. Coverage Goals
- Maintain >80% code coverage
- Focus on critical user paths
- Test edge cases and error scenarios

## Mocking Strategy

### Next.js Navigation
All Next.js navigation hooks are mocked in `jest.setup.js`:
- `useRouter()`
- `usePathname()`
- `useSearchParams()`

### Browser APIs
- `window.matchMedia` - Mocked for media query support
- `localStorage` - Mocked with spy functions
- Canvas API - Mocked for MatrixRain component

## CI/CD Integration

Add to your CI pipeline:

```yaml
- name: Run tests
  run: npm test -- --coverage --watchAll=false

- name: Check coverage thresholds
  run: npm test -- --coverage --coverageThreshold='{"global":{"branches":80,"functions":80,"lines":80,"statements":80}}'
```

## Troubleshooting

### Common Issues

**Issue**: Tests timeout
- **Solution**: Increase timeout with `jest.setTimeout(10000)`

**Issue**: Canvas tests fail
- **Solution**: Ensure canvas mock is set up in test file

**Issue**: Component not found
- **Solution**: Check import paths and module resolution

**Issue**: Async state updates
- **Solution**: Wrap assertions in `waitFor()` or use `findBy*` queries

## Additional Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Next.js Applications](https://nextjs.org/docs/testing)
