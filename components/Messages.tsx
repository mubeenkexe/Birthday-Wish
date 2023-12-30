"use client";

import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Messages = () => {
    useEffect(() => {
        gsap.to(".message_heading", {
            opacity: 1,
            duration: 4,
            scrollTrigger: {
                trigger: ".message",
                start: "top 50%",
                end: "bottom",
                scrub: false,
            },
        });
        gsap.to(".message_heading_two", {
            opacity: 1,
            duration: 4,
            scrollTrigger: {
                trigger: ".message_two",
                start: "top 50%",
                end: "bottom",
                scrub: false,
            },
        });
        gsap.to(".message_heading_three", {
            opacity: 1,
            duration: 4,
            scrollTrigger: {
                trigger: ".message_three",
                start: "top 50%",
                end: "bottom",
                scrub: false,
            },
        });


    }, []);

    return (
        <>
            <div className="h-screen bg-black flex justify-center items-center">
                <h2 className="text-center text-white">Swipe down for the message</h2>
            </div>

            <section className="message">
                <h1 className="message_heading">Hello</h1>
            </section>
            <section className="message_two">
                <h1 className="message_heading_two">Epic</h1>
            </section>
            <section className="message_three">
                <h1 className="message_heading_three">World</h1>
            </section>
        </>
    );
};

export default Messages;
