import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // ✅ 추가
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";

import GroovePaper from "../assets/GroovePaper.png";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";
import Song from "../assets/song.mp3";

import AOS from "aos";
import "aos/dist/aos.css";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  width: 100%;
`;

const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // ✅ 오타 수정: romoveChile → removeChild
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      {/* ✅ 메타태그 삽입 */}
      <Helmet>
        <title>김형섭 ❤️ 이태경 우리의 결혼식에 초대합니다.</title>
        <meta property="og:title" content="김형섭 ❤️ 이태경 결혼식에 초대합니다." />
        <meta property="og:description" content="2025년 8월 9일 토요일 오후 12시 10분" />
        <meta property="og:image" content="https://hyeongseopkim.netlify.app/Gallery_Photo_3.jpg" />
        <meta property="og:url" content="https://hyeongseopkim.netlify.app/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Wrapper>
        <audio autoPlay loop>
          <source src={Song} />
        </audio>
        <Title />
        <Greeting />
        <Gallery />
        <Location />
        <Quote />
        <CongratulatoryMoney />
        <Share />
        <Footer
          style={{
            background: "#D7CCC8",
            backgroundImage: `url(${GroovePaper})`,
            opacity: 0.6,
            textAlign: "center",
          }}
        >
          Copyright © 2022 Shin Jooyoung
        </Footer>
      </Wrapper>
    </>
  );
};

export default IndexPage;
