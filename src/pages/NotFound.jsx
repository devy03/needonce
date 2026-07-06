import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-5 py-32 text-center">
      <h1 className="text-4xl font-bold text-white">404</h1>
      <p className="text-white/50">This page doesn't exist — maybe someone borrowed it.</p>
      <Link to="/" className="rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white">Back home</Link>
    </div>
  );
}
