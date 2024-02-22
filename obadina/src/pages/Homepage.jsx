import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import DefaultButton from '../components/DefaultButton.jsx'
import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';

// import { Card } from 'flowbite-react';

function Homepage() {
    return (
        <div className=' font-custom'>

            <Navigation />

            {/* first homepage section  */}
            <div className='xl:flex flex-row items-center bg-lightGreen  xl:flex-row-reverse xl:px-16 xl:justify-between xl:py-10'>
                <div className="right p-5 xl:flex xl:justify-end xl:mr-0">
                    <img src="/obadina1.svg" className='w-full xl:w-3/4' alt="" />
                </div>
                <div className="left p-5 text-center md:p-5 xl:flex xl:flex-col xl:justify-start xl:text-left xl:w-6/12">
                    <h3 className='font-bold text-cm md:px-20 xl:px-0 xl:text-dm'>Igniting minds to soar through <span className='text-green-500 '> academic </span> excellence</h3>
                    <p className='text-base py-4'>Dr. Obadina  is a renowned expert in  Food Safety and Biotechnology, Professor at the Federal University  of Agriculture, Abeokuta, Nigeria. </p>
                    <div className='flex justify-center xl:justify-start'>
                        <DefaultButton className={'bg-primaryGreen w-full md:w-6/12'} buttonText={'Get Started'} />
                    </div>
                </div>
            </div>

            {/* Second homepage section - Philosophy  */}
            <div className='xl:flex flex-row items-center xl:my-10 xl:mx-16 xl:justify-between '>
                <div className="right p-5 flex items-center justify-center xl:w-2/4 xl:justify-start ">
                    <img src="/Image2.png" className='w-full xl:w-3/4 ' alt="" />
                </div>
                <div className="left p-5 text-center xl:text-left xl:w-3/4 ">
                    <h3 className='font-bold text-xl xl:text-cm'> Teaching philosophy </h3>
                    <p className='font-light text-base py-4 xl:pr-20 '>To use active learning to teach students critical thinking skills and the ability to critically evaluate and judge information presented to them (in print, through the Internet, and orally); To help student to develop life long-learning skills; and  to help students acquire the ability and self-confidence to develop and defend their own ideas. </p>
                </div>
            </div>

            {/* Third homepage section - Work Experience   */}
            <div className='flex flex-col items-center justify-center  xl:my-10 xl:mx-16'>
                <h3 className='font-bold text-xl text-center xl:text-cm xl:py-10'> Work Experience </h3>
                {/* Cards */}
                <div className='xl:flex xl:flex-row xl:justify-between'>
                    {/* Card 1  */}
                    <div href="#" className="bg-lightGreen mx-10 my-5 items-center justify-center text-center rounded-2xl">
                        <div className="flex items-center justify-center p-2">
                            <img src="/icon-box.svg" alt="academic gown cap" />
                        </div>
                        <div>
                            <h5 className='text-lg font-bold py-2'>Academic Experience</h5>
                            <p className='p-2'>Foundations of knowledge built throughout  academic my years, Innovative teaching, and knowledge amassed over the years.</p>
                        </div>
                    </div>
                    {/* Card 2  */}
                    <div href="#" className="bg-lightGreen mx-10 my-5 items-center justify-center text-center rounded-2xl">
                        <div className="flex items-center justify-center p-2">
                            <img src="/icon-box-3.png" alt="academic gown cap" />
                        </div>
                        <div>
                            <h5 className='text-lg font-bold py-2'>Research Experience</h5>
                            <p className='p-2'>Exciting ventures I&apos;ve undertaken in the pursuit of knowledge, discovery and shedding light on the projects.</p>
                        </div>
                    </div>
                    {/* Card 3  */}
                    <div href="#" className="bg-lightGreen mx-10 my-5 items-center justify-center text-center rounded-2xl">
                        <div className="flex items-center justify-center p-2">
                            <img src="/icon-box-2.png" alt="academic gown cap" />
                        </div>
                        <div>
                            <h5 className='text-lg font-bold py-2'>Administrative Experience</h5>
                            <p className='p-2'> Roles and responsibilities in various  administrative capacities, showcasing how I&apos;ve contributed to efficient operations.</p>
                        </div>
                    </div>
                </div>

                <Link to="/workExperience">
                    <div className='flex flex-row text-green-500 text-bold p-2 w-60 border-green-400 border-2 border-solid rounded-lg xl:mt-10'>
                        <p className='text-center pl-10'> Learn More </p>
                        <img className='pl-2' src="/Arrow 1.svg" alt="" />
                    </div>
                </Link>


            </div>

            {/* Fourth section - Professor's Gallery  */}
            <div className="flex flex-col items-center justify-center md:mt-8 xl:my-10 xl:mx-16">
                <div className="flex flex-col items-center justify-center">
                    <h3 className='font-bold text-xl my-5 xl:text-cm'>Professor&apos;s Gallery</h3>
                    <p className='text-center px-2'>Explore the capturing moments of professor&apos;s academic activities through captivating images.</p>
                </div>
            </div>
            {/* Carousel section  */}
            <div className="h-56 m-8 sm:h-64 xl:h-80 2xl:h-96 xl:mx-16">
                <Carousel>
                    <img src="/slide1.svg" alt="Lecturing Prof" />
                    <img src="/slide2.svg" alt="..." />
                    <img src="/slide3.svg" alt="..." />
                    <img src="/slide4.svg" alt="..." />
                    <img src="/slide5.png" alt="..." />
                </Carousel>
            </div>

            {/* fifth homepage section  - Achievement section */}
            <div className='xl:flex flex-row items-center bg-lightGreen xl:px-16 xl:justify-between '>
                <div className="right p-5 xl:py-4 xl:w-2/5" >
                    <img src="/books.svg" className='w-full  md:px-8 xl:p-0  xl:w-160  xl:rounded-lg' alt="Books" />
                </div>
                <div className='xl:w-3/5 xl:py-20'>
                    <div className="m-4 text-left md:px-10 ">
                        <h5 className='font-bold text-lg py-2 xl:text-cm ' >Groundbreaking Research and <span className='text-green-500 '> Achievements  </span> in Food safety and Biotechnology</h5>
                    </div>
                    {/* Groundbreaking stats */}
                    <div className='flex flex-row justify-start md:justify-between mx-8 md:pl-10 md:pr-40 xl:pr-0 xl:text-cm xl:py-8'>
                        <div>
                            <h4 className='text-green-500 font-bold '>80+</h4>
                            <p className='py-2'>Publications</p>
                        </div>
                        <div className='pl-10'>
                            <h4 className='text-green-500 font-bold'>30+</h4>
                            <p className='py-2'>Conferences attended</p>
                        </div>
                    </div>
                    <div className='flex flex-row  justify-start md:justify-between mx-8 md:pl-10 md:pr-40 xl:pr-0  xl:text-cm xl:py-8'>
                        <div>
                            <h5 className='text-green-500 font-bold'>25+</h5>
                            <p className='py-2'>Accolades</p>
                        </div>
                        <div className='pl-12'>
                            <h5 className='text-green-500 font-bold'>18+</h5>
                            <p className='py-2'>Years of experience</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Sixt section - Collaboration  */}
            <div className='my-4 mx-8 xl:flex xl:flex-row xl:px-24 xl:justify-between'>
                <div className='xl:w-2/4'>
                    <div className='my-4'>
                        <h4 className='py-4 font-bold text-xl text-center md:text-left xl:text-cm'>Collaborate with us <span className="text-green-500" >today!</span></h4>
                        <p className='text-base '>Contact us for academic inquiries or collaboration opportunities.</p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <img src="/Email.svg" alt="email logo" className="mr-2" />
                            <p className="text-base p-2">E-mail: obadinaw@gmail.com</p>
                        </div>
                        <div className="flex items-center">
                            <img src="/Phone.svg" alt="phone logo" className="mr-2" />
                            <p className="text-base p-2">+234-805-887-9249</p>
                        </div>
                        <div className="flex items-center">
                            <img src="/Pin.svg" alt="location logo" className="mr-2" />
                            <p className="text-base p-2">Federal University of Agriculture, Abeokuta, Nigeria</p>
                        </div>
                    </div>
                </div>
                <form className='my-4 xl:w-2/5 xl:flex xl:flex-col '
                    action="mailto:sanya4reel@gmail.com"
                    method="post"
                    encType="text/plain" >
                    <div className='flex flex-col'>
                        <label htmlFor="name">Name:</label>
                        <input
                            className='rounded-lg my-3'
                            type="text"
                            id="name"
                            name="name"
                            required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email:</label>
                        <input
                            className='rounded-lg my-3'
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            className='rounded-lg my-3 h-40'
                            placeholder='Type your message...'
                            id="message"
                            name="message"
                            required
                        />
                    </div>
                    <div>
                        <DefaultButton className={'bg-primaryGreen w-1/2'} buttonText={'Submit'} />
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}




export default Homepage;