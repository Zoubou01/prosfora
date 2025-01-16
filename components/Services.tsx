const services = [
    {
        title: "Website Development",
        description: "550€ / once",
    },
    {
        title: "Website Design",
        description: "300€ / once",
    },
    {
        title: "Server",
        description: "250€ / per 2 years",
    },
    {
        title: "Maintenance(Not necessary)",
        description: "150€ / per year",
    },
];

export default function Services() {
    return (
        <section className="h-screen bg-black flex items-center">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8 text-white">Website Offer</h2>
                <div className="space-y-4">
                    {services.map((service, index) => (
                        <div key={index} className="group hover:bg-gray-900 p-6 rounded-lg transition-all duration-300 border border-gray-800">
                            <h3 className="text-xl font-semibold mb-2 text-purple-400">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
