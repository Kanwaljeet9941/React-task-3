import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Quote />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>You can Hire Freelancer Here</h1>
    </div>
  );
}

function Quote() {
  return (
    <div>
      <p className="para">
        When something goes wrong in life, just shout "plot twist!" and carry
        on.
      </p>
      <div className="btn-holder">
        <button className="btn btn-pink">About Us</button>
        <button className="btn">Get a Quote</button>
      </div>
    </div>
  );
}
export default App;
