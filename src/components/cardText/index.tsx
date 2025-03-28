import { FiEdit, FiTrash } from "react-icons/fi";
import { FaRegImage } from "react-icons/fa";
import { FiAlertOctagon } from "react-icons/fi";

type CardTextProps = {
    field: string;
    value: string;
};

const CardText: React.FC<CardTextProps> = ({ field, value }) => {
    return (
        <div className="bg-[#444444] px-4 p-8 rounded-sm w-1/5 flex flex-col justify-center items-center">
            <div>
                <p className="text-xs">{field}</p>
                <h2 className="text-lg">{value}</h2>
            </div>

        </div>
    );
};

export default CardText;
