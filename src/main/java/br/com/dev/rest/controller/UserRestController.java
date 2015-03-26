package br.com.dev.rest.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserRestController {
	
	@RequestMapping(value = "/user", method = RequestMethod.POST)
	public Principal user(Principal user) {
		return user;
	}	
}
