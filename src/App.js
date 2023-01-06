import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Navigation} from "./components/Navigation";
import {Content} from "./components/Content";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <Navigation/>
                <Content />
            </div>
        </ThemeProvider>
    );
}

export default App;
