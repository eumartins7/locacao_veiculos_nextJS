import { FaStar } from "react-icons/fa";

export function StarRate() {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
                <FaStar
                    key={index}
                    size={16}
                    color="orange"
                />           
            ))}
        </div>
    );
}
