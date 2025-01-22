import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import NavigationBar from "./component/NavigationBar/NavigationBar";
import {Container} from "@mui/material";

const App = (): JSX.Element => {
    return <>
        <NavigationBar/>
        <Container maxWidth="lg" sx={{marginTop: "5%"}}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <p>Changed 112233!</p>
        </Container>
    </>
};
export default App;
