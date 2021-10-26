import './ProductCard.css'

const ProductCard = ({ url }) => {
  return (
    <div className='ProductCard'>
      <img src={url} alt='mini product card' />
    </div>
    );
}
 
export default ProductCard;