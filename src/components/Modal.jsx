import '../styles/Modal.scss';

import Carousel from "./Carousel"
import PropTypes from 'prop-types';

function Modal({product, toggleModal}) {
  return (
    
    <div className='modal'>
      <article className='modal__card'>
        
          <button onClick={toggleModal} className='modal__card-x'>+</button>
          {/* <div className='modal__card-container'> */}
            <Carousel data={product.photos}/>
            <h3 className='modal__card-title'>{product.name}</h3>
            <p>{product.desc}</p>
            {product.stock && (
                <a href={product.shopUrl} className='modal__card-buy' target='_blank'>Buy</a>
            )}
          {/* </div> */}
      </article>
    </div>
   
  )
}

Modal.propTypes = {
    product: PropTypes.object.isRequired,
    toggleModal: PropTypes.func.isRequired
  };

export default Modal