import {motion} from "framer-motion"
import TechStack from "./TechStack";
import { FaShopify,FaLaptopCode,FaPeopleGroup,FaStore  } from "react-icons/fa6";
import LineGradient from "./LineGradient";


const MySkills = ()=>{

   const skillsArray = [
      {
         icon:<FaShopify className="hover:cursor-pointer hover:scale-110 transition duration-500"
                    size={20} fill="#EFEA30" />,
         title:'Shopify Store Setup & Development',
         description:`I provide professional Shopify store setup and development, 
         handling everything from essential page creation to payment gateway integration 
         and shipping configuration.Your Shopify store will be visually appealing, fully 
         functional, and optimized for conversions. I make sure your store is ready to sell 
         from day one while you focus on growing your business.`
      },
      {
         icon:<FaLaptopCode className="hover:cursor-pointer hover:scale-110 transition duration-500"
                    size={20} fill="#EFEA30" />,
         title:'Custom Shopify Features & Theme Development',
         description:`I specialize in custom Shopify development, creating tailored features 
         that match your business needs. From customizing Shopify themes and product pages to building unique
         functionality and integrations, I turn your ideas into powerful e-commerce solutions. I also provide 
         Shopify store migration services, ensuring a smooth and secure transition from platforms like 
         WooCommerce, Magento, or BigCommerce.`
      },
      {
         icon:<FaPeopleGroup className="hover:cursor-pointer hover:scale-110 transition duration-500"
                    size={20} fill="#EFEA30" />,
         title:'Shopify Consultation & Store Optimization',
         description:`As an experienced Shopify consultant, I help businesses make
          the right decisions for their e-commerce stores. Whether you're launching a 
          new Shopify store or improving an existing one, I provide strategic guidance on store 
          structure, theme selection, conversion optimization, and performance improvements.
          My goal is to help you increase conversions, improve user experience, and grow your Shopify 
          business.`
      },
       {
         icon:<FaStore className="hover:cursor-pointer hover:scale-110 transition duration-500"
                    size={20} fill="#EFEA30" />,
         title:'Shopify Plus Development & Advanced Solutions',
         description:`I provide Shopify Plus development services, helping growing brands unlock the advanced 
         capabilities of Shopify Plus. From checkout customization and advanced discounts to bundles, 
         subscriptions, and automation, I build powerful solutions that reduce reliance on multiple 
         apps and improve your store’s performance. Using Shopify Plus features and custom development, 
         I create scalable solutions that support your business as it grows.`
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
                <p className="font-semibold text-2xl xs:text-4xl sm:text-5xl md:text-4xl w-100 mx-auto mb-5 text-yellow">
                  Shopify Development Services
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