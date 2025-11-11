export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">The page you're looking for doesn't exist.</p>
      <a href="/" className="mt-6 inline-block px-4 py-2 bg-sky-600 text-white rounded">Go Home</a>
    </div>
  )
}