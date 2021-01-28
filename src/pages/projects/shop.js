import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

//import components

//import syles and assets
import styled from "styled-components";
import { Back } from "../../assets/Icons";

import PLP from "../../assets/rimowa/rimowa_plp.gif";
import Purchase from "../../assets/rimowa/rimowa_purchase.gif";

const Shop = () => {
  let history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <Link to="/">
        <Logo>J</Logo>
      </Link>
      <Header>
        <div className="col1 hero">
          <div className="sub">
            <div
              style={{ marginTop: "1.125em", cursor: "pointer" }}
              onClick={() => history.goBack()}
            >
              <Back width="20" height="20" color="#000" stroke="1" />
            </div>
          </div>
        </div>
        <div className="col2">
          <h1>SNACK SHOP</h1>
          <p className="header">
            I created a site where you can shop for snacks. There's a customer
            facing route where users can browse and order products, and a admin
            facing route where a user can manange products, orders and users. I
            used React and Redux for frontend and node.js for backend. Backend
            is still work in progress, and the live demo is for frontend for
            now, but you can check out my code in my github.
          </p>
          <div className="btn">
            <div>
              <a target="_blank" href="http://myshopdemo.netlify.app/">
                Live
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://github.com/brandnewjinah/ecommerce"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </Header>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Browse</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              As a customer, you can browse products categorized by main
              categories and sub-categories. Similar items on the detail page
              are pulled from the same sub-category.
            </p>
            <div className="media">
              <img
                src="https://user-images.githubusercontent.com/44072645/106151996-cf0d9e00-6131-11eb-96db-99c283978627.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Cart / Checkout</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              You can edit quantity, delete item and checkout items from your
              cart. For the demo purpose, it's all controlled by redux.
            </p>
            <div className="media">
              <img
                src="https://user-images.githubusercontent.com/44072645/106151169-ee57fb80-6130-11eb-9d8c-24c8bcdbdc4e.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>CMS</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              As an admin, you can track sales, manage products, view customer
              orders and customer information.
            </p>
            <div className="media">
              <img
                src="https://user-images.githubusercontent.com/44072645/106151583-5b6b9100-6131-11eb-85d4-1e81ee260b25.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 40px;
  height: 40px;
  top: 4em;
  background-color: #000;
  color: #fff;

  @media (max-width: 950px) {
    top: 0;
  }
`;

const Header = styled.section`
  width: 100%;
  max-width: 1360px;
  display: flex;
  margin: 0 auto;
  padding: 4em 4em 0 8em;

  h1 {
    font-family: "Open Sans Condensed", sans-serif;
    margin-bottom: 0.5em;
  }

  .header {
    margin: 1.5em 0;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
  }

  .btn {
    display: flex;

    a {
      font-size: 1rem;
      text-decoration: underline;
      margin: 0 1em 1.5em 0;
    }
  }

  .col1 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col2 {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 0 0; //grow, shrink , basis
  }

  .media {
    width: 100%;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    padding: 3em 0;
    margin: 1em 0;

    img {
      max-width: 600px;
      object-fit: cover;
      margin: 1em 0;
    }
  }

  .sub {
    display: flex;
    justify-content: flex-end;
    padding: 0 4em 0 0;
  }

  h6 {
    text-transform: uppercase;
    font-size: 0.75rem;

    &:before {
      display: inline-block;
      content: "";
      width: 1rem;
      height: 1px;
      transform: translate(-0.5em, -0.25em);
      background-color: #ff7382;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 2.5em;

    .col1 {
      max-width: 100%;
    }

    .col2 {
      display: block;
    }

    .hero {
      padding-top: 0.875em;
    }

    .sub {
      justify-content: flex-start;
      margin-bottom: 3em;
    }

    h6 {
      &:before {
        display: none;
      }

      &:after {
        display: inline-block;
        content: "";
        width: 1rem;
        height: 1px;
        transform: translate(0.5em, -0.25em);
        background-color: #ff7382;
      }
    }

    .media {
      display: block;

      img {
        width: 100%;
        object-fit: cover;
        margin: 1em 0;
      }

      iframe {
        width: 100%;
      }
    }
  }
`;

const Section = styled.section`
  width: 100%;
  max-width: 1360px;
  display: flex;
  margin: 0 auto;
  padding: 4em 4em 4em 8em;

  h1 {
    font-family: "Open Sans Condensed", sans-serif;
    margin-bottom: 0.5em;
  }

  .header {
    margin: 1.5em 0;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
  }

  .btn {
    display: flex;

    a {
      font-size: 1rem;
      text-decoration: underline;
      margin: 0 1em 1.5em 0;
    }
  }

  .col1 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col2 {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 0 0; //grow, shrink , basis
  }

  .media {
    width: 100%;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    padding: 3em 0;
    margin: 1em 0;

    img {
      max-width: 600px;
      object-fit: cover;
      margin: 1em 0;
    }
  }

  .sub {
    display: flex;
    justify-content: flex-end;
    padding: 0 4em 0 0;
  }

  h6 {
    text-transform: uppercase;
    font-size: 0.75rem;

    &:before {
      display: inline-block;
      content: "";
      width: 1rem;
      height: 1px;
      transform: translate(-0.5em, -0.25em);
      background-color: #ff7382;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 2.5em;

    .col1 {
      max-width: 100%;
    }

    .col2 {
      display: block;
    }

    .hero {
      padding-top: 0.875em;
    }

    .sub {
      justify-content: flex-start;
      margin-bottom: 3em;
    }

    h6 {
      &:before {
        display: none;
      }

      &:after {
        display: inline-block;
        content: "";
        width: 1rem;
        height: 1px;
        transform: translate(0.5em, -0.25em);
        background-color: #ff7382;
      }
    }

    .media {
      display: block;

      img {
        width: 100%;
        object-fit: cover;
        margin: 1em 0;
      }

      iframe {
        width: 100%;
      }
    }
  }
`;

export default Shop;
