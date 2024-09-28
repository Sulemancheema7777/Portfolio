import {motion} from "framer-motion";
import LineGradient from "./LineGradient";
import { SiCoursera } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";


const Certifications = ()=>{

    const certArray = [
      {
         icon:<SiCoursera className="hover:cursor-pointer hover:scale-110 transition duration-500" size={20} fill="#EFEA30" />,
         platform:'Coursera',
         title:`HTML, CSS in Depth`
      },
      {
         icon:<SiCoursera className="hover:cursor-pointer hover:scale-110 transition duration-500" size={20} fill="#EFEA30" />,
         platform:'Coursera',
         title:`HTML, CSS, Javascript for web Developers`
      },
      {
         icon:<SiCoursera className="hover:cursor-pointer hover:scale-110 transition duration-500" size={20} fill="#EFEA30" />,
         platform:'Coursera',
         title:`Programming with Javascript`
      },
      {
         icon:<SiCoursera className="hover:cursor-pointer hover:scale-110 transition duration-500" size={20} fill="#EFEA30" />,
         platform:'Coursera',
         title:`Version Control / GIT`
      },
      {
         icon:<SiCoursera className="hover:cursor-pointer hover:scale-110 transition duration-500" size={20} fill="#EFEA30" />,
         platform:'Coursera',
         title:`Intro to Front-End Development`
      },
      {
         icon:<SiCoursera className="hover:cursor-pointer hover:scale-110 transition duration-500" size={20} fill="#EFEA30" />,
         platform:'Coursera',
         title:`REACT`
      }
    ]

     const qualArray = [
      {
         icon:<FaSchool className="hover:cursor-pointer hover:scale-110 transition duration-500" size={20} fill="#EFEA30" />,
         platform:'LeaderHouse School, Chakwal',
         title:`Matriculation (Computer Science)`
      },
      {
         icon:<FaSchool className="hover:cursor-pointer hover:scale-110 transition duration-500" size={20} fill="#EFEA30" />,
         platform:'Channab College, Chakwal',
         title:`Intermediate (Pre-Engineering)`
      },
      {
         icon:<FaUniversity className="hover:cursor-pointer hover:scale-110 transition duration-500" size={20} fill="#EFEA30" />,
         platform:'UET, Taxila',
         title:`Bachelor in Software Engineering`
      }
    ]
    return (
       <section id="certifications" className="pt-20 pb-20">
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0,y:-100},
                        visible:{opacity:1,y:0}
                    }}>
                        <p className="text-yellow font-semibold text-2xl xs:text-4xl sm:text-5xl md:text-4xl w-max mx-auto mb-5">
                            CERTIFICATIONS
                            <LineGradient/>
                        </p>
            </motion.div>
               <div className="md:flex flex-wrap md:justify-between mt-16 gap-[2%]">
                    {
                        certArray.map((item,index)=>(
                                <motion.div key={index} className="md:w-[32%] mt-6 bg-grey p-5 border rounded-3xl border-border-custom"
                                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                                transition={{duration:0.5}}
                                variants={{
                                    hidden:{opacity:0,y:100},
                                    visible:{opacity:1,y:0}
                                }}>
                                <div className="flex justify-center items-center gap-3">
                                        {item.icon}
                                        <p className="font-semibold text-base sm:text-xl text-yellow"> {item.platform} </p>
                                </div>
                                <p className="mt-5 text-center ">
                                        {item.title}
                                </p>
                            </motion.div>
                        ))}
                    </div>

             <motion.div
                className="md:w-2/4 mx-auto text-center mt-20"
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0,y:-100},
                        visible:{opacity:1,y:0}
                    }}>
                        <p className="text-yellow font-semibold text-2xl xs:text-4xl sm:text-5xl md:text-4xl w-max mx-auto mb-5">
                            QUALIFICATION
                            <LineGradient/>
                        </p>
            </motion.div>
               <div className="md:flex flex-wrap md:justify-between mt-16 gap-[2%]">
                    {
                        qualArray.map((item,index)=>(
                                <motion.div key={index} className="md:w-[32%] mt-6 bg-grey p-5 border rounded-3xl border-border-custom"
                                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                                transition={{duration:0.5}}
                                variants={{
                                    hidden:{opacity:0,y:100},
                                    visible:{opacity:1,y:0}
                                }}>
                                <div className="flex justify-center items-center gap-3">
                                        {item.icon}
                                        <p className="font-semibold text-base sm:text-xl text-yellow"> {item.platform} </p>
                                </div>
                                <p className="mt-5 text-center ">
                                        {item.title}
                                </p>
                            </motion.div>
                        ))}
                    </div>
       </section>
    )
}

export default Certifications;