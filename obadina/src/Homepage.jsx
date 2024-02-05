import Navigation from '../src/Navigation.jsx';
import DefaultButton from '../src/DefaultButton.jsx'
import { Carousel } from 'flowbite-react';
// import { Card } from 'flowbite-react';

function Homepage() {
    return (
        <div className=' font-custom'>

            <Navigation />

            {/* first homepage section  */}
            <div className='md:flex flex-row items-center bg-lightGreen '>
                <div className="right p-5">
                    <img src="/obadina1.svg" alt="" />
                </div>
                <div className="left p-5 text-center ">
                    <h3 className='font-bold text-cm'>Igniting minds to soar through <span className='text-green-500 '> academic </span> excellence</h3>
                    <p className='text-base py-4'>Dr. Obadina  is a renowned expert in  Food Safety and Biotechnology, Professor at the Federal University  of Agriculture, Abeokuta, Nigeria. </p>
                    <DefaultButton className={'bg-primaryGreen w-full'} buttonText={'Get Started'} />
                </div>
            </div>

            {/* Second homepage section - Philosophy  */}
            <div className='md:flex flex-row items-center '>
                <div className="right p-5 flex items-center justify-center">
                    <img src="/Image2.png" alt="" />
                </div>
                <div className="left p-5 text-center ">
                    <h3 className='font-bold text-xl'> Teaching philosophy </h3>
                    <p className='font-light text-base py-4'>To use active learning to teach students critical thinking skills and the ability to critically evaluate and judge information presented to them (in print, through the Internet, and orally); To help student to develop life long-learning skills; and  to help students acquire the ability and self-confidence to develop and defend their own ideas. </p>
                </div>
            </div>

            {/* Third homepage section - Work Experience   */}
            <div className='flex flex-col items-center justify-center '>
                <h3 className='font-bold text-xl text-center'> Work Experience </h3>
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
                        <p className='p-2'>Exciting ventures I've undertaken in the pursuit of knowledge, discovery and shedding light on the projects.</p>
                    </div>
                </div>
                {/* Card 3  */}
                <div href="#" className="bg-lightGreen mx-10 my-5 items-center justify-center text-center rounded-2xl">
                    <div className="flex items-center justify-center p-2">
                        <img src="/icon-box-2.png" alt="academic gown cap" />
                    </div>
                    <div>
                        <h5 className='text-lg font-bold py-2'>Administrative Experience</h5>
                        <p className='p-2'> Roles and responsibilities in various  administrative capacities, showcasing how I've contributed to efficient operations.</p>
                    </div>
                </div>
                <DefaultButton buttonText={'Learn More'} className={'text-green-500 w-9/12 border-green-400'} />
            </div>

            {/* Fourth section - Professor's Gallery  */}
            <div className="flex flex-col items-center justify-center ">
                <div className="flex flex-col items-center justify-center">
                    <h3 className='font-bold text-xl my-5'>Professor's Gallery</h3>
                    <p className='text-center px-2'>Explore the capturing moments of professor's academic activities through captivating images.</p>
                </div>
            </div>
            {/* Carousel section  */}
            <div className="h-56 m-8 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img src="/slides.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                    <img src="/slides.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                    <img src="/slides.svg" alt="..." />
                </Carousel>
            </div>

            {/* fifth homepage section  */}
            <div className='md:flex flex-row items-center bg-lightGreen '>
                <div className="right p-5">
                    <img src="/books.svg" alt="" />
                </div>
                <div className="m-4 text-left">
                    <h5 className='font-bold text-lg py-2'>Groundbreaking Research and <span className='text-green-500 '> Achievements  </span> in Food safety and Biotechnology</h5>
                </div>
                {/* Groundbreaking stats */}
                <div className='flex flex-row justify-between mx-8'>
                    <div>
                        <h4 className='text-green-500 font-bold'>80+</h4>
                        <p className='py-2'>Publications</p>
                    </div>
                    <div>
                        <h4 className='text-green-500 font-bold'>30+</h4>
                        <p className='py-2'>Conferences attended</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between mx-8'>
                    <div>
                        <h5 className='text-green-500 font-bold'>25+</h5>
                        <p className='py-2'>Accolades</p>
                    </div>
                    <div>
                        <h5 className='text-green-500 font-bold'>18+</h5>
                        <p className='py-2'>Years of experience</p>
                    </div>
                </div>
            </div>

            {/* Sixt section - Collaboration  */}
            <div className='my-4 mx-8'>
                <div>
                    <div className='my-4'>
                        <h4 className='py-4 text-xl text-bold'>Collaborate with us <span className="text-green-500" >today!</span></h4>
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
                <form onSubmit='#' className='my-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="name">Name:</label>
                        <input
                            className='rounded-lg my-3'
                            type="text"
                            id="name"
                            name="name"
                            value=""
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
                            value=""
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
                            value=""
                            required
                        />
                    </div>
                    <div>
                        <DefaultButton className={'bg-primaryGreen w-1/2'} buttonText={'Submit'} />
                    </div>
                </form>
            </div>
        </div>
    )
}




export default Homepage;