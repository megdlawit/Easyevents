import React from 'react';
import { FaPencilAlt, FaAngellist, FaPaperPlane, FaTree, FaUsers, FaGavel, FaPalette, FaHandsHelping } from 'react-icons/fa';
import './About.css';
import Navbar from '../Navbar';

const iconMap = {
  'Environmental Awareness': <FaTree />,
  'Artistic Empowerment': <FaPalette />,
  'National Engagement': <FaUsers />,
  'Policy Advocacy': <FaGavel />,
  'Cultural Celebration': <FaHandsHelping />,
  'Community Collaboration': <FaUsers />,
};

const contentBoxes = [
  {
    title: 'Environmental Awareness',
    description: 'Increase public understanding of environmental challenges specific to Ethiopia, such as deforestation, water scarcity, pollution, and habitat degradation. Through artistic works, educate and inspire the general public, fostering a sense of responsibility towards the environment.',
  },
  {
    title: 'Artistic Empowerment',
    description: 'Provide a platform for Ethiopian artists, both established and emerging, to showcase their talents and perspectives on environmental issues. Encourage creative expressions, empowering artists to use their art as a powerful medium to communicate environmental messages and advocate for positive change.',
  },
  {
    title: 'National Engagement',
    description: 'Encourage widespread participation from artists and the general public across Ethiopia. Spark engagement and dialogue, urging individuals from diverse backgrounds to reflect on their environmental impact and take action towards sustainable practices. Facilitate networking and collaboration among artists and environmental enthusiasts.',
  },
  {
    title: 'Policy Advocacy',
    description: 'Showcase artworks that address environmental challenges and propose sustainable solutions. Advocate for environmental protection and influence policy decisions at a national level. Raise awareness among policymakers, inspiring them to enact effective environmental policies and regulations.',
  },
  {
    title: 'Cultural Celebration',
    description: 'Celebrate Ethiopian culture and heritage, emphasizing the connection between the environment and traditional practices. Encourage artists to draw inspiration from their cultural roots, indigenous knowledge, and natural beauty, fostering pride and appreciation for Ethiopia environmental heritage.',
  },
  {
    title: 'Community Collaboration',
    description: 'Promote cooperation and partnerships among different stakeholders, including artists, environmental organizations, and local communities, to work together towards common environmental goals and sustainable development.',
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <section className="section_all bg-light" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title_all text-center">
                <h3 className="font-weight-bold">
                  <span className="text_custom">About Us</span>
                </h3>
                <div className="">
                  <i className=""></i>
                </div>
              </div>
            </div>
          </div>

          <div className="row vertical_content_manage mt-5">
            <div className="col-lg-6">
              <div className="about_header_main mt-3">
                <div className="about_icon_box">
                  <p className="text_custom font-weight-bold">Whispers of the Earth Arts Contest</p>
                </div>
                <h4 className="about_heading text-capitalize font-weight-bold mt-4">
                  Resonating Creativity for Environmental Consciousness
                </h4>
                <p className="text-muted mt-3">
                  The National Arts Contest in Ethiopia is a platform that aims to raise awareness about environmental issues and promote sustainability through the creative expressions of local artists.
                </p>
                {/* <p className="text-muted mt-3">
                 
                </p> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img_about mt-3">
                <img src="https://i.ibb.co/qpz1hvM/About-us.jpg" alt="About Us" className="img-fluid mx-auto d-block" />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            {contentBoxes.map((content, index) => (
              <div className="col-lg-4" key={index}>
                <div className="about_content_box_all mt-3">
                  <div className="about_detail text-center">
                    <div className="about_icon">
                      {iconMap[content.title]}
                    </div>
                    <h5 className="text-dark text-capitalize mt-3 font-weight-bold">{content.title}</h5>
                    <p className="edu_desc mt-3 mb-0 text-muted">{content.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
