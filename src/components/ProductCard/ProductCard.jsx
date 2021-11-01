import './ProductCard.css'

const ProductCard = ({ url, setImage, imgArray }) => {
  return (
    <div className='ProductCard' onClick={(e) => setImage(url)}>
      <img src={url} alt='mini product card' />
    </div>
    );
}
 
export default ProductCard;