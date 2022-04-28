import React from 'react'
import Container from "../components/layout/Container";
import Sidebar from "../components/layout/Sidebar";

const About = () => {
  return (
    <div>
       <Sidebar />
       <Container>
          <div className="border-dashed border-2 border-gray-800 h-48 p-6 text-2xl rounded">About</div>
       </Container>
    </div>
  )
}

export default About