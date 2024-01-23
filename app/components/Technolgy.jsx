import Image from "next/image";
import Logo from "./kubernetes.svg"

const image = [
    {
        id: 1,
        image: Logo
    },
    {
        id: 2,
        image: Logo
    },
    {
        id: 3,
        image: Logo
    },
    {
        id: 4,
        image: Logo
    },
    {
        id: 5,
        image: Logo
    }
]

const Technology = () => {
    return (
        <div className="mx-auto shadow-md px-4 lg:px-8 bg-[#242d45]">
            <h2 className="text-2xl text-center py-10 text-white">Technology Expertise</h2>
            <div className="flex flex-wrap justify-center">
                {
                    image.map(image => (
                        <div key={image.id} className="m-10">
                            <Image
                                src={Logo}
                                alt="test"
                                width={100}
                                height={100}
                                quality={100}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Technology;