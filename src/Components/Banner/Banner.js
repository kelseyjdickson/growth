import React from "react";
import styled from 'styled-components';
import banner from './womenintech.jpeg'

const BannerImage = styled.img`
  width: 600px;
  height: 400px;

`

const Banner = () => {
  return (

<BannerImage src={banner}alt="women in tech"></BannerImage>

  )
};

export default Banner;
