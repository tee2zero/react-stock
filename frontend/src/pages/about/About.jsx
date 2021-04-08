import React from "react";

const About = () => {
  document.title = 'About'
  return (
    <>
    <section className="text-gray-600 mb-4">
      <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-4xl mb-4 font-medium text-gray-900">
              เกี่ยวกับเรา
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="assets/images/nuxt.png"
            />
          </div>
        </div>
    </section>

    <section className="text-gray-600 mb-4">
      <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-4xl mb-4 font-medium text-gray-900">
              About us
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>

          </div>
        </div>
    </section>

    </>
    
  )
}

export default About
