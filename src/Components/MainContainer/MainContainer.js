import React from "react";
import { diffLinesRaw } from "jest-diff";
import { isTemplateElement } from "@babel/types";

const womenData = [ {
  name: 'Kristal Garcia',
  company: "Year One",
  job_title: 'Chief Strategy Officer',
  contact_link: 'https://www.linkedin.com/in/kgarcia4/'

},
{
name: 'Erica Joy Baker',
company: "Github",
job_title: 'Director of Engineering',
contact_link: 'https://www.linkedin.com/in/ericajoy/'
},
{
name: 'Joy Buolamwini',
company: "Algorithmic Justice League",
job_title: 'Computer Scientist - Poet of Code',
contact_link: 'https://www.linkedin.com/in/buolamwini/'
},
{
  name: 'Kimberly Bryant',
  company: "Black Girls Code",
  job_title: 'Founder and CEO of Black Girls Code',
  contact_link: 'https://www.linkedin.com/in/kimberlybryant/'
  },
  {
    name: 'Reshma Saujani',
    company: "Girls Who Code",
    job_title: 'Founder of Girls Who Code',
    contact_link: 'https://www.linkedin.com/in/reshma-saujani/'
    }
] 



const MainContainer = () => {



let females = womenData.map((info) => {
  return <div>
    <h1>Name:{info.name}</h1>
    <h2>Company:{info.company}</h2>
    <h2>Job Title: {info.job_title}</h2>
    <a href={info.contact_link}/>
  </div>
})
  
  
   
  return (
    
    <div>
    <h1>MainContainer</h1>
       {females}
    </div>
      
    
  )
};

export default MainContainer;
