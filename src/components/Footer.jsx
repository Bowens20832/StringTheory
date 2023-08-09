import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-10 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/speaking">Speaking</NavLink>
                <NavLink href="/uses">Uses</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Brandon Owens. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
        <div className="border-t border-zinc-100 pb-8 pt-8 dark:border-zinc-700/40">
          <div className="flex flex-row items-center justify-center text-sm font-regular text-zinc-800 dark:text-zinc-200">
            Powered by 
            <a 
              target="_blank" 
              rel="noreferrer"
              href="http://elegantframework.com/" 
              aria-label="Powered by the Elegant framework"
              className="font-semibold hover:text-rose-500 dark:hover:text-rose-400 pl-1"
            >
                Elegant
            </a>
              .
          </div>
        </div>
      </Container.Outer>
    </footer>
  )
}
