import { useState } from "react";

import "./App.css";
import VisaBanner from "./components/Welcome/VisaBanner";
import ExplorOman from "./components/Explore/ExploreOman";
import { CompanyDescription } from "./components/CompanyDescription/Description";
import Footer from "./components/Footer/Footer";
import { ApplicationOptions } from "./components/ApplicationOptions/ApplicationOptions";
import StatisticsComponent from "./components/Statics/StaticsComponent";
import { Faq } from "./components/FAQ/Faq";
import { VisaType } from "./components/VisaType/VisaType";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <VisaBanner />
      <ExplorOman />
      <CompanyDescription />
      <ApplicationOptions />
      <StatisticsComponent />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
