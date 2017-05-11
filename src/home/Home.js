import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Home.actions';
import {Link} from 'react-router';


class Home extends React.Component{
  componentDidMount() {
    this.props.fetchImages();
  }

  select(idx) {
    this.props.selectImage(idx);
  }
  render() {
    
    return (
      <div>
        <h1>Welcome to GameGo!</h1>
        <div>
          {this.props.productImages.map((path, idx) =>
              <Link to={"product/" + path["id"]}>
                <img key={idx} src={path["image_path"]}  width="300px"/>
              </Link>
           )}
        </div>
      </div>
    );
  }
}

const HomeContainer = ReactRedux.connect(
  state => state.home,
  actions
)(Home);

export default HomeContainer;
