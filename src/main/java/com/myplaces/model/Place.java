package com.myplaces.model;

import jakarta.persistence.*;

@Entity
@Table(name = "myplaces")
public class Place {
    @Id
    @SequenceGenerator(
            name = "place_sequence",
            sequenceName = "place_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "place_sequence"
    )
    private Long id;
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "place", nullable = false)
    private String place;
    @Column(name = "country", nullable = false)
    private String country;
    @Column(name = "image", nullable = false)
    private String image;
    @Column(name = "description", nullable = false)
    private String description;

    public Place() {}

    public Place(String title, String place, String country, String image, String description) {
        this.title = title;
        this.place = place;
        this.country = country;
        this.image = image;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
