// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import './ProductCard.css'; // You can style the card with this CSS file

// const ProductCard = ({ product }) => {
//   return (
    
//     <Card className='card-body'>
//       <Card.Img variant="top" src={product.image} alt={product.title} />
//       <Card.Body>
//         <Card.Title>{product.title}</Card.Title>
//         <Card.Text>{product.description}</Card.Text>
//         <Card.Text>
//           <strong>${product.price}</strong>
//         </Card.Text>
        
//         <Card.Text>
//           <small>Stock: {product.stock_quantity} available</small>
//         </Card.Text>
//         <Button variant="primary">Add to Cart</Button>
//       </Card.Body>
//     </Card>
   
//   );
// };

// export default ProductCard;




// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import './ProductCard.css'; // Import the CSS file

// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <Card>
//         <Card.Img variant="top" src={product.image} alt={product.title} />
//         <Card.Body className="card-body">
//           <Card.Title>{product.title}</Card.Title>
//           <Card.Text>{product.description}</Card.Text>
//           <Card.Text>
//             <strong>${product.price}</strong>
//           </Card.Text>
//           <Card.Text>
//             <small>Stock: {product.stock_quantity} available</small>
//           </Card.Text>
//           <Button variant="primary">Add to Cart</Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default ProductCard;










import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProductCard.css'; // Import the CSS file

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Card>
        {/* Fallback image if product.image is unavailable */}
        <Card.Img
          variant="top"
          src={product.image || "https://via.placeholder.com/150"}
          alt={product.title || "Product image"}
          className="product-image"
        />
        <Card.Body className="card-body">
          {/* Ensure title and description have fallback values */}
          <Card.Title>{product.title || "No Title Available"}</Card.Title>
          <Card.Text>{product.description || "No Description Available"}</Card.Text>
          <Card.Text>
            <strong>${product.price?.toFixed(2) || "0.00"}</strong>
          </Card.Text>
          <Card.Text>
            <small>
              Stock: {product.stock_quantity || "Out of stock"} available
            </small>
          </Card.Text>
          <Button variant="primary" onClick={() => console.log("Add to cart clicked!")}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
