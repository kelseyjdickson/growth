import React , {useRef, useEffect, useState} from "react";
//assets
import kristal from './kristal.png'
import erika from './erika.png'
import kimberly from './kimberly.png'
import joy from './joy.png'
import reshma from './reshma.png'
import tiauna from './Tiauna.png'
import veni from './Veni1.png'
import catherine from './catherine.png'
import naz from './Naz.png'
// Styles
import { Card, Grid, GridColumn } from 'semantic-ui-react'
import styled from 'styled-components'


const womenData = [ {
  name: 'Kristal Garcia',
  company: "Year One",
  job_title: 'Chief Strategy Officer',
  contact_link: 'https://www.linkedin.com/in/kgarcia4/',
  image: kristal

},
{
name: 'Erica Joy Baker',
company: "Github",
job_title: 'Director of Engineering',
contact_link: 'https://www.linkedin.com/in/ericajoy/',
image: erika
},
{
name: 'Joy Buolamwini',
company: "Algorithmic Justice League",
job_title: 'Computer Scientist - Poet of Code',
contact_link: 'https://www.linkedin.com/in/buolamwini/',
image: joy
},
{
  name: 'Kimberly Bryant',
  company: "Black Girls Code",
  job_title: 'Founder and CEO of Black Girls Code',
  contact_link: 'https://www.linkedin.com/in/kimberlybryant/',
  image: kimberly
  },
  {
    name: 'Reshma Saujani',
    company: "Girls Who Code",
    job_title: 'Founder of Girls Who Code',
    contact_link: 'https://www.linkedin.com/in/reshma-saujani/',
    image: reshma
    },
    {
    name: 'Tiauna Paul',
    company:'Job Searching',
    job_title: 'Software Engineer',
    contact_link: 'https://www.linkedin.com/in/tiauna-paul-0981ab193/',
    image: tiauna,
    },
    {
      name: 'Veni Kunche',
      company:'Diversify Tech',
      job_title: 'Founder of Diversify Tech',
      contact_link: 'https://www.linkedin.com/in/venikunche/',
      image: veni,
      },
      {
        name: 'Catherine Ricafort McCreary',
        company:'Stitch Fix',
        job_title: 'Software Engineer and Co-Founder of Artists Who Code',
        contact_link: 'https://www.linkedin.com/in/catherinericafortmccreary/',
        image: catherine,
        },
        {
          name: 'Naz Delam',
          company:'Netflix',
          job_title: 'Production Engineer and Career Coach ',
          contact_link: 'https://www.linkedin.com/in/nazdelam/',
          image: naz,
          }

 
] 




const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:100%;
  height: auto;
  flex-wrap: wrap;
  margin: 10px;

`
const MainContainer = () => {
  
 

let females = womenData.map((info) => {
  return <Card 
    style={{
      backgroundColor: "pink",
      
      
    }} 
    key={info.id}
    header={info.name} 
    meta={info.company}
    description={info.job_title}
    image={info.image}
    href={info.contact_link}
    />
   })
  return (
    <StyledDiv>
      {females}
    </StyledDiv>
  )
};


export default MainContainer;
