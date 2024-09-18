import { DiHtml5,DiCss3 } from "react-icons/di";
import { FaNodeJs,FaReact,FaGithub,FaShopify } from "react-icons/fa6";


const TechStack = ()=>{
    return(
        <div className="flex justify-center items-center gap-7">
                <DiHtml5 className="hover:cursor-pointer hover:scale-110 transition duration-500"
                 size={50} fill="#efea30" />
                <DiCss3 className="hover:cursor-pointer hover:scale-110 transition duration-500"
                size={50} fill="#efea30" />
                <FaNodeJs className="hover:cursor-pointer hover:scale-110 transition duration-500"
                size={50} fill="#efea30" />
                <FaReact className="hover:cursor-pointer hover:scale-110 transition duration-500"
                size={50} fill="#efea30" />
                <FaGithub className="hover:cursor-pointer hover:scale-110 transition duration-500"
                size={50} fill="#efea30" />
                <FaShopify className="hover:cursor-pointer hover:scale-110 transition duration-500"
                size={50} fill="#efea30" />
        </div>
    )
}

export default TechStack;
