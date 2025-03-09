"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Base grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-100" />
    </div>
  );
}
