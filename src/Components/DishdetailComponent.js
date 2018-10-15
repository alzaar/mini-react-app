import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class Dishdetail extends Component {
  constructor(props) {
    super(props);

  }


  renderDish(dish) {
    if (dish !== null) {
      console.log(`Dish: ${dish}`);
      return (
        <Card>
           <CardImg top src={dish.image} alt={dish.name} />
           <CardBody>
             <CardTitle>{dish.name}</CardTitle>
             <CardText>{dish.description}</CardText>
           </CardBody>
        </Card>
      );
    }
      else {
        return (
          <div></div>
        );
      }

  }
  render() {
    return (
      <div className="container">
        <div className="row">

        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Dishdetail;