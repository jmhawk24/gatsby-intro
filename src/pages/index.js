import React from "react";
import Header from '../components/header'
import LocationContainer from '../components/locationContainer'

export default function Home() {
  return (
    <div style={{ color: `purple`}}>
        <Header headerText="Welcome to Truck Stop"/>
        <LocationContainer />
    </div>
  )
}