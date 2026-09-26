import { Outlet, Link } from 'react-router'

export default function App() {
  return (
    <div>
      <nav className="flex gap-4 p-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  )
}