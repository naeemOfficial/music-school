import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Lesson from "../Lesson/Lesson";
import Blogs from "../Blogs/Blogs";
import Group from "../Group/Group";
import Banner2 from "../Banner2/Banner2";
import Auto from "../Auto/Auto";
import Teachers from "../Teachers/Teachers";
import ASlider from "../../ASlider/ASlider";
import News from "../News/News";
import Images from "../Images/Images";
import Social from "../Social/Social";

const Home = () => {
  useEffect(() => {
    window.drift.on("ready", function (api) {
      api.widget.show();
    });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <Social></Social>
      <Lesson></Lesson>
      <Blogs></Blogs>
      <Group></Group>
      <Banner2></Banner2>
      <News></News>
      <ASlider></ASlider>
      <Teachers></Teachers>
      <Auto></Auto>
      <Images></Images>
    </div>
  );
};

export default Home;
