import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {TrainingInfo} from "./layout/sections/trainingInfo/TrainingInfo";
import {Contact} from "./layout/sections/contact/Contact";


function App() {
    return (
        <div>
            <Header />
            <Main />
            <Skills />
            <AboutMe />
            <TrainingInfo />
            <Contact />
        </div>
    );
}

export default App;
