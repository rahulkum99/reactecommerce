import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listProducts } from '../actions/productActions';

function HomeScreen() {
  const dispatch = useDispatch()
  const productLists = useSelector(state => state.productLists)
  const { error, loading, products } = productLists
  // const [product,setProducts] = useState([])
  useEffect(() => {
    // async function fetchProducts(){
    //   const { data } = await axios.get('/api/products/')
    //   setProducts(data)
    // }
    // fetchProducts()
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div>
      <h1>Latest Product</h1>
      {loading ? <Loader />
        : error ? <Message variant="danger" />
          :
          <Row>
            {products.map(product => (

              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
      }
    </div>
  )
}

export default HomeScreen