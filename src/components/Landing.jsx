import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";





const Landing = ({setSelectedPage})=>{

    return(
     <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 pt-20 pb-10">
        {/* image part */}
        <div className="md:order-2 flex justify-center basis-[40%] z-10 mt-8">

                <img alt="profile" src="../assets/sulemancheema.png"
                    className=" w-full max-w-[450px]  rounded-xl border-yellow border-2"/>
        </div>
        {/* text part */}
        <div className="z-30 basis-[60%] mt-12 md:mt-8">
             {/* heading */}
             <motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
             transition={{duration:0.5}}
             variants={{
                hidden:{opacity:0,x:-100},
                visible:{opacity:1,x:0}
             }}
             >
              <h1 className="mb-1 font-bold text-center text-2xl xs:text-4xl sm:text-5xl md:text-4xl md:text-start ">
                M Suleman <span className="text-yellow">Cheema</span>
              </h1>
              
              
              <h2 className="mb-4 text-center md:text-start">
                I'm a <span className="text-yellow">Shopify Developer</span> specializing in 
                custom Shopify store development, theme customization,
                 and <span className="text-yellow">conversion-focused e-commerce solutions.</span>
              </h2>

              <p className="mb-1 text-justify">
                <span className="text-yellow">Custom Shopify development </span> focused on improving user
                 experience, <span className="text-yellow">increasing conversions, </span> 
                 and turning visitors into <span className="text-yellow">customers. </span> 
                 I help businesses build and <span className="text-yellow">optimize Shopify</span> stores that not only
                 look great but also sell more. From custom product pages and 
                 <span className="text-yellow"> conversion-focused layouts</span> to fixing store issues and improving 
                 the <span className="text-yellow">checkout experience,</span> I work with Shopify brands to create smooth, 
                 fast, and <span className="text-yellow">reliable shopping experiences.</span> Whether you’re launching a new store, 
                redesigning an existing one, or need <span className="text-yellow">advanced customization, </span> 
                I provide tailored Shopify solutions designed to grow your <span className="text-yellow">online business.</span>
            </p>
              <li className="ml-4 mt-5 mb-1 text-sm text-justify">
                Custom Shopify store design and development
              </li>
              <li className="ml-4 mb-1 text-sm text-justify">
                  Conversion-focused product and collection pages
              </li>
              <li className="ml-4 mb-1 text-sm text-justify">
                  Shopify store speed and performance optimization
              </li>
              <li className="ml-4 mb-1 text-sm text-justify">
                  Checkout improvements and upsell features
              </li>
              <li className="ml-4 mb-1 text-sm text-justify">
                  Fixing Shopify bugs and store issues
              </li>
              <li className="ml-4 mb-1 text-sm text-justify">
                  Turning designs (Figma / PSD) into pixel-perfect Shopify stores
              </li>
              
              
             </motion.div>

             {/* call to action */}
             <motion.div className="flex mt-7 justify-center md:justify-start"
             initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
             transition={{delay:0.2,duration:0.5}}
             variants={{
                hidden:{opacity:0,x:-100},
                visible:{opacity:1,x:0}
             }}>

              <AnchorLink className="flex justify-start items-center gap-2 bg-yellow text-black rounded-full py-3 px-7
              font-semibold hover:bg-white transition duration-500"
              onClick={()=> setSelectedPage('contact')}
              href="#contact">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 46 40" fill="none">
                <path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" 
                fill="#000000" stroke="#000000"></path>
                <rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="#000000"></rect>
                <path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" 
                stroke="#000000" strokeWidth="2" strokeLinecap="round"></path></svg>
                Get In Touch!
              </AnchorLink>
             </motion.div>

             
        </div>
        
     </section> 
   )
}

export default Landing;