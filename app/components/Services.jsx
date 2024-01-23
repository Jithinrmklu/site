import Image from "next/image";
import Logo from "./dojo-logo.png"
import Link from "next/link";

const Services = () => {
  const services = [
    {
      id: 1,
      logo: 'path/to/service1-logo.png',
      heading: 'Service 1',
      description: 'Description for Service 1.',
    },
    {
      id: 2,
      logo: 'path/to/service2-logo.png',
      heading: 'Service 2',
      description: 'Description for Service 2.',
    },
    {
      id: 3,
      logo: 'path/to/service3-logo.png',
      heading: 'Service 3',
      description: 'Description for Service 3.',
    },
    {
      id: 4,
      logo: 'path/to/service4-logo.png',
      heading: 'Service 4',
      description: 'Description for Service 4.',
    },
    {
      id: 5,
      logo: 'path/to/service5-logo.png',
      heading: 'Service 5',
      description: 'Description for Service 5.',
    },
    {
      id: 6,
      logo: 'path/to/service6-logo.png',
      heading: 'Service 6',
      description: 'Description for Service 6.',
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Explore Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6">
            <Image
              src={Logo}
              alt="Logo"
              width={70}
              quality={100}
              placeholder="blur"
            />
            <h3 className="text-xl font-semibold mb-2">{service.heading}</h3>
            <p className="text-gray-600 py-5">{service.description}</p>
            <Link href="/payment"
              className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Buy Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
