import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';
import DefaultButton from '../components/DefaultButton.jsx';

function Contact() {
    return (
        <div className="font-custom">
            <Navigation />

            <div className="bg-cover bg-center bg-no-repeat bg-gray-700 bg-blend-multiply text-center py-40" style={{ backgroundImage: 'url(/contact.jpeg)', height: '350px' }}>
                <h3 className="mb-4 text-cm font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"> Get in touch </h3>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16  lg:px-48  md:text-center ">Creating bridges of knowledge </p>
            </div>

            <div className='py-8'>
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
                    <form onSubmit='#' className='my-4 xl:w-2/5 xl:flex xl:flex-col'
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



            </div>


            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Contact;