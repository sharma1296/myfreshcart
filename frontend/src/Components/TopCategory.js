import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import "../Styles/topcategory.css"


function TopCategory() {
    const options = {
       loop:false,
        margin:30,
        nav:true,
        dots: false,
        autoHeight: true,
        responsive:{
          0:{
            items:1
          } ,
          480:{
            items:2
          },
          990:{
            items:3
          },
          1200:{
            items:4
         }
      }
     } ;
    
    return (
        <>
       
           
              
          <div className="top-categories container">
          <div className="title-products">
            <h3>TOP CATEGORIES</h3>
          </div>
 
          <div className="main container">
         
            <div className="owl-carousel owl-theme">
            <OwlCarousel className="slider-items owl-carousel" {...options}>
              <div className="item">
                <div className="content">
                  <a href="end">
                    <div className="content-top">
                      <div className="right"><img src="../Images/top1.png" alt=""/></div>
                      <div className="left"><p className="name-item">Herbs</p></div>
                    </div>
                  </a>
                  <a href="end">
                    <div className="content-bottom">
                      <div className="right"><img src="../Images/top2.png" alt=""/></div>
                      <div className="left"><p className="name-item">Seeds & Nuts</p></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="content">
                  <a href="end">
                    <div className="content-top">
                      <div className="right"><img src="../Images/top3.png" alt=""/></div>
                      <div className="left"><p className="name-item">Herbs</p></div>
                    </div>
                  </a>
                  <a href="end">
                    <div className="content-bottom">
                      <div className="right"><img src="../Images/top4.png" alt=""/></div>
                      <div className="left"><p className="name-item">Seeds & Nuts</p></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="content">
                  <a href="end">
                    <div className="content-top">
                      <div className="right"><img src="../Images/top5.png" alt=""/></div>
                      <div className="left"><p className="name-item">Herbs</p></div>
                    </div>
                  </a>
                  <a href="end">
                    <div className="content-bottom">
                      <div className="right"><img src="../Images/top6.png" alt=""/></div>
                      <div className="left"><p className="name-item">Seeds & Nuts</p></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="content">
                  <a href="end">
                    <div className="content-top">
                      <div className="right"><img src="../Images/top7.png" alt=""/></div>
                      <div className="left"><p className="name-item">Herbs</p></div>
                    </div>
                  </a>
                  <a href="end">
                    <div className="content-bottom">
                      <div className="right"><img src="../Images/top8.png" alt=""/></div>
                      <div className="left"><p className="name-item">Seeds & Nuts</p></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="content">
                  <a href="end">
                    <div className="content-top">
                      <div className="right"><img src="../Images/top9.png" alt=""/></div>
                      <div className="left"><p className="name-item">Herbs</p></div>
                    </div>
                  </a>
                  <a href="end">
                    <div className="content-bottom">
                      <div className="right"><img src="../Images/top10.png" alt=""/></div>
                      <div className="left"><p className="name-item">Seeds & Nuts</p></div>
                    </div>
                  </a>
                </div>
                </div>
                </OwlCarousel>
         
            
            </div>
         
          </div>
     
        </div>  
        
               
        </>
    )
}

export default TopCategory
