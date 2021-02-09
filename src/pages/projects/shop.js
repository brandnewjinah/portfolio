import React, { useLayoutEffect } from "react";

//import libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

//import components

//import syles and assets
import Colors from "../../components/Colors";
import { ArrowUpRight } from "../../assets/Icons";

const Shop = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Wrapper>
      <Link to="/">
        <Logo>J</Logo>
      </Link>
      <Main>
        <Section>
          <div className="three">
            <div className="header">E-Commerce</div>
            {/* <div className="overline">/ Web Development</div> */}
          </div>
          <div className="seven">
            <div className="description">
              Shop for snacks as a customer, manage products and orders as an
              admin.
            </div>

            <div className="btncontainer">
              <a target="_blank" href="http://myshopdemo.netlify.app/">
                <div className="btn">
                  <div>LIVE</div>
                  <ArrowUpRight
                    width="14"
                    height="14"
                    color="#000"
                    stroke="2"
                  />
                </div>
              </a>
              <a
                target="_blank"
                href="https://github.com/brandnewjinah/ecommerce"
              >
                <div className="btn">
                  <div>GITHUB</div>
                  <ArrowUpRight
                    width="14"
                    height="14"
                    color="#000"
                    stroke="2"
                  />
                </div>
              </a>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Stacks</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                React, Redux, Styled-Components, Node.js and MongoDB work in
                progress.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Why</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                I've always wondered how ecommerce works in a deeper level. What
                happens before and after customers make purchase? How are
                products stored and organized in the database? How are orders
                managed? To answer my own questions, I decided to create a
                customer facing, an admin facing interfaces and a database.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Process</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                Here are some examples of the sketches I've done to organize
                pages, models and flows before start coding.
              </p>
              <div className="media">
                <img
                  src="https://user-images.githubusercontent.com/44072645/107262877-f435c280-69f5-11eb-9261-fe5e9159a6be.jpg"
                  alt=""
                />
              </div>
              <div className="media">
                <img
                  src="https://user-images.githubusercontent.com/44072645/107262946-04e63880-69f6-11eb-95d5-2470d7ece54b.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Admin</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                I created a basic CMS where an admin can track sales, manage
                products, view customer orders and customer information.
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
        <Section>
          <div className="three">
            <div className="sub">Customer</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                A customer can browse products as categorized by an admin.
                Similar items on the detail page are pulled from the same
                sub-category.
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
          <div className="three">
            <div className="sub">Checkout</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                A customer can edit quantity, delete item and checkout items
                from your cart. For the demo purpose, it's all controlled by
                redux.
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
      </Main>
    </Wrapper>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;

  a {
    display: flex;
  }
`;

const Logo = styled(Flex)`
  align-items: center;
  position: fixed;
  width: 2.5em;
  height: 2.5em;
  top: 1em;
  left: 1em;
  background-color: #000;
  color: #fff;
`;

const Main = styled.div`
  padding-top: 4em;
`;

const Section = styled(Flex)`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 2em 10em;

  .three {
    flex: 0 1 30%;
    padding-right: 4em;
    text-align: right;
  }

  .seven {
    flex: 0 1 70%;
  }

  .overline {
    font-size: 1.125rem;
    font-weight: 300;
  }

  .header {
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 700;
  }

  .sub {
    text-align: right;
    font-size: 0.8rem;
    letter-spacing: 0.125rem;
    font-weight: 400;
    text-transform: uppercase;

    &:before {
      display: inline-block;
      content: "";
      width: 0.875rem;
      height: 1px;
      transform: translate(-0.5em, -0.25em);
      background-color: #ff7382;
    }
  }

  .body {
    font-size: 0.95rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
  }

  .description {
    font-size: 1.45rem;
    font-weight: 400;
    line-height: 2.25rem;
  }

  .btncontainer {
    display: flex;
    margin-top: 1em;
  }

  .btn {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    letter-spacing: 0.2rem;
    border-bottom: 1px solid #ff7382;
    margin-right: 2em;
  }

  /* .media {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1em 0;
    margin: 1em 0;

    img {
      width: 100%;
      object-fit: cover;
      margin: 1em 0;
    }
  } */

  .media {
    width: 100%;
    background-color: #fafafa;
    padding: 3em;
    margin: 1em 0;

    img {
      width: 100%;
      height: 100%;
      /* object-fit: contain; */
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 5em 2em 2em;

    .three {
      padding-right: 0;
      text-align: left;
    }

    .description {
      margin: 1em 0 1.5em;
    }

    .sub {
      text-align: left;
    }

    .media {
      background-color: #fff;
      margin: 1em 0;
      padding: 0;
    }
  }
`;

export default Shop;
