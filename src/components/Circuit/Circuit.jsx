import './Circuit.scss';


function Circuit ({
  image,
}) {


  return (
    <section className="circuit">
      <div className="circuit__main">
        <img className="circuit__image" 
          src={image} 
          alt='circuit' 
        />
      </div>
    </section>
  )
}

export default Circuit;