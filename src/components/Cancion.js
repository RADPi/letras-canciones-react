import PropTypes from 'prop-types'

const Cancion = ({ letra }) => {
	if (letra.length === 0) return null

	return (
		<>
			<h2> Letra Cancion</h2>
			<p className='letra'>{letra}</p>
		</>
	)
}

Cancion.propTypes = {
	letra: PropTypes.string.isRequired,
}

export default Cancion
