"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Base grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Gradient backgrounds for sections */}
      <div className="absolute top-[25%] left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-[75%] left-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-[40%] right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-[85%] right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* Additional light beams and accents */}
      <div className="absolute top-[10%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
      <div className="absolute top-[50%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute top-[90%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>

      {/* Subtle geometric shapes */}
      <div className="absolute top-[15%] right-[15%] w-16 h-16">
        <div className="absolute inset-0 border border-blue-500/10 rounded-md transform rotate-45 opacity-30"></div>
        <div className="absolute inset-3 border border-blue-500/5 rounded-md transform rotate-45 opacity-30"></div>
      </div>

      <div className="absolute bottom-[20%] left-[10%] w-16 h-16">
        <div className="absolute inset-0 border border-blue-500/10 rounded-full opacity-30"></div>
        <div className="absolute inset-3 border border-blue-500/5 rounded-full opacity-30"></div>
      </div>

      {/* Subtle ping animations */}
      <div
        className="absolute top-[30%] right-[30%] w-1 h-1 rounded-full bg-blue-400 animate-ping opacity-30"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute bottom-[40%] left-[20%] w-1 h-1 rounded-full bg-blue-400 animate-ping opacity-30"
        style={{ animationDuration: "4s" }}
      ></div>
      <div
        className="absolute top-[60%] left-[40%] w-1 h-1 rounded-full bg-blue-400 animate-ping opacity-30"
        style={{ animationDuration: "5s" }}
      ></div>
    </div>
  );
}
