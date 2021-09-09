package com.and.model;

import lombok.Data;

import java.io.Serializable;

@Data
public class SessionModel implements Serializable {

    private String customerId;

    private boolean bb;

    private boolean soip;

    private boolean telephone;

    private boolean persisted;

}
