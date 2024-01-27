import Image from "next/image";

export default function Product({name,description,image}) {
    return (
        <div className="container mx-auto flex justify-center items-center bg-[#242d45] min-h-screen">
            <div className="flex flex-col md:flex-row p-8 items-center">
                <div className="md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-5xl font-bold mb-4 text-white">{name}</h2>
                    <p className="text-white">
                       {description}
                    </p>
                </div>
                <div className="md:w-1/2 md:ml-4">
                    <img src={image} alt="Logo"
                        width={500}
                        height={500}
                        quality={100} />
                </div>
            </div>
        </div>
    );
}