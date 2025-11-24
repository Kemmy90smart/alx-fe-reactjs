// src/App.jsx
import Counter from './components/Counter'; // Import Counter component

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Counter App</h1>
      
      {/* Render Counter component */}
      <Counter />
    </div>
  );
}

export default App;
