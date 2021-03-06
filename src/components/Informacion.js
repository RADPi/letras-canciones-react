import PropTypes from 'prop-types'

const Informacion = ({ informacion }) => {
	if (Object.keys(informacion).length === 0) return null

	const {
		strArtistThumb,
		strGenre,
		strBiographyES,
		strFacebook,
		strTwitter,
		strLastFMChart,
	} = informacion

	return (
		<div className='card border-ligth'>
			<div className='card-header bg-primary text-ligth font-weight-bold'>
				Informacion Artista
			</div>
			<div className='card-body'>
				<img src={strArtistThumb} alt='Logo Artista' />
				<p className='card-text'>Género: {strGenre}</p>
				<h2 className='card-text'>Biografía:</h2>
				<p className='card-text'>{strBiographyES}</p>
				<p>
					<a
						href={`https://${strFacebook}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-facebook'></i>
					</a>
					<a
						href={`https://${strTwitter}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-twitter'></i>
					</a>
					<a
						href={`${strLastFMChart}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-lastfm'></i>
					</a>
				</p>
			</div>
		</div>
	)
}

Informacion.propTypes = {
	informacion: PropTypes.object,
}

export default Informacion
