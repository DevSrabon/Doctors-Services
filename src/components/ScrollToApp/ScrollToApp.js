import React, { useEffect, useState } from "react";
import "../../App.css"
const ScrollToApp = () => {
	const [showScrollApp, setShowScrollApp] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => { 

            if (window.scrollY > 400) {
                setShowScrollApp(true);
            } else {
                setShowScrollApp(false);
            }
        })
	}, []);
    return (
			<>
				<a
					rel="noreferrer"
					href="https://wa.me/+8801864361681"
					target={"_blank"}
					className={`${showScrollApp && "btn-position"} btn-hidden`}>
					<img
						src="https://www.wanderon.in/svg/call-icon/whatsapp.svg"
						alt=""
					/>
				</a>
			</>
		);
};

export default ScrollToApp;
