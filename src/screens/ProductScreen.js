import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
// import products from '../product';
import axios from 'axios'
import { useState ,useEffect} from 'react';


function ProductScreen() {
    const params = useParams()   
    const [product,setProduct] = useState([])
    useEffect(()=>{
        async function fetchProduct(){
          const { data } = await axios.get(`/api/products/${params.id}`)
          setProduct(data)
        }
        fetchProduct()
    },[params])

    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{product.name}</ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                        </ListGroup.Item>
                        <ListGroup.Item>$ {product.price}</ListGroup.Item>
                        <ListGroup.Item>Descriptions {product.descriptions}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup varient='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status</Col>
                                    <Col>
                                         {product.countInStock >0 ? "In Stock":"Out of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' disabled={product.countInStock===0} type='button'>Add to Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen