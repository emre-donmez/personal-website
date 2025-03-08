export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-[rgb(var(--color-bg))] border-t border-[rgb(var(--color-bg-secondary))]/30">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[rgb(var(--color-text-secondary))/50] text-xs">
          &copy; {new Date().getFullYear()} Emrecan Dönmez. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 