import React from 'react'

function Header() {
  return (
    <>
      <header>
       {/* <!-- menu for computer -->*/}
        <div className="menu-desktop ">
          <div className="top-title container-fluid d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="left col-6">Welcome to MyFreshCart Your Online Grocery Store</div>
                <div className="right col-6">
                  <div className="wishlist"><a href="end">Wishlist (0)</a></div>
                
                
                </div>
              </div>
            </div>
          </div>
        {/*  <!-- menu for mobile -->*/}
          <div className="top-title-mobile d-block d-lg-none container-fluid">
            <div className="wrap">
              <div className="menu-bar"><i onclick="menu_hidden_left_show()" className="fas fa-bars"></i>
              {/* <!-- menu hidden left -->*/}
                <div className="menu-hidden-left go-left">
                  <div className="top">
                    <i className="fas fa-user-circle"></i>
                    <i onclick="menu_hidden_left_hidden()" className="fas fa-times"></i>
                    <a href="end" className="login">Login</a>
                    <a href="end" className="register">Register</a>
                  </div>
                  <div className="wrap-menu">
                    <div className="father-menu">
                      <ul className="menu">
                        <li onclick="menu_hidden_left_zoom_out()" className="title"><i className="fas fa-bars"></i> Menu</li>
                        <a href="end"><li>Beverages</li></a>
                        <a href="end"><li>Dry Food</li></a>
                        <a href="end"><li>Grain Food</li></a>
                        <a href="end"><li>Organic</li></a>
                        <a href="end"><li>Baby  Food</li></a>
                      </ul>
                    </div>
                  </div>

                  <div className="wrap-menu menu_2">
                    <div className="father-menu zoom-out">
                      <ul className="menu">
                        <li onclick="menu_hidden_left_zoom_out()" className="title"><i className="fas fa-bars"></i> Categories</li>
                        <a href="end"><li>Home</li></a>
                        <a href="end"><li>Frozen  Item</li></a>
                        <a href="end"><li>Fruit & veges</li></a>
                        <a href="end"><li>Oils & Gheee</li></a>
                        <a href="end"><li>Herbs</li></a>
                        <a href="end"><li>Cola cola</li></a>
                        <a href="end"><li>Mustard Oils</li></a>
                        <a href="end"><li>Beverages</li></a>
                        <a href="end"><li>Seeds & Nuts</li></a>
                        <a href="end"><li>Toned Milk</li></a>
                        <a href="end"><li>Cheese</li></a>
                        <a href="end"><li>Toned Milk</li></a>
                        <a href="end"><li>Chicken</li></a>
                        <a href="end"><li>Meat</li></a>
                      </ul>
                    </div>
                  </div>

                  <div className="wrap-setting">
                    <div className="father-setting zoom-out">
                      <div className="setting">
                        <div onclick="settings_zoom_out()" className="title"><i className="fas fa-cog"></i>Settings</div>
                        <div className="select">
                          <select name="carlist" form="carform">
                            <option value="volvo">English</option>
                            <option value="saab">Deutsch</option>
                            <option value="opel">Français</option>
                            <option value="audi">Español</option>
                            <option value="audi">Italiano</option>
                          </select>
                          <select name="carlist" form="carform">
                            <option value="volvo">USD $</option>
                            <option value="saab">EUR €</option>
                          </select>
                          <select name="carlist" form="carform">
                            <option value="volvo">Wishlist (0)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                
                </div>
                <div onclick="menu_hidden_left_hidden()" className="background-black hidden-back-ground-black"></div>
               {/* <!-- end menu hidden left -->*/}
              
              </div>
            <div className="main-icon"><a href="end"><img src="../Images/review.png" alt=""/></a></div>
            <div className="cart-mobile"><i className="fab fa-opencart" onclick="show_cart_mobile()"></i>
              <div className="list-cart-mobile hidden kaksfvhnjksnd" id="a14235">
                <i className="fas fa-shopping-bag"></i>
                <p>No produce in this cart</p>
              </div>
            </div>
            </div>
          </div>
        {/*  <!-- and menu for mobile -->*/}
          <div className="between-menu container-fluid">
            <div className="container">
              <div className="row">
                <div className="left col-3 d-none d-lg-block"><a href="end"><img src="../Images/review.png" alt=""/></a></div>
                <div className="between col-lg-6 col-ld-12">
                  <form action="" method="POST">
                    <input type="text" placeholder="Search our catalog"/>
                    <button><i className="fa fa-search" aria-hidden="true"></i></button>
                  </form>
                </div>
                <div className="right col-3 d-none d-lg-block">
                  <div className="wrap" onclick="register()">
                    <i className="far fa-user"></i>
                    <div className="block">
                      <p>My Account <i className="fa fa-angle-down" aria-hidden="true"></i></p>
                      <p>Register & Login</p>
                    </div>
                  </div>
                    <ul className="register hidden login674">
                      <a href="end"><li>SingIn</li></a>
                      <a href="end"><li>Register</li></a>
                    </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-option d-none d-lg-block container-fluid">
            <div className="wrap-categories container">
                <div className="categories" onclick="drop_list_categories()"><i className="fa fa-bars" id="top-categories" aria-hidden="true"></i>TOP CATEGORIES
                  <div className="wrap-list-categories">
                    <ul className="list-categories">
                      <a href="end"><li>Home</li></a>
                      <a href="end" className="Frozen-item"><li>Frozen  Item <i className="fas fa-chevron-right"></i></li></a>
                      <a href="end" className="fruit-veges"><li>Fruit & veges <i className="fas fa-chevron-right"></i></li></a>
                      <a href="end" className="oils-ghee"><li>Oils & Gheee <i className="fas fa-chevron-right"></i></li></a>
                      <a href="end"><li>Herbs</li></a>
                      <a href="end"><li>Cola cola</li></a>
                      <a href="end"><li>Mustard Oils</li></a>
                      <a href="end"><li>Beverages</li></a>
                      <a href="end"><li>Seeds & Nuts</li></a>
                      <a href="end"><li>Toned Milk</li></a>
                      <a href="end"><li>Cheese</li></a>
                    </ul>
                  </div>
                {/*  <!-- hover for frozen item -->*/}
                  <div className="frozen-item-list on-hover">
                    <a href="end">Jam</a>
                    <a href="end">Herbs</a>
                    <a href="end">Seet nd Nuts</a>
                    <a href="end">Dry Food</a>
                    <a href="end">Grain Food</a>
                  </div>
                {/*  <!-- end hover for frozen item -->*/}
                {/*  <!-- hover for fruit & veges -->*/}
                  <div className="fruit-veges-list on-hover">
                    <div className="one-col-inner">
                      <a href="end" className="title">Frozen Items</a>
                      <p><a href="end">Herbs</a></p>
                      <p><a href="end">Oils & Gheee</a></p>
                      <p><a href="end">Pepsi</a></p>
                      <p><a href="end">Mustard Oils</a></p>
                      <p><a href="end">Herbs</a></p>
                    </div>
                    <div className="one-col-inner">
                      <a href="end" className="title">Beverages</a>
                      <p><a href="end">Oils & Gheee</a></p>
                      <p><a href="end">Cola cola</a></p>
                      <p><a href="end">Red Bull</a></p>
                      <p><a href="end">Health Oils</a></p>
                      <p><a href="end">Cup Noodles</a></p>
                    </div>
                    <div className="one-col-inner">
                      <a href="end" className="title">Oils & Gheee</a>
                      <p><a href="end">Mustard Oils</a></p>
                      <p><a href="end">Soyabean Oils</a></p>
                      <p><a href="end">Potato Chips</a></p>
                      <p><a href="end">Jam</a></p>
                      <p><a href="end">Herbs</a></p>
                    </div>
                    <div className="one-col-inner"><a href="end"><img src="../Images/menu-banner-01.jpg" alt=""/></a></div>
                  </div>
                 {/* <!-- end hover for fruit & veges -->*/}
                {/*  <!-- hover for Oils & Gheee -->*/}
                  <div className="oils-ghee-list on-hover">
                    <div className="text-top">
                      <div className="one-col-inner">
                        <a href="end" className="title">Frozen Items</a>
                        <p><a href="end">Herbs</a></p>
                        <p><a href="end">Oils & Gheee</a></p>
                        <p><a href="end">Pepsi</a></p>
                        <p><a href="end">Mustard Oils</a></p>
                        <p><a href="end">Herbs</a></p>
                      </div>
                      <div className="one-col-inner">
                        <a href="end" className="title">Beverages</a>
                        <p><a href="end">Oils & Gheee</a></p>
                        <p><a href="end">Cola cola</a></p>
                        <p><a href="end">Red Bull</a></p>
                        <p><a href="end">Health Oils</a></p>
                        <p><a href="end">Cup Noodles</a></p>
                      </div>
                      <div className="one-col-inner">
                        <a href="end" className="title">Oils & Gheee</a>
                        <p><a href="end">Mustard Oils</a></p>
                        <p><a href="end">Soyabean Oils</a></p>
                        <p><a href="end">Potato Chips</a></p>
                        <p><a href="end">Jam</a></p>
                        <p><a href="end">Herbs</a></p>
                      </div>
                      <div className="one-col-inner">
                        <a href="end" className="title">Oils & Gheee</a>
                        <p><a href="end">Mustard Oils</a></p>
                        <p><a href="end">Soyabean Oils</a></p>
                        <p><a href="end">Potato Chips</a></p>
                        <p><a href="end">Jam</a></p>
                        <p><a href="end">Herbs</a></p>
                      </div>
                    </div>
                    <div className="img-bottom">
                      <a href="end"><img src="../Images/banner2.png" alt=""/></a>
                      <a href="end"><img src="../Images/menu-banner-3.png" alt=""/></a>
                    </div>
                  </div>
                 {/* <!-- end hover for Oils & Gheee -->*/}
                </div>
                <a href="end"><div className="categories go"><img src="https://innovatory.in/theme/prestashop/Gomart/modules/itmegamenu/views/img/icons/a7be6f821292cddce141ab8599b1ed11221a4dff_icon-1.png" alt=""/>BEVERAGES</div></a>
                <a href="end"><div className="categories go"><img src="https://innovatory.in/theme/prestashop/Gomart/modules/itmegamenu/views/img/icons/f2fcda44dbf91743d28190b0009bcc62d792aaf5_icon-2.png" alt=""/>DRY FOOD</div></a>
                <a href="end"><div className="categories go"><img src="https://innovatory.in/theme/prestashop/Gomart/modules/itmegamenu/views/img/icons/bd4f7bd723b52f921b322fc89684d1b6230844be_icon-3.png" alt=""/>GRAIN FOOD</div></a>
                <a href="end"><div className="categories go"><img src="https://innovatory.in/theme/prestashop/Gomart/modules/itmegamenu/views/img/icons/3877c228a0b282efb03f8de81b3c86e5cce19406_icon-4.png" alt=""/>ORGANIC</div></a>
                <a href="end"><div className="categories go"><img src="https://innovatory.in/theme/prestashop/Gomart/modules/itmegamenu/views/img/icons/3b380ee94610b8bc97dc498f9fa640c60681981c_icon-5.png" alt=""/>BABY FOOD</div></a>
                <div className="categories cart">
                  <div className="cart-gap p31121240 asd" >
                    <i className="fab fa-opencart p31121240"></i>
                    <span className="p31121240">Cart(0)</span>
                  </div>
                  <div className="list-cart hidden" id="p31121241">
                    <i className="fas fa-shopping-bag"></i>
                    <p>No produce in this cart</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
       {/* <!-- end menu for computer -->*/}
       {/* <!-- menu for mobile -->*/}
        <div className="menu-mobile d-block d-lg-none"></div>
       {/* <!-- end menu for mobile -->*/}
      </header>
    </>
  )
}

export default Header
