import SocialMediaIcons from "./SocialMediaIcons";
import LineGradient from "./LineGradient"
import {useForm} from "react-hook-form";
import {motion} from "framer-motion";
import { FaSquareWhatsapp,FaEnvelope,FaLocationDot   } from "react-icons/fa6";

const Contact = ()=>{
    const {register,trigger,
        formState:{errors}
    } = useForm();

    const onSubmit = async (e)=>{
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }
  return (
   <section id="contact" className="py-20">
        {/* headings */}
        <motion.div
            initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0,x:-100},
                    visible:{opacity:1,x:0}
                }}>
                <div className="text-center">
                <p className="text-yellow font-semibold text-2xl xs:text-4xl sm:text-5xl md:text-4xl w-max mx-auto mb-5">
                        CONTACT ME!
                        <LineGradient/>
                    </p>
                    <p className="w-full sm:w-4/6 mx-auto text-lg text-center font-semibold mt-10">
                    You have Anything on your mind, don't hesitate to get in touch with me!
                    We can always have a discussion and find a solution.
                    </p>
                </div>
        </motion.div>

        {/* form and image */}
        <div className="md:flex md:justify-between items-center gap-16 mt-20">

            <motion.div className="basis-1/2 flex flex-col justify-between gap-8"
             initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
             transition={{duration:0.5}}
             variants={{
                hidden:{opacity:0,y:-100},
                visible:{opacity:1,y:0}
             }}>
                
                {/* whatspp me */}
                   <div className="flex flex-col">
                        <p className="text-yellow text-sm flex justify-center md:justify-start items-center gap-2">
                           <FaSquareWhatsapp size={20} fill="#efea30"/> Whatsapp Me!
                        </p>
                        <a className="underline text-base text-center md:text-start" href="https://wa.me/+923348658244">
                        +92 334 8658244
                        </a>
                   </div>


                {/* mail me */}
                   <div className="flex flex-col">
                        <p className="text-yellow text-sm flex justify-center md:justify-start items-center gap-2">
                           <FaEnvelope  size={20} fill="#efea30"/> Mail Me!
                        </p>
                        <a  className="underline text-base text-center md:text-start" href="https://mailto:sulemancheema1992@gmail.com">
                        sulemancheema1992@gmail.com
                        </a>
                   </div>

                {/* address */}
                   <div className="flex flex-col">
                    <p className="text-yellow text-sm flex justify-center md:justify-start items-center gap-2">
                       <FaLocationDot   size={20} fill="#efea30"/> Location
                    </p>
                    <p className="text-base text-center md:text-start">
                        Islamabad, Pakistan.
                    </p>
                   </div>

                {/* social media */}
                <SocialMediaIcons/>
            </motion.div>

            <motion.div className="basis-1/2 mt-10"
             initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
             transition={{delay:0.2,duration:0.5}}
             variants={{
                hidden:{opacity:0,y:-100},
                visible:{opacity:1,y:0}
             }}>
               <form
               target="_blank"
               onSubmit={onSubmit}
               action="https://formsubmit.co/8746f18c071fca883211eb7e2cbbe72f"
               method="POST"
               >
                <input
                className="w-full bg-grey font-semibold placeholder-white p-5 rounded-md outline-none focus:border-2 transition duration-500"
                type="text"
                placeholder="Name*"
                {...register("name",{
                    required:true,
                    maxLength:60
                })}
                />
                {errors.name && (
                    <p className="text-yellow mt-1">
                        {errors.name.type === "required" && "This is required" }
                        {errors.name.type === "maxLength" && "Maximum Character Allowed 60" }
                    </p>
                )}
                 
                 <input
                className="w-full mt-5 bg-grey font-semibold placeholder-white p-5 rounded-md outline-none focus:border-2 transition duration-500"
                type="text"
                placeholder="Email*"
                {...register("email",{
                    required:true,
                    pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Please enter a valid email address'

                })}
                />
                {errors.email && (
                    <p className="text-yellow mt-1 ">
                        {errors.email.type === "required" && "This is required" }
                        {errors.email.type === "pattern" && "Enter a Valid Email" }
                    </p>
                )}

                <input
                className="mt-5 w-full bg-grey font-semibold placeholder-white p-5 rounded-md outline-none focus:border-2 transition duration-500"
                type="text"
                placeholder="Subject*"
                {...register("subject",{
                    required:true,
                    maxLength:100
                })}
                />
                {errors.subject && (
                    <p className="text-yellow mt-1">
                        {errors.subject.type === "required" && "This is required" }
                        {errors.subject.type === "maxLength" && "Maximum Character Allowed 100" }
                    </p>
                )}

                 <textarea
                className="w-full mt-5 bg-grey font-semibold placeholder-white p-5 rounded-md outline-none focus:border-2 transition duration-500"
                type="text"
                rows="4"
                cols="50"
                placeholder="Message*"
                {...register("message",{
                    required:true,
                    maxLength:2000

                })}
                />
                {errors.message && (
                    <p className="text-yellow mt-1 ">
                        {errors.message.type === "required" && "This is required" }
                        {errors.message.type === "maxLength" && "2000 chars Allowed" }
                    </p>
                )}

                <button type="submit"
                className="mt-5 flex justify-start items-center gap-2 bg-yellow text-black rounded-full py-3 px-7
              font-semibold hover:bg-white transition duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 46 40" fill="none">
                <path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" 
                fill="#000000" stroke="#000000"></path>
                <rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="#000000"></rect>
                <path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" 
                stroke="#000000" strokeWidth="2" strokeLinecap="round"></path></svg>
                    Get In Touch!
                </button>
               </form>
             </motion.div>
        </div>

   </section>
  );
}

export default Contact;