import FeaturesImg from '../assets/about.jpg';

export default function Features() {
    const config = {
        line1: '1. Expert-Led Courses: "Learn from industry professionals who bring real-world experience and insights to every lesson.',
        line2: '2. Personalized Learning Paths: "We understand that everyone’s journey is unique. That is why we offer customizable learning paths tailored to your specific goals and interests.',
        line3: '3. Community Support: "Join a vibrant community of learners, where you can network, share ideas, and get support from peers and mentors.',
        line4: '4. Continuous Learning: "Stay ahead of industry trends with our regularly updated content and access to exclusive resources, webinars, and more.',
        line5: '5. Cutting-Edge Tools: "Gain access to the latest tools and technologies that will enhance your learning experience and equip you with the resources needed to excel in your field.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary1 px-20 py-20 gap-10 ' id='Features' >

        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center bg-forn'>
                <h1 className='text-3xl border-b-2 border-bg-forn mb-5 w-[370px] font-bold text-black'>What We Offer for You</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                <p className='pb-5'>{config.line4}</p>
                <p className='pb-5'>{config.line5}</p>
            </div>

        </div>
        <div className='py-15 md:w-1/2 px-5'>
            <img src={FeaturesImg} alt="FeaturesImg" />

        </div>
    </section>
}