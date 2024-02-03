import StoreCard from "../components/StoreCard"

export default function Store() {

    const cardDataArray = [
        {
            id: 1,
            subtitle: "FREE Script - 50 concurrent user Jitsi video conferencing",
            description: "Unparalleled features, flexibility, and speed with Jitsi Meet. This setup supports 50 concurrent users.",
            price: "Free",
        },
        {
            id: 2,
            subtitle: "FREE Script - 50 concurrent user Jitsi video conferencing",
            description: "Unparalleled features, flexibility, and speed with Jitsi Meet. This setup supports 50 concurrent users.",
            price: "$200",
        },
        {
            id: 3,
            subtitle: "FREE Script - 50 concurrent user Jitsi video conferencing",
            description: "Unparalleled features, flexibility, and speed with Jitsi Meet. This setup supports 50 concurrent users.",
            price: "Free",
        },
        {
            id: 4,
            subtitle: "FREE Script - 50 concurrent user Jitsi video conferencing",
            description: "Unparalleled features, flexibility, and speed with Jitsi Meet. This setup supports 50 concurrent users.",
            price: "$200",
        }
    ];

    return (
        <div className="container mx-auto flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Launch and Manage Your PaaS Infrastructure as Code</h1>
            <div className="flex">
            {cardDataArray.map((cardData, index) => (
                <StoreCard key={index} {...cardData} />
            ))}
            </div>
        </div >
    )
}
