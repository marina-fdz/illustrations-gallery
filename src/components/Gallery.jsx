import '../styles/Gallery.scss';

import Card from "./Card"

import PropTypes from 'prop-types';



function Gallery({data, searchValidation}) {
  

  return (
    <section className='gallery'>
      <h3>{searchValidation}</h3>
      <div className="gallery__list">
        {data.map((product)=>{
          return <Card key={product.idProduct} product={product}/>
        })}
      </div>
    </section>
  )
}

Gallery.propTypes = {
  data: PropTypes.array.isRequired
};

export default Gallery