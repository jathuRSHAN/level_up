import websiteImg1 from '../assets/course1.png';
import websiteImg2 from '../assets/course2.png';
import websiteImg3 from '../assets/course3.png';


export default function Projects() {
    const config = {
        projects: [
            {
                name: 'Fiverr for beginners',
                image: websiteImg1,
                description: 'Start your journey into the world of Fiverr with hands-on methods to transform your potential into professional success.',
                link: 'https://forms.gle/pXQGW448xg2nqLAG7'
            },
            {
                name: 'Grow Your YouTube Channel',
                image: websiteImg3,
                description: 'Start your journey into the world of YouTube with How to Grow Your Channel to transform your potential into professional success.',
                link: '/'
            },
            {
                name: 'Graphic Design Basics',
                image: websiteImg2,
                description: 'Join us today and discover how you can transform your potential into professional success.',
                link: '/'
            },
            {
                name: 'course 4',
                image: websiteImg1,
                description: 'Join us today and discover how you can transform your potential into professional success.',
                link: '#'
            },
            {
                name: 'course 5',
                image: websiteImg2,
                description: 'Join us today and discover how you can transform your potential into professional success.',
                link: '#'
            },
            {
                name: 'course 6',
                image: websiteImg3,
                description: 'Join us today and discover how you can transform your potential into professional success.',
                link: '#'
            }
        ]
    };

    return (
        <section id='projects' className="flex flex-col py-10 px-5 justify-center bg-primary text-black">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className='text-3xl border-b-2 border-bg-forn mb-5 w-[370px] font-bold text-black '>Explore Our Courses</h1>
                    {/* <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p> */}
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-wrap px-5 gap-20 justify-center'>
                    {config.projects.map((project, index) => (

                        <div className='relative bg-white shadow-md rounded-md overflow-hidden max-w-xs md:max-w-sm' key={index}>
                            <h1 className=' font-bold text-black text-center'>{project.name}</h1>
                            <img className='w-full h-48 object-cover' src={project.image} alt="Project" />
                            <div className='project-desc p-5'>
                                <p className='font-bold text-black text-center mb-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' href={project.link} rel="noopener noreferrer">View Course</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
