
import React from 'react'
import Card from './Card';

const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "2 weeks ago",
    post: "React UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "10 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "4 weeks ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$28/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "3 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "6 weeks ago",
    post: "UI/Frontend Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Fremont, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    company: "NVIDIA",
    datePosted: "10 weeks ago",
    post: "Web UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    company: "Oracle",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    company: "OpenAI",
    datePosted: "3 weeks ago",
    post: "Frontend Product Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "San Francisco, USA"
  }
];



  return (
 
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        // idx give unique index to every card
         return <div key={idx}>
          <Card company = {elem.company} date={elem.datePosted} post={elem.post} 
         tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} img={elem.brandLogo}
        />
        </div>
      })}
   
    </div>

  );
}

export default App
