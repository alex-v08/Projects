
package com.atuhome.turnos.Entitys;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "client")
public class Client {


    private Address cAddress;

    private Company cCompany;

    private String cEmail;

    @Id
    @Column(name = "id")
    private Long mId;

    private String mName;

    private String mPhone;

    private String mUsername;

    private String mWebsite;

    public Address getAddress() {
        return cAddress;
    }

    public void setAddress(Address address) {
        cAddress = address;
    }

    public Company getCompany() {
        return cCompany;
    }

    public void setCompany(Company company) {
        cCompany = company;
    }

    public String getEmail() {
        return cEmail;
    }

    public void setEmail(String email) {
        cEmail = email;
    }

    public Long getId() {
        return mId;
    }


    public String getName() {
        return mName;
    }

    public void setName(String name) {
        mName = name;
    }

    public String getPhone() {
        return mPhone;
    }

    public void setPhone(String phone) {
        mPhone = phone;
    }

    public String getUsername() {
        return mUsername;
    }

    public void setUsername(String username) {
        mUsername = username;
    }

    public String getWebsite() {
        return mWebsite;
    }

    public void setWebsite(String website) {
        mWebsite = website;
    }
}

