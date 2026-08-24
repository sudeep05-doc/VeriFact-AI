import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-xl border bg-background shadow-sm ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

export { Card, CardContent };
