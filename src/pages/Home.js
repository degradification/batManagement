import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Layout from '../components/layouts/Layout'
import runner from "../assets/runner.jpg";

class Home extends Component {
  render(){
    return(
      <React.Fragment>
      <Layout>
      <div className="home-container-top">
        <div className="home-container">
          <div className="home-text-container">
            <p className="home-text">
              Make a website to improve your business
            </p>
            <div className="homebtn-getstarted-container">
              <Button
                variant="outline-light"
                className="bat_btn_large bat_btn_general"
                href={"/CreateAccount"}
                >
                Get Started
              </Button>
            </div>
          </div>
          <div className="w-100">
            <img
              src={runner}
              height="100%"
              width="100%"
              alt="female runner"
            />
          </div>
        </div>
      </div>
      </Layout>
      </React.Fragment>
    )};
};

export default Home;
