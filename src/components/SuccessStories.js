import TestimonialImg1 from '../assets/s3.png';
import TestimonialImg2 from '../assets/s1.jpg';
import TestimonialImg3 from '../assets/s2.jpg';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            course: 'Full Stack Web Development',
            quote: 'Level Up completely transformed my career. The expert-led courses and personalized learning path were exactly what I needed to succeed.',
            image: TestimonialImg1
        },
        {
            name: 'Michael Lee',
            course: 'Data Science Bootcamp',
            quote: 'I learned more in three months than I did in an entire year of self-study. The community support was a game-changer for me.',
            image: TestimonialImg2
        },
        {
            name: 'Jessica Martinez',
            course: 'Digital Marketing Strategy',
            quote: 'Thanks to Level Up, I now have the tools and knowledge to thrive in the digital marketing world. I couldn’t have done it without their resources.',
            image: TestimonialImg3
        }
    ];

    return (
        <section className="bg-gray-100 py-20" id="testimonials">
            <div className="container mx-auto px-5">
                <h1 className="text-4xl font-bold text-center mb-10">What Our Students Say</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                            <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-center">{testimonial.name}</h3>
                            <p className="text-center text-gray-500 mb-2">{testimonial.course}</p>
                            <p className="text-center italic">"{testimonial.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
