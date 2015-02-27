package br.com.dev.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.dev.rest.model.Tarefa;
import br.com.dev.rest.repository.TarefaRepository;

@RestController
@RequestMapping("/tarefas")
public class TarefaRestController {
	
	@Autowired
	private TarefaRepository tarefaRespository;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Tarefa> listar() {
		return tarefaRespository.findAll();
	}
}
