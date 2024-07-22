import { useParams } from "react-router-dom";
import AllPlacesLayout from "../components/layout/AllPlacesLayout";
import MainSectionLayout from "../components/layout/MainSectionLayout";
import PlaceItemDetails from "../components/main/PlaceItemDetails";
import { Helmet } from "react-helmet";
import { Suspense, useEffect, useState } from "react";

function PlaceDetailsPage() {
    const [loadedPlace, setLoadedPlace] = useState([]);
    const [error, setError] = useState();

    const { placeId } = useParams();

    useEffect(() => {
        async function fetchPlace() {
            try {
                const response = await fetch(`http://localhost:8080/api/places/${placeId}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch the place.");
                }

                const data = await response.json();
                setLoadedPlace(data);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchPlace();
    }, [placeId]);

    return (
        <>
            {loadedPlace && (
                <Helmet>
                    <title>{loadedPlace.title}</title>
                    <meta name="description" content={loadedPlace.description} />
                </Helmet>
            )}

            <AllPlacesLayout>
                <MainSectionLayout>
                    <Suspense fallback={<p>Loading...</p>}>
                        {error && (<h3>Error: {error}</h3>)}
                        {loadedPlace && !error && (<PlaceItemDetails place={loadedPlace} />)}
                    </Suspense>
                </MainSectionLayout>
            </AllPlacesLayout>
        </>
    );
}

export default PlaceDetailsPage;