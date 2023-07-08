package com.atuhome.turnos.Entitys;


import jakarta.persistence.*;

@Entity
@Table(name = "geo")


public class Geo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long gId;
    private String mLat;

    private String mLng;

    public Geo(String mLat, String mLng) {
        this.mLat = mLat;
        this.mLng = mLng;
    }

    public Geo() {
    }



    public String getLat() {
        return mLat;
    }

    public void setLat(String lat) {
        mLat = lat;
    }

    public String getLng() {
        return mLng;
    }

    public void setLng(String lng) {
        mLng = lng;
    }

    public Long getgId() {
        return gId;
    }


    public Long getId() {

        return gId;

    }
}
