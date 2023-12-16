import './index.css'

const CardItem = props => {
  const {eachOne} = props
  const {className, title, description, imgUrl} = eachOne
  return (
    <li className={`card ${className}`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
