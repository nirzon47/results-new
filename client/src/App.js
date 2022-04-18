import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header'
import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import Ranks from './pages/Ranks'
import Footer from './components/Footer'

function App() {
	return (
		<>
			<Router>
				<div className='content'>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/new' element={<New />} />
						<Route path='/edit/:id' element={<Edit />} />
						<Route path='/ranks' element={<Ranks />} />
					</Routes>
					<Footer />
				</div>
			</Router>
			<ToastContainer />
		</>
	)
}
export default App
