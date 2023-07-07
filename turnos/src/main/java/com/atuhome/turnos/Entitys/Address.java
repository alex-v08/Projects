
package com.atuhome.turnos.Entitys;


import jakarta.persistence.*;
import com.atuhome.turnos.Entitys.Geo;
@Entity
@Table(name = "address")

public class Address {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
    private Long aId;




    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "geo_id")
    private Geo mGeo;

    private String mCity;



    private String mStreet;

    private String mSuite;

    private String mZipcode;

    public String getCity() {
        return mCity;
    }

    public Address() {
    }



    public Address(String mCity, Geo mGeo, String mStreet, String mSuite, String mZipcode) {
        this.mCity = mCity;
        this.mGeo = mGeo;
        this.mStreet = mStreet;
        this.mSuite = mSuite;
        this.mZipcode = mZipcode;
    }

    public void setCity(String city) {
        mCity = city;
    }

    public Geo getGeo() {
        return mGeo;
    }

    public void setGeo(Geo geo) {
        mGeo = geo;
    }

    public String getStreet() {
        return mStreet;
    }

    public void setStreet(String street) {
        mStreet = street;
    }

    public String getSuite() {
        return mSuite;
    }

    public void setSuite(String suite) {
        mSuite = suite;
    }

    public String getZipcode() {
        return mZipcode;
    }

    public void setZipcode(String zipcode) {
        mZipcode = zipcode;
    }

    public Long getaId() {
        return aId;
    }
}
