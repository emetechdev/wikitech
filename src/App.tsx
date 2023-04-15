import GlobalProvider from "./context/provider";
import Home from "./containers/Home";

function App() {
    return (
        <GlobalProvider>
            <Home />
        </GlobalProvider>
    );
}

export default App;
