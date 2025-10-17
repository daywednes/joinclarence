export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-16 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Clarence Insurance Services</p>
      <div className="mt-4 flex items-center justify-center gap-6">
        <a href="#licensing" className="hover:text-gray-700 transition-colors">
          Licensing
        </a>
        <a href="#privacy" className="hover:text-gray-700 transition-colors">
          Privacy
        </a>
        <a href="#terms" className="hover:text-gray-700 transition-colors">
          Terms
        </a>
      </div>
    </footer>
  );
}

