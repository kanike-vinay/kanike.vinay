package com.vinay.photoapp.api.account.management.photoappapiaccountmanagement.ui.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("account")
public class AccountController {

    @GetMapping("/status/check")
    public String getStatus(){
        return "Account Working";
    }
}
