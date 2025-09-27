import React from "react";
import about from "../assets/images/about-hero.png"
export default function About(){
    return (
        <section className="about">
        <div className="img"><img src={about} className=" about-img about-page-img" /></div>
        <main>
            <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
            <div className="content-box">
            <p className="firstText">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
            </p>
            <p className="secondText">
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
        </div>
        <div className="lastbox">
            <h6>Your destination is waiting.
                Your van is ready.</h6>
            <button>Explore Your Vans</button>
        </div>
        </main>
        </section>
    )
}