import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import {  useSelector ,useDispatch} from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import Paginate from '../Components/Paginate'
import ProductCarousel from '../Components/ProductCarousel'
import Meta from '../Components/Meta'
import { listProducts } from '../actions/productActions'



import HomeCarousel from '../Components/HomeCarousel'

const HomeScreen = ({ match }) => {
  


  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
       
       <Meta />
      {!keyword ? (
      <HomeCarousel/>
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
<ProductCarousel/>

   <div class="img-banner">
          <div class="wrap-img">
            <a href='end'><img src="../Images/two-banner-1.jpg" alt=""/></a>
            <div class="effect"></div>
          </div>
          <div class="wrap-img">
            <a href="end"><img src="../Images/fogg-banner.png" alt=""/></a>
            <div class="effect"></div>
          </div>
        </div>

        <div className='container'>
        <Row>
          <div className='delivery-banner col-12'>
            <div>
            <img src='../Images/free-delivery.jpg' alt='free-delivery'/>
            </div>
          </div>
        </Row>
        
            
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} xs={6} sm={6} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
      </>
      )}
      </div>
      </>
  )
}

export default HomeScreen