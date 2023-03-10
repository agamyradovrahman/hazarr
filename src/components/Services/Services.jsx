import React from "react"
import ServicesData from "./ServicesData"
import "./Services.css"

const Services = () => {
  return (
    <div className="aq" id="services">
      <section className='Services topMarign'>
        <div className='container'>
          <div className='heading'>
            <h1 className="baslyk">OUR SERVICES</h1>
          </div>

          <div className='contain grid topMarign'>
            {ServicesData.map((val) => {
              return (
                <div className='box' key={val.id}>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services