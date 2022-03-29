import './sass/main.scss';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
	return (
		<div className="App">
			<Navbar />
			<About />
			<Projects />
			<Experience />
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
