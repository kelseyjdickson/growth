import React from "react";
import { diffLinesRaw } from "jest-diff";
import { isTemplateElement } from "@babel/types";
import kristal from './kristal.png'
import erika from './erika.png'
import kimberly from './kimberly.png'
import joy from './joy.png'
import reshma from './reshma.png'


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
    }
] 



const MainContainer = () => {



let females = womenData.map((info) => {
  return <div>
    <h1>Name:{info.name}</h1>
    <h2>Company:{info.company}</h2>
    <h2>Job Title: {info.job_title}</h2>
    <a href={info.contact_link}/>
    <img src={info.image}alt="powerful ladies"/>
  </div>
})
  
  
   
  return (
    
    <div>
    
       {females}
    </div>
      
    
  )
};

export default MainContainer;
