import { FaStar } from "react-icons/fa";

export function StarRate() {
    return (
        <div className="flex pt-5 pb-3">
            {[...Array(5)].map((_, index) => (
                <FaStar
                    key={index}
                    size={24}
                    color="yellow"
                />           
            ))}
        </div>
    );
}
