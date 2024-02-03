import Image from "next/image";

import Terrform from "../components/terraform.svg";
import AWS from "../components/AWS.svg";

const StoreCard = ({ subtitle, description, price }) => {
    return (
        <div className="flex mt-5 p-5">
            <div className="max-w-xs max-h-100 p-5 bg-white rounded-md shadow-md">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <Image src={Terrform} alt="Logo" width={40} quality={100} />
                        <h2 className="text-xl font-bold p-2">Terraform</h2>
                    </div>

                    <Image
                        src={AWS}
                        alt="Logo"
                        width={60}
                        quality={100}
                        className="rounded ml-5"
                    />
                </div>

                <h3 className="text-md font-semibold mb-2">{subtitle}</h3>

                <p className="text-sm text-gray-600 mb-4">{description}</p>

                <p className="py-3 font-bold">{price}</p>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default StoreCard;
