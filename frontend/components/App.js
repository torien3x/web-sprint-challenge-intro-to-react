import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [planetData, setPlanetData] = useState([]);
  const [peopleData, setPeopleData] = useState([]);

  // ❗ Create effects to fetch the data and put it in state
   useEffect(() => {
     const fetchData = async () => {
       try {
         const [response1, response2] = await Promise.all([
           axios.get(urlPlanets), // Replace with your first API endpoint
           axios.get(urlPeople)  // Replace with your second API endpoint
         ]);
  
         setPlanetData(response1.data); // Set data1 state with response from API 1
         setPeopleData(response2.data); // Set data2 state with response from API 2
       } catch (error) {
         // Handle errors here
         console.error(error);
       }
     };
  
     fetchData();
   }, []);

  //  console.log(planetData)
  //  console.log('peopleData', peopleData)

  
  let characterInfo = peopleData.map((data) => {
    let newArr
    let combinedData = [];
    planetData.forEach((pData) => {
      if(data.homeworld === pData.id) {
        newArr = {...data, homeworld:{...pData}}
        combinedData.push(newArr)
      }
    })
    return newArr
   })

   
  



//   useEffect(() => {
//     axios.get(` ${urlPlanets}`)
//     .then(res => {
//       setPlanetData(res.data)
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }, [])
  
//   useEffect(() => {
//     axios.get(` ${urlPeople}`)
//     .then(res => {
//       setPeopleData(res.data)
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }, [])

// console.log([...planetData, ...peopleData]);

 

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {
        characterInfo.map((people) => {
          return (
          <Character 
                    key={people.id}
                    charName={people.name}
                    home={people.homeworld}
                    birth={people.birth_year}
                />
                )
        })
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
