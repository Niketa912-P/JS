import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    }
    return (
      <div>
        <Header />
          <Switch>
            <Route path='/home' component={HomePage}></Route>
            <Route exact path='/menu' component={() => <Menu dishes = {this.state.dishes}></Menu>}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;