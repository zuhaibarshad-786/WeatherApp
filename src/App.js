// import logo from './logo.svg';
// import './App.css';
// import Greeting from './greeting';
// import Counter from './counter';

// function App() {
//   return (
//     <div className="App">
//       <Greeting name="Zohaib" />
//       <Counter></Counter>

//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css'; // Assuming you have some CSS styles in App.css
import Weather from './Weather';

function App() {
    const [city, setCity] = useState('Lahore'); // Default city
    const [inputCity, setInputCity] = useState('');

    const handleCityChange = (e) => {
        setInputCity(e.target.value);
    };

    const handleCitySubmit = (e) => {
        e.preventDefault();
        if (inputCity) {
            setCity(inputCity);
            setInputCity(''); // Clear input field after submission
        }
    };

    return (
        <div className="App">
            <h1>Weather App</h1>
            <form onSubmit={handleCitySubmit}>
                <input
                    type="text"
                    value={inputCity}
                    onChange={handleCityChange}
                    placeholder="Enter city name"
                />
                <button type="submit">Get Weather</button>
            </form>
            <Weather city={city} />
        </div>
    );
}

export default App;



