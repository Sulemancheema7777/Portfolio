import {motion} from "framer-motion"
import TechStack from "./TechStack";
import { FaShopify,FaLaptopCode,FaPeopleGroup,FaStore  } from "react-icons/fa6";
import LineGradient from "./LineGradient";


const MySkills = ()=>{

   const skillsArray = [
      {
         icon:<FaShopify className="hover:cursor-pointer hover:scale-110 transition duration-500"
                    size={20} fill="#EFEA30" />,
         title:'Shopify Store Setup',
         description:`I provide a hassle-free Shopify store setup, handling 
         everything from essential page creation to payment gateway and
        shipping configuration. With my expertise, your store will be visually appealing,
         fully functional, and optimized for maximum sales potential. Let me take care of the
          technical details while you focus on growing your business with a successful online store.`
      },
      {
         icon:<FaLaptopCode className="hover:cursor-pointer hover:scale-110 transition duration-500"
                    size={20} fill="#EFEA30" />,
         title:'Coding Custom Features',
         description:`I specialize in custom coding solutions that adapt your Shopify store to your 
         exact requirements. From personalizing the look and structure of your theme to integrating distinct 
         features and optimizing functionality, I have the expertise to turn your vision into reality. 
         Additionally, I provide smooth and secure migration services to ensure a hassle-free transition for
          your online store.`
      },
      {
         icon:<FaPeopleGroup className="hover:cursor-pointer hover:scale-110 transition duration-500"
                    size={20} fill="#EFEA30" />,
         title:'Consultancy/Discussion',
         description:`As a Certified Shopify Consultant, I offer expert advice to maximize your 
         e-commerce success. Whether you're launching a new store or optimizing an existing one, 
         my tailored consultation covers everything from choosing the right plan and themes to 
         implementing effective marketing strategies. I’ll provide actionable insights and solutions
          to boost your online store's performance and drive sales, focusing on your unique goals and
           challenges.`
      },
       {
         icon:<FaStore className="hover:cursor-pointer hover:scale-110 transition duration-500"
                    size={20} fill="#EFEA30" />,
         title:'Shopify+ Solution / Apps',
         description:`With my expertise in Shopify Plus, I deliver advanced solutions and features not 
         available on other plans, eliminating the need for multiple apps for checkout customizations, 
         discounts, bundles, and subscriptions. Leveraging Shopify Plus's built-in functions, I can enhance
          your store’s efficiency and provide a seamless shopping experience, all while saving you money.`
       }
   ];

    return (
   <section id="skills" className="pt-20 pb-20">

      {/* HEADING  */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
             transition={{duration:0.5}}
             variants={{
                hidden:{opacity:0,y:-100},
                visible:{opacity:1,y:0}
             }}>
            <div>
                <p className="font-semibold text-2xl xs:text-4xl sm:text-5xl md:text-4xl w-max mx-auto mb-5 text-yellow">
                  SKILLS / SERVICES
                  <LineGradient />
                </p>
                <TechStack/>
            </div>
      </motion.div>
    {/* skills */}
    <div className="md:flex flex-wrap md:justify-between mt-16 gap-[2%]">
      {
         skillsArray.map((item,index)=>(
                  <motion.div key={index} className="md:w-[49%] mt-6 bg-grey p-5 border rounded-3xl border-border-custom"
                   initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                  transition={{duration:0.5}}
                  variants={{
                     hidden:{opacity:0,y:100},
                     visible:{opacity:1,y:0}
                  }}>
                  <div className="flex justify-center items-center gap-3">
                        {item.icon}
                        <p className="font-semibold text-base sm:text-xl text-yellow"> {item.title} </p>
                  </div>
                  <p className="mt-5 text-justify">
                        {item.description}
                  </p>
            </motion.div>
          ))}
    </div>
   </section>
   );
}

export default MySkills; 