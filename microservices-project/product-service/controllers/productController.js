const Product = require('../models/product');
// const { publishProductEvent } = require('../config/rabbitmq');

// exports.createProduct = async (req, res) => {
//   const { title, description, price, stock_quantity } = req.body;
//   try {
//     const newProduct = await Product.create({
//       title,
//       description,
//       price,
//       stock_quantity
//     });

//     if (!title || !description || !price || !stock_quantity) {
//       return res.status(400).json({ error: 'product parameters are required.' });
//     }
  

//     // Publish event to RabbitMQ
//     // publishProductEvent({ type: 'PRODUCT_CREATED', product_id: newProduct.product_id, title: newProduct.title });

//     res.status(201).json({ product_id: newProduct.product_id, title: newProduct.title });
//   } catch (err) {
//     res.status(500).json({ error: 'Error creating product' });
//   }
// };



exports.createProduct = async (req, res) => {
  const { title, description, price, stock_quantity, image } = req.body;

  // Validate input fields
  if (!title || !description || !price || !stock_quantity) {
    return res.status(400).json({ error: 'All product parameters (title, description, price, stock_quantity) are required.' });
  }

  try {
    // Create the product in the database
    const newProduct = await Product.create({
      title,
      description,
      price,
      stock_quantity,
      image,
    });

  
    // Send response
    res.status(201).json({
      product_id: newProduct.product_id,
      title: newProduct.title,
      message: 'Product created successfully.',
    });
  } catch (err) {
    console.error('Error creating product:', err.message); // Log the error for debugging
    res.status(500).json({ error: 'Error creating product. Please try again later.' });
  }
};


exports.getAllProducts = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.findAll();

    // Check if products exist
    if (!products || products.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }

    // Send the list of products in the response
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Error fetching products' });
  }
};