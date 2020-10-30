import React, { FC } from "react";

//import components
import Layout from "../../components/layout";
import OneCol from "../../components/onecol";
import TwoCol from "../../components/twocols";

//import syles and assets
import styled from "styled-components";
import Cover from "../../assets/beautybd/cover.png";
import Overview from "../../assets/beautybd/overview.png";
import Journey from "../../assets/beautybd/journey.jpg";
import Wire1 from "../../assets/beautybd/bbyd_wire_1.jpg";
import Wire2 from "../../assets/beautybd/bbyd_wire_2.jpg";
import Wire3 from "../../assets/beautybd/bbyd_wire_3.jpg";
import Wire4 from "../../assets/beautybd/bbyd_wire_4.jpg";
import UI from "../../assets/beautybd/bbyd_UI_1.jpg";

interface Props {}

const BeautyBD: FC<Props> = () => {
  return (
    <Layout>
      <Header>
        <h1 className="heading">Beauty By Design</h1>
        <h6 className="stacks">UX/UI Design</h6>
        <div className="media">
          <img src={Cover} alt="" />
        </div>
        <p>
          <b>Beauty By Design</b> is an online skincare concierge that connects
          customers with professional estheticians. It provides accurate skin
          diagnoses and recommends personalized skincare products.
        </p>
        <div className="btn">
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/ez-texting-messaging-app/id1465358979"
          >
            <button>Live Site</button>
          </a>
        </div>
      </Header>
      <Main>
        <Section style={{ backgroundColor: "#fafafa" }}>
          <OneCol img={Overview}></OneCol>
        </Section>
        <Section>
          <OneCol img={Journey}>
            <h4>Define</h4>
            <p>
              The goal was to create a mobile centric platform - starting with
              the web then move onto an app. The challenge was to have seamless
              consultation, evaluation and shopping experience with limited
              web-based technology. I created a user journey map to make sure
              there's no hurdle in the process.
            </p>
          </OneCol>
        </Section>
        <Section style={{ backgroundColor: "#fafafa" }}>
          <TwoCol img={Wire1}>
            <h4>Wire - Diagnosis</h4>
            <p>
              Based on initial data given by the client, I defined user models
              that helped incorporating both business goals and user goals. It
              was importnat to understand different user groupt sought after
              different benefits
            </p>
          </TwoCol>
        </Section>
        <Section>
          <TwoCol right={true} img={Wire2}>
            <h4>Wire - Evaluation</h4>
            <p>
              Implementing the skin analysis and evaluation step was the most
              challenging yet critical part of the design. Because of limited
              technology, customers had to be driven out of the iste for their
              native camera.
            </p>
          </TwoCol>
        </Section>
        <Section style={{ backgroundColor: "#fafafa" }}>
          <TwoCol img={Wire3}>
            <h4>Wire - Analysis</h4>
            <p>
              I created a very thorough sitemaps that captured every aspect of
              the site.
            </p>
          </TwoCol>
        </Section>
        <Section>
          <TwoCol right={true} img={Wire4}>
            <h4>Wire - Order</h4>
            <p>
              I identified user types and defined their pain points as well as
              their needs in order to help them acheive their goals.
            </p>
          </TwoCol>
        </Section>
        <Section>
          <OneCol img={UI}>
            <h4>UI Design</h4>
            <p>
              I stepped in to ggive an initial UI design guideline. The site was
              heavy in content, so I recommended keeping the site design to be
              clean and minimal, but accentuated enough to have encouraging feel
              throughout.
            </p>
          </OneCol>
        </Section>
      </Main>
    </Layout>
  );
};

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  max-width: 800px;

  h1 {
    font-weight: 700;
    color: #193c48;
  }

  p {
    font-size: 1.0875rem;
    line-height: 2.25rem;
    color: #6d6d6d;
  }

  .media {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;

    img {
      max-width: 800px;
    }
  }

  .btn {
    margin: 2em 0;
  }
`;

const Main = styled.div`
  padding: 4em 0;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 4em 0;

  h4 {
    font-weight: 600;
  }

  p {
    font-size: 1.0875rem;
    line-height: 1.875rem;
    color: #6d6d6d;
  }
`;

export default BeautyBD;
