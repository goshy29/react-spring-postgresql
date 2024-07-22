package com.myplaces.service;

import com.myplaces.model.Place;
import com.myplaces.repository.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlaceService {
    private final PlaceRepository placeRepository;

    @Autowired
    public PlaceService(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    public List<Place> getAllPlaces() {
        return placeRepository.findAll();
    }

    public Optional<Place> getPlaceById(Long id) {
        return placeRepository.findById(id);
    }

    public Place createPlace(Place place) {
        return placeRepository.save(place);
    }

    public Optional<Place> updatePlace(Long id, Place placeDetails) {
        return placeRepository.findById(id)
                .map(place -> {
                    place.setTitle(placeDetails.getTitle());
                    place.setPlace(placeDetails.getPlace());
                    place.setCountry(placeDetails.getCountry());
                    place.setImage(placeDetails.getImage());
                    place.setDescription(place.getDescription());
                    return placeRepository.save(place);
                });
    }

    public boolean deletePlace(Long id) {
        boolean isPlaceExist = placeRepository.existsById(id);
        if (isPlaceExist) {
            placeRepository.deleteById(id);
        }
        return isPlaceExist;
    }
}
