import React from 'react'
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => 
 (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className="flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6"></div>
    </section>
  )

export default Hero
