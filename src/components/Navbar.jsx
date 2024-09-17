import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({page,selectedPage,setSelectedPage,setIsMenuToggled=true,isAboveSmallScreen=true})=>{
    let lowerCasePage = page.toLowerCase();
    
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow":"text-white"}
         hover:text-yellow transition duration-500 capitalize`}
         href={`#${lowerCasePage}`}
         onClick={()=> { 
                          setSelectedPage(lowerCasePage);
                          if(!isAboveSmallScreen)  setIsMenuToggled(false);
                       }
                   }>
            {lowerCasePage === 'home' ? "SulemanCheema" : page}
        </AnchorLink>
    )
}
const Navbar =  ({isTopOfPage,selectedPage,setSelectedPage})=>{
    const [isMenuToggled,setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery('(min-width:768px)');
    const navBarBackground  = isTopOfPage?"":"fixed border-b-0 shadow-md bg-black";
    const navLinks = ['skills','projects','testimonials','contact'];

    return(
        <nav className={`${ navBarBackground}   z-40 w-full py-3 transition duration-500 border-b-2 border-white`}>
            <div className={`flex items-center justify-between mx-auto w-5/6`}>
                <h4 className="text-xl xs:text-3xl font-bold text-white">
                    <Link
                    page="home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                </h4>
                {/* desktop navigation */}
                {isAboveSmallScreen ? 
                (
                <div className="flex justify-between gap-8 text-sm font-bold">
                    {navLinks.map((element, index) => (
                        <Link
                        key={index}
                        page={element}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                    ))}
                </div>):
                (<div>
                    <button className="rounded-full bg-yellow p-2"
                    onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                        <img src="../assets/menu-icon.svg" alt="menu-icon"/>
                    </button>
                </div>)
                }
                {/* mobile menu drawer */}
                <div className={`fixed right-0 bottom-0 h-full bg-black pl-10 pr-4 w-full transition-all duration-500 
                        ${isMenuToggled ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                        {/* Close button */}
                        <div className="flex justify-end pt-3">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img src="../assets/close-icon.svg" alt="close-icon" className="w-[40px]"/>
                            </button>
                        </div>

                        {/* Menu items for mobile */}
                        <div className="flex flex-col gap-10 text-2xl">
                            {navLinks.map((element, index) => (
                                <Link
                                key={index}
                                page={element}
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                setIsMenuToggled={setIsMenuToggled}
                                isAboveSmallScreen={isAboveSmallScreen}
                                />
                            ))}
                        </div>
                    </div>

            </div>
        </nav>
    )
}

export default Navbar;