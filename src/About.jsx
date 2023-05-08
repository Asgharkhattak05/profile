import React from "react";
import Common from "./Common";
import about from "./images/about.png"

const About = () =>{
    return(
        <>
          <Common name="Welcome to About Page" imgsrc={about} visit="/contact" btname="Contact Now"/>
        </>
    )
}
export default About;