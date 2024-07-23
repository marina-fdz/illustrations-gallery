import '../styles/Card.scss';

import PropTypes from 'prop-types';
import Modal from './Modal';
import { useState } from 'react';


function Card({product}) {
const [modal, setModal] = useState(false);
  const toggleModal = () => {
       setModal(!modal);
   };    
   if(modal) {
       document.body.classList.add('active-modal')
   } else {
       document.body.classList.remove('active-modal')
   }

  return (
    <>
    <article className="card" onClick={toggleModal}>
        <img className="card__img" src={product.img} alt={"Image of " + product.name} />
        <h3 className="card__title">{product.name}</h3>
    </article>
    {modal && (<Modal product={product} toggleModal={toggleModal}/>)}
    </>
  )
}

Card.propTypes = {
    product: PropTypes.object.isRequired,
};

export default Card