import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';

function Publications() {
    return (
        <div className="font-custom">
            <Navigation />

            <div className="bg-cover bg-center bg-no-repeat bg-gray-700 bg-blend-multiply text-center py-40" style={{ backgroundImage: 'url(/publications.jpg)', height: '350px' }}>
                <h3 className="mb-4 text-cm font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"> Publications </h3>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16  lg:px-48  md:text-center ">Selected publications by Dr. Obadina</p>
            </div>

            <div className='py-8'>
                {/* Thesis  */}
                <div className='px-8'>
                    <h4 className='py-4 text-cm font-extrabold text-primaryGreen'>Dissertation/Thesis </h4>
                    <li className='py-2'>Obadina, A.O. (1998): Studies into the Microbiological Safety of fermenting cassava mash ‘Lafun’. B.Sc. Project, Department of Food Science and Technology, University of Agriculture, Abeokuta, Nigeria.</li>
                    <li className='py-2'>Obadina, A.O. (2000): Studies into the Antimicrobial Activities of Lactobacillus plantarum in fermenting Maize ‘Ogi’. M.Sc. Dissertation, Department of Food Science and Technology, University of Agriculture, Abeokuta, Nigeria..</li>
                    <li className='py-2'> Obadina, A.O. (2006): Evaluation of Microbiological Safety and Quality of Fermented cassava ‘fufu’. Ph.D. Thesis, Department of Food Science and Technology, University of Agriculture, Abeokuta, Nigeria.</li>
                </div>

                {/* Journals  */}
                <div className='px-8'>
                    <h4 className='py-4 text-cm font-extrabold text-primaryGreen'> Journal articles in print </h4>

                    <li className='py-2'>Obadina, A.O., Oyewole, O.B. and Odubayo, M.O. (2007) Effect of storage on the safety and quality of fufu flour. Journal of Food Safety 27 (2): 148-156. Published by John Wiley & Sons Ltd, United Kingdom. Available online at: DOI: 10.1111/j.1745-4565.2007. 00068.x</li>

                    <li className='py-2'>Obadina, A.O., Oyewole, O.B. (2007). Assessment of the antimicrobial potential of roselle juice (zobo) from different varieties of roselle calyx. Journal of Food Processing and Preservation. 31(5): 607-617. Published by John Wiley & Sons Ltd, United Kingdom. Available online at: DOI: 10.1111/j.1745-4549.2007. 00151.x</li>

                    <li className='py-2'>Obadina, A.O., Oyewole, O.B., Sanni, L.O., Keith, T.I., and Westby A. (2008). Identification of hazards and Critical Control Points (CCP) for Cassava ‘fufu’ processing in South-West Nigeria. Food Control 19: 22-26. Published by Elsevier, Maryland Height, U.S.A. Available online at: DOI: 10.1016/j.foodcont.2007.01.002</li>

                    <li className='py-2'>Obadina, A.O., Oyewol
                        e, O.B. and Ogundipe, F.O. (2009). Effect of packaging material on the spoilage and shelf-life of cooked ‘fufu’. Nigerian Food Journal. 27: 17 – 24. Published by Nigerian Institute of Food Science and Technology. Available online <a href="http://www.nifst.org"> here.</a></li>

                    <li className='py-2'>Obadina, A.O., Oyewole, O.B., Sanni, L.O., Keith, T.I., and Westby A. (2010). Improvement of the hygienic quality of wet &apos;fufu&apos; produced in South-West Nigeria. Food Control 21: 639-643. Published by Elsevier, Maryland Height, U.S.A. Available online at: DOI: 10.1016/J.FOODCONT.2009.09.009</li>

                    <li>Obadina, A.O., Oyewole, O.B. and Olaleye, A.O. (2010). Development and Evaluation of fortified tapioca meal with coconut and banana pulp. Nigerian Food Journal, 28: 294-301. Published by Nigerian Institute of Food Science and Technology. Available online <a href="http://www.nifst.org"> here.</a></li>

                    <li className='py-2'>
                        Obadina, A.O., Oyewole, O.B. and Archibong, U.E. (2011). Effect of processing on the qualities of noodles produced from corn grit and cassava flour. International Food Research Journal, 18 (4): 60 – 64. Published by Universiti Putra Malaysia. Available online <a href="http://www.ifrj.upm.edu.my/18%20(04)%202011/(50)IFRJ-2011-124.pdf">here.</a>
                    </li>

                    <li className='py-2 '>Obadina, A.O. and Ogundimu, A.A. (2011). Microbial contamination of Selected Dietary Supplements in A Typical Tropical Market in Nigeria. Nigerian Food Journal. 29 1: 41 - 45. Published by Nigerian Institute of Food Science and Technology. Available online <a href="http://www.nifst.org"> here.</a></li>

                </div>

            </div>


            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Publications;