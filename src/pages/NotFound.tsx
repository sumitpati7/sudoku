import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-extrabold text-slate-800">404</h1>
      <p className="text-slate-500">This page doesn't exist.</p>
      <Link
        to="/"
        className="rounded-lg bg-sky-500 px-4 py-2 font-medium text-white hover:bg-sky-600"
      >
        Go home
      </Link>
    </div>
  )
}
