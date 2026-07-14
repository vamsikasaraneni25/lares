import React from "react";
import PageBanner from "../components/PageBanner";
import technologiesBanner from "../assets/banners/technologies-banner.png";

import {
  FaBrain,
  FaCloud,
  FaCode,
  FaMobileAlt,
  FaShieldAlt,
  FaServer
} from "react-icons/fa";

import "./Technologies.css";


function Technologies() {


  const technologies = [

    {
      icon: <FaBrain />,
      title: "Artificial Intelligence",
      description:
        "Building intelligent solutions using AI and machine learning technologies to automate and improve business processes."
    },


    {
      icon: <FaCloud />,
      title: "Cloud Computing",
      description:
        "Providing secure, scalable, and flexible cloud solutions for modern digital businesses."
    },


    {
      icon: <FaCode />,
      title: "Web Technologies",
      description:
        "Developing fast and responsive applications using modern frontend and backend technologies."
    },


    {
      icon: <FaMobileAlt />,
      title: "Mobile Technologies",
      description:
        "Creating powerful mobile applications with smooth user experience across Android and iOS platforms."
    },


    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      description:
        "Implementing advanced security practices to protect applications, networks, and valuable business data."
    },


    {
      icon: <FaServer />,
      title: "DevOps & Infrastructure",
      description:
        "Automating deployment and managing reliable IT infrastructure with modern DevOps practices."
    }

  ];



  return (

    <>


      {/* Page Banner */}

      <PageBanner
        title="Technologies"
        image={technologiesBanner}
      />



      {/* Technologies Section */}


      <section className="technologies-section">



        <div className="technologies-intro">


          <h2>
            Technologies We Use
          </h2>


          <p>
            We use modern and advanced technologies to create
            secure, scalable, and innovative digital solutions
            for businesses.
          </p>


        </div>





        <div className="technologies-container">


          {
            technologies.map((technology, index) => (


              <div
                className="technology-card"
                key={index}
              >



                <div className="technology-icon">

                  {technology.icon}

                </div>




                <h3>

                  {technology.title}

                </h3>




                <p>

                  {technology.description}

                </p>



              </div>


            ))
          }



        </div>




      </section>



    </>

  );

}


export default Technologies;