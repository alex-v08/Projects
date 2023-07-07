
package com.atuhome.turnos.Entitys;


import jakarta.persistence.*;

@Entity
@Table(name = "company")


public class Company {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long cId;

    public Long getcId() {
        return cId;
    }

    public Company(String mBs, String mCatchPhrase, String mName) {
        this.mBs = mBs;
        this.mCatchPhrase = mCatchPhrase;
        this.mName = mName;
    }

    public Company() {
    }



    private String mBs;

    private String mCatchPhrase;

    private String mName;

    public String getBs() {
        return mBs;
    }

    public void setBs(String bs) {
        mBs = bs;
    }

    public String getCatchPhrase() {
        return mCatchPhrase;
    }

    public void setCatchPhrase(String catchPhrase) {
        mCatchPhrase = catchPhrase;
    }

    public String getName() {
        return mName;
    }

    public void setName(String name) {
        mName = name;
    }

}
