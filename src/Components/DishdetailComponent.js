import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Moment from 'react-moment';
import 'moment-timezone';

class Dishdetail extends Component {
  constructor(props) {
    super(props);

  }


  renderDish(dish) {
    if (dish !== null) {
      console.log(`Dish: ${dish}`);
      let array_length = dish.comments.length
      let comments = []
      for (let i = 0; i < array_length; i++){
          comments.push(<CardText>{dish.comments[i].comment}</CardText>);
          comments.push(<CardText>-- {dish.comments[i].author} <Moment format="ll">{dish.comments[i].date}</Moment></CardText>);
      }
      return (
        <div className="row">
          <div className="col-5 col-sm-12  md-5 mr-1">
            <Card>
               <CardImg top src={dish.image} alt={dish.name} />
               <CardBody>
                 <CardTitle>{dish.name}</CardTitle>
                 <CardText>{dish.description}</CardText>
               </CardBody>
            </Card>
          </div>
          <div className="col-5 col-sm-12 md-5 ml-3">
            <Card>
              <CardBody>
                <CardTitle>Comments</CardTitle>
                  <CardText style={{lineHeight: 28 + "px"}}>{comments}</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
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
        {this.renderDish(this.props.dish)}
      </div>
    );
  }
}

export default Dishdetail;
