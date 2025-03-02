import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picEXP from "../../assets/walk-4666509_1920.jpg";
import { useState } from "react";

const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    return (
        <div className="grid gap-y-4">
            <div className="text-primaryAccent font-medium">Experience</div>
            <div
                className={`"grid grid-cols-[25%_75%]rounded-md px-2 py-6" transition-all ${isMouseEnter ? "bg-gray-200" : ""}`}
                onMouseEnter={() => setIsMouseEnter(true)}
                onMouseLeave={() => setIsMouseEnter(false)}
            >

                <div>
                    <div>
                        <span className={`text-sm ${isMouseEnter ? "text-primaryTitle" : ""}`}>
                            2022-2023
                        </span>
                    </div>
                    <div>
                        <img src={picEXP} className="w-5/6 rounded-md" />
                    </div>
                </div>
                <div className="grid gap-y-4">

                    <div className={`text-sm ${isMouseEnter ? "text-primaryTitle" : ""}`}>Fashion Ecommerce</div>
                    <div className="flex gap-4">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faMedium} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="text-sm">Create tools for monitoring the backend and implementing self-recovery mechanisms, ensuring their seamless operation 24/7.</div>
                    <div className="flex gap-4 text-sm">
                        <div className={`bg-primaryAccent px-1 py-1 rounded-md ${isMouseEnter ? "textprimaryTitle" : ""}`}>React</div>
                        <div className={`bg-primaryAccent px-1 py-1 rounded-md ${isMouseEnter ? "textprimaryTitle" : ""}`}>Node.js</div>
                        <div className={`bg-primaryAccent px-1 py-1 rounded-md ${isMouseEnter ? "textprimaryTitle" : ""}`}>Express</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[25%_75%] px-2 py-6">
                <div>
                    <div>
                        <span className="text-sm">
                            2022-2023
                        </span>
                    </div>
                    <div>
                        <img src={picEXP} className="w-5/6 rounded-md" />
                        <div className="text-primaryAccent">Fashion Ecommerce</div>
                    </div>
                </div>
                <div className="grid gap-y-4">

                    
                    <div className="flex gap-4">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faMedium} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="text-sm">Create tools for monitoring the backend and implementing self-recovery mechanisms, ensuring their seamless operation 24/7.</div>
                    <div className="flex gap-4 text-sm">
                        <div className="bg-primaryAccent px-1 py-1 rounded-md hover:text-primaryTitle">React</div>
                        <div className="bg-primaryAccent px-1 py-1 rounded-md hover:text-primaryTitle">Node.js</div>
                        <div className="bg-primaryAccent px-1 py-1 rounded-md hover:text-primaryTitle">Express</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[25%_75%] px-2 py-6">
                <div>
                    <div>
                        <span className="text-sm">
                            2022-2023
                        </span>
                    </div>
                    <div>
                        <img src={picEXP} className="w-5/6 rounded-md" />
                    </div>
                </div>
                <div className="grid gap-y-4">

                    <div className="text-primaryAccent">Fashion Ecommerce</div>
                    <div className="flex gap-4">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faMedium} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="text-sm">Create tools for monitoring the backend and implementing self-recovery mechanisms, ensuring their seamless operation 24/7.</div>
                    <div className="flex gap-4 text-sm">
                        <div className="bg-primaryAccent px-1 py-1 rounded-md hover:text-primaryTitle">React</div>
                        <div className="bg-primaryAccent px-1 py-1 rounded-md hover:text-primaryTitle">Node.js</div>
                        <div className="bg-primaryAccent px-1 py-1 rounded-md hover:text-primaryTitle">Express</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience;