import React from "react";
import styled from "styled-components";
import {
  accessoryImg,
  modelsImg,
  modelyImg,
  modelxImg,
  model3Img,
  solarPanelImg,
  solarRoofImg,
} from "../assets/publicAssets.js";

import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelsImg}
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelyImg}
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelxImg}
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={model3Img}
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg={solarPanelImg}
        leftBtn="Order Now"
        rightBtn="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg={solarRoofImg}
        leftBtn="Order Now"
        rightBtn="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg={accessoryImg}
        leftBtn="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 110vh;
`;
