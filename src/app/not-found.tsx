import Link from 'next/link'
import { Icons } from '@/components/common/Icons'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <div className="container flex max-w-md flex-col items-center text-center">
        {Icons.x && <Icons.x className="mb-8 h-16 w-16 text-muted-foreground" />}
        <h1 className="font-heading text-4xl font-bold">Page Not Found</h1>
        <p className="mt-4 text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 