import Image from "next/image";
import { BiHomeAlt } from "react-icons/bi";

const SideBAr = () => {
    return (
        <div className="w-[100px] md:w-[100px] bg-[#444444] py-8 px-4 flex flex-col items-center">
            <Image 
                src="/FieldNetLogo.png" 
                alt="FieldNet Logo" 
                width={150} 
                height={150} 
                className="mb-4"
            />
            <BiHomeAlt size={40} />
        </div>
    );
}

export default SideBAr;
