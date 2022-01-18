import axios from 'axios'
import { useEffect, useState } from 'react'
import Cancion from './components/Cancion'
import Formulario from './components/Formulario'
import Informacion from './components/Informacion'

function App() {
	const [busquedaLetra, setBusquedaLetra] = useState({})
	const [letra, setLetra] = useState('')
	const [informacion, setInformacion] = useState({})
	const [error, setError] = useState(false)

	function normalize(text: '') {
		return text.replaceAll(' ', '_')
	}

	useEffect(() => {
		if (Object.keys(busquedaLetra).length === 0) return
		const consultarAPI = async () => {
			const { artista, cancion } = busquedaLetra

			const url = `https://api.lyrics.ovh/v1/${normalize(artista)}/${normalize(
				cancion
			)}`
			const url2 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artista}`
			axios
				.all([axios.get(url), axios.get(url2)])
				.then(
					axios.spread((letra, informacion) => {
						setLetra(letra.data.lyrics)
						setInformacion(informacion.data.artists[0])
					})
				)
				.catch(error => {
					setError(true)
				})
			setError(false)
		}
		consultarAPI()
	}, [busquedaLetra])

	return (
		<div>
			<Formulario setBusquedaLetra={setBusquedaLetra} />
			{error ? (
				<p className='alert alert-danger text-center p-2'>
					No se encontraron datos
				</p>
			) : (
				<div className='container mt-5'>
					<div className='row'>
						<div className='col-md-6'>
							<Informacion informacion={informacion} />
						</div>
						<div className='col-md-6'>
							<Cancion letra={letra} />
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default App
