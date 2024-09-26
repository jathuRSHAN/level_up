export default function CallToAction() {
    return (
        <section className="bg-blue-300 py-20 text-white text-center" id="cta">
            <div className="container mx-auto px-5">
                <h1 className="text-4xl font-bold mb-5">Ready to Level Up?</h1>
                <p className="text-lg mb-8">Join us today and discover how you can transform your potential into professional success. Let’s start this journey together!</p>
                <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
                    Sign Up Now
                </button>
                <div className="mt-4">
                    <a href="/signup" className="underline text-lg">Start Your Free Trial</a>
                </div>
            </div>
        </section>
    );
}
