import PropTypes from 'prop-types'
import { useState } from 'react'

const Formulario = ({ setBusquedaLetra }) => {
	const [busqueda, setBusqueda] = useState({
		artista: '',
		cancion: '',
	})

	const [error, setError] = useState(false)

	const { artista, cancion } = busqueda

	function actualizarState(e) {
		setBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		})
	}

	function buscarInformacion(e) {
		e.preventDefault()
		if (artista.trim() === '' || cancion.trim() === '') {
			setError(true)
			return
		}
		setError(false)
		setBusquedaLetra(busqueda)
	}

	return (
		<div className='bg-info'>
			{error && (
				<p className='alert alert-danger text-center p-2'>
					Todos los caampos son obligatorios
				</p>
			)}
			<div className='container'>
				<div className='row'>
					<form
						className='col card text-white bg-transparent mb-5 pt-5 pb-2'
						onSubmit={buscarInformacion}
					>
						<fieldset>
							<legend className='text-center'>Buscador Letras Canciones</legend>
							<div className='row'>
								<div className='col-md-6'>
									<div className='form-group'>
										<label htmlFor='artista'>Artista</label>
										<input
											type='text'
											className='form-control'
											name='artista'
											placeholder='Nombre Artista'
											onChange={actualizarState}
											value={artista}
										/>
									</div>
								</div>
								<div className='col-md-6'>
									<div className='form-group'>
										<label htmlFor='cancion'>Cancion</label>
										<input
											type='text'
											className='form-control'
											name='cancion'
											placeholder='Nombre Cancion'
											onChange={actualizarState}
											value={cancion}
										/>
									</div>
								</div>
							</div>
							<button type='submit' className='btn btn-primary float-right'>
								Buscar
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	)
}

Formulario.propTypes = {
	setBusquedaLetra: PropTypes.func.isRequired,
}

export default Formulario
