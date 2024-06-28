
import { ReactNode } from "react";
import ProjectsLayout from "../layout";

interface AngularLayoutProps {
  children: ReactNode;
}

export default function AngularPage({ children }: AngularLayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}
