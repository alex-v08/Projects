package com.dh.clinica;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.apache.log4j.Logger;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;


@ControllerAdvice
public class GloabalExceptionHandler {



    private static final Logger logger = Logger.getLogger(GloabalExceptionHandler.class);
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> todosErrores(Exception ex, WebRequest request) {
        logger.error(ex.getMessage());

        return new ResponseEntity<>("error" + ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }







}
