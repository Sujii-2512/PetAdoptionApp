import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Pet from "./Pet";
import "./PetDetails.css"
import { useQuery } from "@tanstack/react-query";
import { fetchPet } from "./fetchPet";

const PetDetails = () => {
    const { id } = useParams();

    //create react-query

    const petQuery = useQuery({
        queryKey:["pets", id],
        queryFn: fetchPet,
        enabled: !!id,
        });

    if(petQuery.isLoading){
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
            )
        }

    if (petQuery.isError || !petQuery.data?.pets?.length) {
        return <div>Error loading pet details</div>;
      }

    const pet = petQuery.data.pets[0];
    return (
        <div className="details">
            <div>
                <img src={pet.images[0]} alt={pet.name} />
                <h1>{pet.name}</h1>
                <h2>{`${pet.animal} - ${pet.breed} - ${pet.city}, ${pet.state}`}</h2>
                <button>Adopt {pet.name}</button>
                <p>{pet.description}</p>
            </div>
        </div>
        )
    };

export default PetDetails;