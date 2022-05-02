import React, { ChangeEvent, FC, useEffect, useState } from "react";
// import { getRocketsById } from "../../services/spacex/service";

export const SpacexRockets: FC = () => {
    const [rocketT, setRocketT] = useState([]);
    const [dragonT, setDragonT] = useState([]);
    const [roadsterT, setRoadsterT] = useState([]);

    //Coment
    //Fetch de rockets
      
      useEffect(() => {
        const fetchRocket = async () => {
          const newRocket = await fetch("https://api.spacexdata.com/v3/rockets");
          const json = await newRocket.json();
          setRocketT(json);
        };
        fetchRocket();
      }, [setRocketT]);

    //Fetch de Dragons
    useEffect(() => {
      const fetchDragon = async () => {
        const newDragon = await fetch("https://api.spacexdata.com/v3/dragons");
        const json = await newDragon.json();
        setDragonT(json);
      };
      fetchDragon();
    }, [setDragonT]);

    //Fetch de Roadster
    useEffect(() => {
        const fetchRoadster = async () => {
          const newRoadster = await fetch("https://api.spacexdata.com/v3/roadster");
          const json = await newRoadster.json();
          setRoadsterT(json);
        };
        fetchRoadster();
      }, [setRoadsterT]);


  return (
    <div className="text" >
        <div className="text">
        {rocketT.map(({rocket_name, id, company, country, description, flickr_images})=>(
           <div key={id}><h3>{rocket_name}</h3>
             <div >Compañia: {company}</div>
             <div>País: {country}</div> 
             <div>Descripció: {description}</div>
             <img className="imgmediana" src={flickr_images}></img>
            </div>
        ))}
        </div>
        <div className="text">
        {dragonT.map(({id, name, type,flickr_images, description})=>(
           <div key={id}><h3>{name}</h3>
             <div>Tipo: {type}</div>
             <div>Descripción: {description}</div>
             <img className="imgmediana" src={flickr_images}></img>
           </div>
        ))}
        </div>

    </div>
  );
};
