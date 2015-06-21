package br.com.dev.rest.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.dev.rest.model.constants.Status;
import br.com.dev.rest.wrapper.StatusWrapper;

@RestController
@RequestMapping(value = "/api")
public class UtilsRestController {
	
	@RequestMapping(value = "/status")
	public List<StatusWrapper> listarStatusTarefa() {
		List<StatusWrapper> listaStatus = new ArrayList<StatusWrapper>();
		Arrays.asList(Status.values()).forEach(s -> listaStatus.add(new StatusWrapper(s)));
		return listaStatus;
	}
	
}
