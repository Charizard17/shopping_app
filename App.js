import React, { Component } from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col} from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import NotFound from "./NotFound";
import CartList2 from "./CartList2";
import alertify from "alertifyjs";



export default class App extends Component {  

  state={currentCategory:"",products:[], cart:[]}

  changeCategory = (category) => {
    this.setState({currentCategory:category.categoryName});
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
}

  getProducts = categoryId => {
    let url = "http://localhost:3005/products";
    if (categoryId){
      url += "?categoryId="+categoryId;
    }
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({products:data}))
  }

  addToCart=(product)=>{
    let newCart = this.state.cart;
    var addedItem = newCart.find(c=>c.product.id===product.id);
    if(addedItem){
      addedItem.quantity+=1;
    }else{
      newCart.push({product:product,quantity:1});
    }
    this.setState({cart:newCart});
    alertify.success(product.productName + " added to cart.",2)
  };

  removeFromCart=(product)=>{
    let newCart = this.state.cart.filter(c=>c.product.id!==product.id)
    this.setState({cart:newCart})
    alertify.error(product.productName + " removed from cart.",2)
  };

  render() {
    let productInfo = { title: "Product List"};
    let categoryInfo = { title: "Category List"};
    return (
      <div className="App">
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}/>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}/>
            </Col>
            <Col xs="9">
              <Switch>
                <Route 
                  exact 
                  path="/" 
                  render={props => (
                    <ProductList 
                      {...props} 
                      addToCart={this.addToCart} 
                      products={this.state.products} 
                      currentCategory={this.state.currentCategory} 
                      info={productInfo}
                    />
                  )} />
                <Route exact path="/cart" render={props => (
                    <CartList2 
                      {...props} 
                      removeFromCart={this.removeFromCart} 
                      cart={this.state.cart}
                    />
                  )} />
                <Route component={NotFound} />

              </Switch>

            </Col>       
          </Row>
        </Container>
        
    
      </div>
    );
  }
}