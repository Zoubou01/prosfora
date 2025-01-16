export default function Hero() {
    return (
        <section className="h-[40vh] flex items-center justify-center bg-gradient-to-r from-purple-900 to-blue-900">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h1 className="text-4xl font-bold text-white mb-4">Transform Your Digital Presence</h1>
                <p className="text-lg text-gray-300 mb-6">Professional web development solutions tailored to your business needs</p>
                <button className="bg-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-600 transition-all">Get Started</button>
            </div>
        </section>
    );
}
