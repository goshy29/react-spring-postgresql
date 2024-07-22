import MainSectionLayout from "../components/layout/MainSectionLayout";
import AllPlacesLayout from "../components/layout/AllPlacesLayout";
import PlacesList from "../components/main/PlacesList";
import { Helmet } from "react-helmet";
import { Suspense, useEffect, useState } from "react";

function PlacesPage() {
    const [loadedPlaces, setLoadedPlaces] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchAllPlaces() {
            try {
                const response = await fetch("http://localhost:8080/api/places");

                if (!response.ok) {
                    throw new Error("Failed to fetch the places.");
                }

                const data = await response.json();
                setLoadedPlaces(data);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchAllPlaces();
    }, []);

    return (
        <>
            <Helmet>
                <title>Places</title>
                <meta name="description" content="Explore your dream destinations." />
            </Helmet>

            <AllPlacesLayout>
                <MainSectionLayout>
                    <Suspense fallback={<p>Loading...</p>}>
                        {error && (<h3>Error: {error}</h3>)}
                        {loadedPlaces.length === 0 && !error && (<h1>Places Not Found.</h1>)}
                        {loadedPlaces && !error && (<PlacesList places={loadedPlaces} />)}
                    </Suspense>
                </MainSectionLayout>
            </AllPlacesLayout>
        </>
    );
}

export default PlacesPage;