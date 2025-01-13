
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import useAuth from './hooks/authHook'; // Custom hook for authentication
// import ProductCard from './card'; // Import the ProductCard component
// import { Container, Row, Col } from 'react-bootstrap';
// import { Navigate } from 'react-router-dom';
// import './ProductCard.css'; // You can style the card with this CSS file

// const Homepage = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchText, setSearchText] = useState('');

//   // Check if the user is authenticated using the custom hook
//   const isAuthenticated = useAuth();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5001/product/');
//         const data = response.data;
//         // Ensure that the data is in the correct format
//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else {
//           setError('Invalid data format');
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (isAuthenticated) {
//       fetchProducts();
//     }
//   }, [isAuthenticated]);

//   // Filter products based on the search query
//   const filteredProducts = products.filter(product => {
//     const productName = product.name ? product.name.toLowerCase() : '';
//     const productDescription = product.description ? product.description.toLowerCase() : '';
//     const searchQuery = searchText.toLowerCase();

//     return productName.includes(searchQuery) || productDescription.includes(searchQuery);
//   });

//   // Redirect to login if not authenticated
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <Container>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//       </div>
//       <Row>
//         {filteredProducts.map((product) => (
//           <Col key={product.product_id} sm={12} md={6} lg={4}>
//             <ProductCard product={product} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Homepage;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./card";
// import { Container, Row, Col } from "react-bootstrap";
// import { Navigate } from "react-router-dom";
// import "./ProductCard.css";

// const Homepage = ({ user }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/product/");
//         console.log("Fetched products:", response.data); // Log the fetched products

//         setProducts(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (user) fetchProducts();
//   }, [user]);

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const filteredProducts = products.filter((product) =>
//     product.name?.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <Container>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//       </div>
//       <Row>
//         {filteredProducts.map((product) => (
//           <Col key={product.product_id} sm={12} md={6} lg={4}>
//             <ProductCard product={product} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Homepage;






import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./card";
import { Container, Row, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import "./ProductCard.css";

const Homepage = ({ user }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/product/");
        console.log("Fetched products:", response.data); // Log fetched products
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setError("Invalid data format received.");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchProducts();
  }, [user]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <h1>Loading products...</h1>;
  }

  if (error) {
    return (
      <div className="error-message">
        <h1>Error Loading Products</h1>
        <p>{error}</p>
      </div>
    );
  }

  const filteredProducts = products.filter((product) =>
    (product.title || "").toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Conditional rendering for empty product list */}
      {filteredProducts.length === 0 ? (
        <h1 className="no-products-message">No products match your search.</h1>
      ) : (
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product.product_id} sm={12} md={6} lg={4}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Homepage;
