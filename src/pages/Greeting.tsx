import { Link } from "react-router-dom";

const Greeting = () => (
   <>
      <h1>Hello world!</h1>
      <Link to="home">Home</Link>
      <br />
      <Link to="info">Info</Link>
   </>
);

export default Greeting;