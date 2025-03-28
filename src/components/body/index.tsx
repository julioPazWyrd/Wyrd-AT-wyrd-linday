import Image from "next/image";
import { TiHomeOutline } from "react-icons/ti";
import { ReactNode } from "react";

interface BodyContentProps {
  children: ReactNode;
}

const BodyContent: React.FC<BodyContentProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen p-4 md:p-8">
      {children}
    </div>
  );
};

export default BodyContent;
