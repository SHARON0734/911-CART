import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';



function Home() {
const data = useFetch('https://fakestoreapi.com/products')
console.log(data);
 // to access the state value
 const wishlist = useSelector((state)=>state.wishlistReducer)
 console.log(wishlist);
 //to call a function that add value to the state
 const dispatch = useDispatch()



  return (
  <Row className='ms-3 me-3' style={{marginTop:'150px'}}>
  { data?.length>0?
   data?.map((item)=>( <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
   <Card style={{ width: '100%', height:'100%' }}>
      <Card.Img variant="top" src={item.image} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title className='fw-bolder'>{item.title.slice(0,20)}...</Card.Title>
        <Card.Text>
          <p>{item.description.slice(0,40)}...</p>
          <p className={'fw-bolder'}>Price : $ {item.price}</p>
        </Card.Text>
       <div className='d-flex align-items-center justify-content-between'>
        <Button  onClick={()=>dispatch(addToWishlist(item))} variant="outline-danger rounded"><i class="fa-solid fa-heart"></i></Button>
        <Button onClick={()=>dispatch(addToCart(item))} variant="outline-success rounded"><i class="fa-solid fa-cart-plus"></i></Button>
       </div>
      </Card.Body>    
    </Card>
   </Col>))
    : <p>Nothing to Display</p>
    }
  </Row>
  )
}

export default Home