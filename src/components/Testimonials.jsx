import LineGradient from "./LineGradient";
import {motion} from "framer-motion";
import { FaQuoteLeft,FaQuoteRight  } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


const Testimonials = ()=>{

    const feedBack = [
        {
           text:`Suleman is a highly skilled developer I’ve worked with for the past 6 years. 
           His responsiveness and efficiency keep projects on track and meet deadlines. His expertise 
           and reliability make him an invaluable asset. It’s been a pleasure collaborating with him.`,
           author:'Abigail S',
           icon:'../assets/abigail.png'
        },
        {
           text:`Absolutely amazing job, Quick turnaround, built complete store and explained things
            to me in a video so that i can handle things in future.I will definitely recommend Suleman.
             for Shopify Website Design. Thank you very much!`,
           author:'Buddy J',
           icon:'../assets/no-pic.svg'
        },
        {
           text:`Working with Suleman was a fantastic experience. He delivered everything exactly to our 
           specifications on the first attempt. Any revisions were handled swiftly. His communication was
            excellent, and the job was completed promptly. We'll definitely hire him again!`,
           author:'Annie',
           icon:'../assets/annie.jpg'
        },
        {
           text:`I highly recommend Suleman! He was communicative, helpful, and friendly. 
           The design exceeded my expectations—simple, elegant, and user-friendly. 
           He even took the time to teach me how to manage Shopify on my own. Thumbs up!"`,
           author:'Bilal',
           icon:'../assets/bilal.png'
        },
        {
           text:`The work was of outstanding quality, showing excellent professionalism and meticulous 
           attention to detail. Communication was very good, with prompt responses to any questions or 
           concerns. Overall, it was a fantastic experience, and I highly recommend their top-notch service. Thank you for the excellent work.`,
           author:'Eilever',
           icon:'../assets/eilever.png'
        },
        {
           text:`Having worked with many freelancers, Suleman stands out as exceptional. 
           He's incredibly helpful, insightful, and patient. He delivers exactly what he promises in a 
           timely manner, making him a top choice for reliable service. Thank you for the excellent work.`,
           author:'Leo',
           icon:'../assets/leo.png'
        },
        {
           text:`Suleman did an excellent job editing my webshop. The collaboration was quick and seamless.
            I highly recommend him and will certainly work with him again in the future. His efficiency and
             expertise were top-notch.`,
           author:'Farouk',
           icon:'../assets/farouk.png'
        },
        {
           text:`I’ve worked with him multiple times and am consistently impressed with the quality 
           of his work. He’s highly skilled and communicates excellently. 
           I wholeheartedly recommend him for his competence and reliability.`,
           author:'Matty',
           icon:'../assets/matty.png'
        },
        {
           text:`Suleman and I have collaborated for months on my website, adding custom functionalities, 
           fixing issues, and providing valuable advice. He’s a reliable long-term partner 
           I trust completely. Highly recommended!`,
           author:'Pauline',
           icon:'../assets/pauline.png'
        },
        {
           text:`The work was of the highest quality, with great professionalism and attention to detail.
            Communication was very good, with prompt responses to all questions. I was impressed by the
            responsiveness and efficiency.
            Highly recommended for top-notch service. Thanks!`,
           author:'Cindy',
           icon:'../assets/cindy.png'
        },
        {
           text:`Suleman excels at Shopify, from fixing errors to designing custom pages and sections. 
           He is highly skilled, with top-notch communication throughout. Thanks for the great work—I’ll 
           definitely hire you again!`,
           author:'Gabrial',
           icon:'../assets/Gabrial.png'
        },
        {
           text:`I’ve worked with Suleman for a few months and am always extremely satisfied. His communication
            is fluent, he understands tasks perfectly, 
           and he’s willing to go the extra mile to ensure perfection. He’s consistently available and 
           quick!`,
           author:'Maaz',
           icon:'../assets/maaz.png'
        },
        {
           text:`Suleman fixed my GoDaddy site’s functionality efficiently and knew exactly what to do. 
           He’s now working on my Shopify shop. Always available and happy to discuss project details via 
           Skype, which is very helpful and reassuring.`,
           author:'Kiran',
           icon:'../assets/no-pic.svg'
        }
    ];
    return (
    <section id="testimonials" className="pt-20 pb-20">
        {/* heading */}
        <motion.div
        className="text-center mb-16"
        initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
             transition={{duration:0.5}}
             variants={{
                hidden:{opacity:0,x:-100},
                visible:{opacity:1,x:0}
             }}>
            <p className="text-center font-semibold text-2xl xs:text-4xl sm:text-5xl md:text-4xl w-max mx-auto mb-5">
                TESTIMONIALS
                <LineGradient/>
            </p>
            <p className="mt-10 text-center md:w-1/3 mx-auto font-semibold">
                Endorsements from past clients!
            </p>
        </motion.div>

        {/* Testimonials */}
        <div>
            <Swiper
                spaceBetween={30}
                slidesPerView={1} // Default slides per view
                navigation
                modules={[Navigation, Pagination]}
                breakpoints={{
                    // When window width is >= 768px (i.e. tablets or larger devices)
                    768: {
                    slidesPerView: 2, // 2 slides on tablets
                    },
                    // When window width is >= 1024px (i.e. desktops)
                    1024: {
                    slidesPerView: 3, // 3 slides on larger screens
                    },
                }}
                >
                {feedBack.map((item,index)=>(
                    <SwiperSlide key={index}>
                        <motion.div className="min-h-[502px] flex flex-col justify-between mb-0 text-center bg-grey p-5 border rounded-3xl border-border-custom" 
                            initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                            transition={{duration:0.5}}
                            variants={{
                                hidden:{opacity:0,scale:0.8},
                                visible:{opacity:1,scale:1}
                            }}>
                            <img className="mx-auto w-[100px] h-[100px] rounded-full" src={item.icon}/>
                            <FaQuoteLeft size={40} fill="#efea30" className="mt-5" /> 
                            <p className="text-sm font-semibold">
                               {item.text}
                            </p>
                            <FaQuoteRight size={40} fill="#efea30" className="ml-auto mb-5"/>
                            <p className="text-center font-semibold text-yellow">{item.author}</p>
                            
                        </motion.div>
                    </SwiperSlide>
                ))}
               
               
            </Swiper>
        </div>

        {/* video testimonial */}
        <div className="mt-10">
            <video className="w-full sm:w-10/12 mx-auto rounded-md" controls playsInline muted >
               <source src="../assets/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
        </div>
       
    </section>
   )
}

export default Testimonials;