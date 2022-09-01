import React from 'react'
import { useNavigate } from 'react-router';
import { UiButton } from '../components/ui/UiButton';

const About = () => {
  let navigate = useNavigate();

  const redirectToHome = () => {
    /* setTimeout(() => {
      navigate("/")
    },2000) */
    navigate("/")
  }

  return (
    <div>
      <div className="border-dashed border-2 border-gray-800 h-48 p-6 text-2xl rounded">
        About
        <UiButton
          title="Go To Home"
          onClick={redirectToHome}
        />
      </div>
    </div>
  )
}

export default About