import React,{useEffect} from 'react'

const App = () => {
  useEffect(()=>{
    fetch(`https://data.covid19india.org/data.json`).then(
      res => res.json()
    ).then(jsondata => console.log(jsondata.statewise))
  },[])
  return (
    <div>
      <center>
        <h1>INDIA COVID-19 dASHBOARD</h1>
      </center>
    </div>
  )
}

export default App
