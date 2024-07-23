import '../styles/Modal.scss';

import Carousel from "./Carousel"
import PropTypes from 'prop-types';

function Modal({product, toggleModal}) {
  return (
    
    <div className='modal'>
    <article className='modal__card'>
        <button onClick={toggleModal} className='modal__card-x'>+</button>
        <Carousel data={product.photos}/>
        <h3 className='modal__card-title'>{product.name}</h3>
        <p>{product.desc}</p>
        {product.stock && (
            <a href="" className='modal__card-buy'>Buy</a>
        )}
    </article>
    </div>
   
  )
}

Modal.propTypes = {
    product: PropTypes.object.isRequired,
    toggleModal: PropTypes.func.isRequired
  };

export default Modal