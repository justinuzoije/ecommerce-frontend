import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Product.actions';

class Product extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.params.id)
  }

  render() {
    return (
      <div>
        <h1>{this.props.content['name']}</h1>
        <img src={this.props.content['image_path']}
        width="300px"/>
        <p>{this.props.content['description']}</p>
        <h2>${this.props.content['price']}</h2>
        <button onClick={() => this.props.addToCart(this.props)}>Add to Cart</button>
      </div>
    );
  }
}

const ProductContainer = ReactRedux.connect(
  state => state.product,
  actions
)(Product);

export default ProductContainer;

// <img src={id}>
// {this.props.description}
// {this.props.price}
