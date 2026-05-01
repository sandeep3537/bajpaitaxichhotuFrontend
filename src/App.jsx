import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return <h1 className="text-2xl font-bold">Home Page</h1>;
};

const About = () => {
  return <h1 className="text-2xl font-bold">About Page</h1>;
};

const App = () => {
  return (
    <div className="p-4">
      {/* Navbar */}
      <nav className="flex gap-4 mb-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;