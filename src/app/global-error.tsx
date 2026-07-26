export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/95">
      <div className="text-center text-white px-6">
        <h1 className="text-9xl font-bold mb-4">500</h1>
        <h2 className="text-3xl font-bold mb-4">Internal Server Error</h2>
        <p className="text-xl text-white/80 mb-8 max-w-md mx-auto">
          Something went wrong on our end. Our team has been notified and is working on it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block"
          >
            Go Home
          </a>
          <a
            href="/contact"
            className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-primary transition inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
