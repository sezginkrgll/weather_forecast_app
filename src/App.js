import "./App.css";
import Weather from "./components/Weather";
import Form from "./components/Form";
import { APIkeyProvider } from "./context/APIconfigContext";
import { GeocodingProvider } from "./context/GeocodingContext";
function App() {
  return (
    <div className="App">
      <APIkeyProvider>
        <GeocodingProvider>
          <Form />
          <Weather />
        </GeocodingProvider>
      </APIkeyProvider>
    </div>
  );
}

export default App;
