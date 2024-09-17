import { FaLinkedin,FaSquareXTwitter,FaSquareGithub,FaSquareInstagram,FaSquareFacebook } from "react-icons/fa6";

const SocialMediaIcons = ()=>{
    return(
    <div className="flex justify-center md:justify-start items-center gap-4 mt-2">
        <a className="hover:scale-110 transition duration-500"
        href="https://github.com/Sulemancheema7777"
        target="_blank"
        rel="noreferre">
            <FaSquareGithub size={30} fill="#efea30" />
        </a>

        <a className="hover:scale-110 transition duration-500"
        href="https://www.linkedin.com/in/front-end-shopify-developer"
        target="_blank"
        rel="noreferre">
            <FaLinkedin size={30} fill="#efea30" />
        </a>

        <a className="hover:scale-110 transition duration-500"
        href="https://twitter.com/sulemancheema77"
        target="_blank"
        rel="noreferre">
            <FaSquareXTwitter size={30} fill="#efea30" />
        </a>

        <a className="hover:scale-110 transition duration-500"
        href="https://www.facebook.com/sulemancheema7777?mibextid=ZbWKwL"
        target="_blank"
        rel="noreferre">
            <FaSquareFacebook size={30} fill="#efea30" />
        </a>

         <a className="hover:scale-110 transition duration-500"
        href="https://www.instagram.com/sulemancheema7777/"
        target="_blank"
        rel="noreferre">
            <FaSquareInstagram size={30} fill="#efea30" />
        </a>

    </div>
  )
}

export default SocialMediaIcons;