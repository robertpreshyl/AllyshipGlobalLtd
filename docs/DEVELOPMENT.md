# Development Guide

## Getting Started

### Development Environment Setup

1. **Required Software**
   - Node.js 20.x
   - npm 10.x
   - Git
   - VS Code (recommended)

2. **VS Code Extensions**
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - TypeScript and JavaScript Language Features

### Initial Setup

1. **Clone the Repository**
```bash
git clone https://github.com/robertpreshyl/AllyshipGlobalLtd.git
cd AllyshipGlobalLtd
```

2. **Install Dependencies**
```bash
npm install
```

3. **Environment Configuration**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your local configuration.

4. **Start Development Server**
```bash
npm run dev
```

## Development Workflow

### Branch Strategy

- `main` - Production branch
- `develop` - Development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `stable/v*` - Stable version branches

### Creating a New Feature

1. Create a feature branch:
```bash
git checkout develop
git checkout -b feature/your-feature-name
```

2. Make your changes
3. Commit using conventional commits:
```bash
git commit -m "feat: add new feature"
git commit -m "fix: resolve issue"
git commit -m "docs: update documentation"
```

4. Push and create a pull request:
```bash
git push origin feature/your-feature-name
```

### Code Style Guide

#### TypeScript
- Use TypeScript for all new code
- Define interfaces for props and state
- Use proper type annotations
- Avoid `any` type

#### React Components
```typescript
// Component example
interface Props {
  title: string;
  children: React.ReactNode;
}

export function MyComponent({ title, children }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
```

#### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use CSS variables for theming
- Maintain consistent spacing

### Testing

1. **Running Tests**
```bash
npm run test          # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

2. **Writing Tests**
```typescript
describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### Building

1. **Development Build**
```bash
npm run build
npm run start
```

2. **Production Build**
```bash
npm run pages:build
```

### Common Issues

1. **Port Already in Use**
```bash
killall -9 node
npm run dev
```

2. **Type Errors**
- Run `npm run type-check`
- Update TypeScript definitions
- Check for missing imports

3. **Build Errors**
- Clear `.next` directory
- Remove node_modules and reinstall
- Check for environment variables

## Performance Optimization

### Best Practices

1. **Image Optimization**
```typescript
import Image from 'next/image'

export function OptimizedImage() {
  return (
    <Image
      src="/image.jpg"
      alt="Description"
      width={800}
      height={600}
      priority
    />
  );
}
```

2. **Code Splitting**
```typescript
const DynamicComponent = dynamic(() => import('./Component'))
```

3. **Performance Monitoring**
- Use Lighthouse for audits
- Monitor Core Web Vitals
- Check bundle sizes

## Deployment

### Staging Deployment
```bash
npm run pages:preview
```

### Production Deployment
```bash
npm run pages:deploy
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages) 