import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/health.jpg')" }}
    >
      {children}
    </div>
  );
};

export default LoginLayout;
