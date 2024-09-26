import AboutImg from '../assets/about3.png';

export default function About() {
    const config = {
        line1: 'With expert instructors, comprehensive lessons, and projects, you wll gain the knowledge and confidence needed to excel in your field. Our course is tailored to help you achieve your goals, whether you are aiming for personal growth, career advancement, or simply exploring a new passion.'
        // line2: '1. *Expert-Led Courses*: Learn from industry professionals who bring real-world experience and insights to every lesson.',
        // line3: '2. *Personalized Learning Paths*: We understand that everyone’s journey is unique. That is why we offer customizable learning paths tailored to your specific goals and interests.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary1 px-20 py-20 gap-10 ' id='about' >

        <div className='py-15 md:w-1/2 px-5'>
            <img src={AboutImg} alt="AboutImg" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center bg-forn'>
                <h1 className='text-3xl border-b-2 border-bg-forn mb-5 w-[370px] font-bold text-black'>Why Choose Level Up?</h1>
                <p className='pb-5'>{config.line1}</p>
                {/* <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p> */}
            </div>
        </div>
    </section>
}