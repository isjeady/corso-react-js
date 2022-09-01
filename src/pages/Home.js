import React from 'react'
import Container from "../components/layout/Container";
import Sidebar from "../components/layout/Sidebar";
import Form from "../components/Form";

const useClickInside = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && ref.current.contains(e.target)) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

const useClickOutside = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

const ClickBox = ({ onClickInside,onClickOutside }) => {
  const clickRef = React.useRef();
  useClickInside(clickRef, onClickInside);
  useClickOutside(clickRef, onClickOutside);
  return (
    <div
      className="click-box"
      ref={clickRef}
      style={{
        border: '2px dashed orangered',
        height: 200,
        width: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p>Click inside this element</p>
    </div>
  );
};

const PasswordRevealer = ({ value }) => {
  const [shown, setShown] = React.useState(false);
  return (
    <>
      <input type={shown ? 'text' : 'password'} value={value} />
      <button onClick={() => setShown(!shown)}>Show/Hide</button>
    </>
  );
};

const Home = () => {
  return (
    <div>
      <PasswordRevealer />
      <ClickBox 
        onClickInside={() => alert('click inside')} 
        /* onClickOutside={() => alert('click onClickOutside')}  */
      />
      <Form />
    </div>
  )
}

export default Home