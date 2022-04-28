import React from 'react'
import Container from "../components/layout/Container";
import Sidebar from "../components/layout/Sidebar";
import Form from "../components/Form";

const Home = () => {
  return (
    <div>
      <Sidebar />
       <Container>
          <Form />
       </Container>
    </div>
  )
}

export default Home