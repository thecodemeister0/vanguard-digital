export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Vanguard Digital Agency. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
