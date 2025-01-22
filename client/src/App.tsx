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
            <p>test changed!</p>
        </Container>
    </>
};
export default App;
