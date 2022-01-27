import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => <div className="max-w-7xl px-6 mx-auto">{children}</div>;
