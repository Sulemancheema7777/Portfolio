import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";





const Landing = ({setSelectedPage})=>{

    return(
     <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
        {/* image part */}
        <div className="md:order-2 flex justify-center basis-[40%] z-10 mt-8">

                <img alt="profile" src="../assets/sulemancheema.jpeg"
                    className=" w-full max-w-[450px] rounded-md border-yellow border-4"/>
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
              <h2 className="font-bold text-center text-2xl xs:text-4xl sm:text-5xl md:text-4xl md:text-start ">
                Suleman <span className="text-yellow">Cheema</span>
                <span className="text-yellow  text-lg"> ( Shopify Developer ) </span>
              </h2>

              <li className="ml-4 mt-5 mb-1 text-sm text-justify">
                  <span className="text-yellow">As a Shopify Developer, </span>
                   I specialize in creating highly customized, conversion-focused e-commerce websites.
              </li>
              <li className="ml-4 mb-1 text-sm text-justify">
                  Working and building  <span className="text-yellow">custom shopify themes </span>
                  that aligns with the user's demand.
              </li>
              <li className="ml-4 mb-1 text-sm text-justify  ">
                  Making custom changes to <span className="text-yellow"> shopify's product page,collection page  </span>
                   and developing other custom pages.
              </li>
              <li className="ml-4 mb-1 text-sm text-justify  ">
                  Checkout  <span className="text-yellow"> app integration </span>
                  and configuring shipping policies.
              </li>
              <li className="ml-4 mb-1 text-sm text-justify  ">
                  Working on <span className="text-yellow"> Checkout extensions, discounts </span>
                  and displaying up sell on the checkout page.
              </li>
              <li className="ml-4 mb-1 text-sm text-justify  ">
                  Cart <span className="text-yellow"> free shipping and up sell </span>
                  plus trust badges.
              </li>
              <li className="ml-4 mb-1 text-sm text-justify  ">
                  Landing page  <span className="text-yellow"> testimonials and custom sections </span>
                  to build trust.
              </li>

              <li className="ml-4 mb-1 text-sm text-justify  ">
                  Converting  <span className="text-yellow"> figma to shopify </span>
                  pixel perfect design.
              </li>

              <li className="ml-4 mb-1 text-sm text-justify  ">
                  Understanding of  <span className="text-yellow"> Liquid, Html, css, JavaScript </span>
                  and 2.0 themes of Shopify.
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