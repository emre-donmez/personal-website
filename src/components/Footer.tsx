export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-black border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Emre Dönmez. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 