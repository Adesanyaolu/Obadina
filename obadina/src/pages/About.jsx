import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';


function About() {
  return (
    <div className="font-custom">
      <Navigation />
      {/* Hero Section  */}
      <section className="bg-center bg-no-repeat bg-[url('/obadina3.jpg')] bg-gray-700 bg-blend-multiply" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="px-8 mx-auto max-w-screen-xl text-left py-24 lg:py-56">
          <h3 className="mb-4 text-cm font-extrabold tracking-tight  text-white md:text-5xl lg:text-6xl"> <span className="text-primaryGreen">Hello</span> , I’m Dr Adewale Obadina </h3>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Dr  Obadina isn’t just a Professor of Food Safety and Biotechnology at the Federal University of Agriculture, Abeokuta, Nigeria, He is also a visiting Professor at the Department of Biotechnology and Food Technology, University of Johannesburg, South Africa (2022 – 2027) and
            Adjunct Visiting Professor, Department of Microbiology, Babcock University, Nigeria.</p>
          <div >
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-primaryGreen hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              CV / Resume
            </a>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <div className='m-8'>
        <h4 className='py-4 text-cm font-extrabold text-primaryGreen'>About me</h4>
        <p>Dr Obadina served as the Director of Biotechnology Centre from 2016 – 2019 and Head of Department, Food Science and Technology (2019 – 2021) at Federal University of Agriculture, Abeokuta, Nigeria. He was a member of Board of Director; International Union of Food Science and Technology (IUFoST) between 2020 – 2022; African Continental Association of Food Protection (ACAFP) – 2019 till date; Chair, Global Harmonization Initiative (GHI) Food Safety Education and Training Working Group (2022 – till date); member of African Union Expert on Food Safety (2021 – till date) and member of food safety experts for WHO Guideline Development Group (DGD) – Traditional Markets (2023-2025). Also, a grantee and Research Associateship Fellow of The World Academy of Sciences (TWAS) with research interest in improving the quality and safety of processed, and ready-to-eat foods. He was a visiting scholar for an EU Erasmus Mundus M.Sc. programme at Katholie University, Gent, Belgium and Dublin Institute of Technology, Ireland to teach Courses in Food
          Safety and Food Nutrition (2009-2010).</p>
      </div>

      {/* Section 2  */}
      <div className='bg-lightGreen'>
        <div className='m-8 '>
          <h4 className='py-4 text-cm font-extrabold text-primaryGreen'>Teaching vision</h4>
          <p>I believe my foreign background is a conduit to a world outside the American educational experience, I can synthesize my background in classrooms with a distinctive set of pedagogical approach influenced by the U.S. tertiary education system. It is also my responsibility to challenge and support my students, in pursuit of learning goals by confronting misconceptions about crucial food science ideas and concepts, cultivate their interest in science. I belief it is also my duty  to make my class interesting and conducive for learning. I encourage students to eliminate their microbe-phobia, by introducing the benefits of microorganisms, starting with topics that are directly related to everyday food.</p>
        </div>
      </div>

      {/* Sction 3 */}
      <div className='m-8 '>
        <h4 className='py-4 text-cm font-extrabold text-primaryGreen'>Education </h4>
        <hr className='py-2' />
        <p className='py-2'>PhD, University of Agriculture Abeokuta, 2006</p>
        <p className='py-2'>M.Sc., University of Agriculture Abeokuta, 2002</p>
        <p className='py-2'>B.Sc., University of Agriculture Abeokuta, 1998</p>
      </div>

      {/* Sction 3 */}
      <div className='m-8 '>
        <h4 className='py-4 text-cm font-extrabold text-primaryGreen'>Awards received </h4>
        <hr className='py-2' />

        <li className='py-2'>DAAD (Deutscher Akademischer Austauch Dienst German Academic Exchange Service) Staff Exchange Award for three months at University of Johannesburg, South Africa, September - November 2014.</li>
        <li className='py-2'>Travel Award from ANAFE and invitation to attend workshop on collaborative writing of contextualized textbooks for learning on Agricultural Risks Management and Agribusiness sponsored by ANAFE in Cote d’Ivoire between 9 – 13 December 2013.</li>

        <li className='py-2'>STEP-B award to visit Department of Food Science and Nutrition, University of Maryland, USA as Visiting Scholar between July-September 2013.</li>

        <li className='py-2'>Grant Award – offered by Agropolis Foundation to attend the International Young Researchers Seminar 2010 ‘’Exploring Agricultural Research for the future: a dialogue between young researchers from the South and the North’’ and GCARD meeting, 25th – 31st March 2010 in Montpellier, France.</li>

        <li className='py-2'>International Union of Food Science and Technology (IUFoST) Young Scientist Award among seven awardees to address the World Food Scientists at the 14th World Congress of Food Science and Technology, October 19th - 23rd, 2008 in Shanghai, China.</li>

        <li className='py-2'>Grant Award - offered by The Graduate School VLAG to attend 10th International Advanced Course on &apos;Management of Microbiological Hazards in Foods&apos; in Wageningen. November 19th - 23rd, 2007.</li>

        <li className='py-2'>Travel Grant Award - offered by Moroccan Nutrition Societies to present a paper during the 1st Federated of African Nutrition Society (FANUS) conference in Quarzazate, Morocco. May 7th - 9th, 2007.</li>

        <li className='py-2'>Grant/Scholarship Award – offered by the International Committee on Food Microbiology and Hygiene (ICFMH) to present a paper during the 20th International ICFMH symposium: Food Micro 2006 “Food Safety and Food Biotechnology: Diversity and Global Impact” in Italy. August 29th – September 3rd. 2006</li>
      </div>

      {/* Footer  */}
      <Footer />
    </div>
  );
}

export default About;
