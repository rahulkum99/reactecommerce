import React, { useEffect } from 'react';
import { Link, useLocation, useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

function CartScreen() {
  const params = useParams()
  const location = useLocation()

  const productId = params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return (
    <div>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
           {cartItems.length ===0 ?(
            <Message variant='info'>
              Your Cart is Empty  <Link to='/'>Go Back</Link>
            </Message>
           ):(
            <ListGroup variant = 'flush'>
                {cartItems.map(item=>(
                  <ListGroup.Item key={item.product}>
                     <Row>

                     </Row>
                  </ListGroup.Item>
                ))}

            </ListGroup>
           )}
        </Col>
        <Col md={4}>

        </Col>
      </Row>

    </div>
  )
}

export default CartScreen