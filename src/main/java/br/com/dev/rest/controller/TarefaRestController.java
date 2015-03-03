package br.com.dev.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@RequestMapping(value = "/projeto/{projetoId}", method = RequestMethod.GET)
	public List<Tarefa> listarPorProjeto(@PathVariable Integer projetoId) {
		return tarefaRespository.findByProjeto(projetoId);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Tarefa getTarefa(@PathVariable Integer id) {
		return tarefaRespository.findOne(id);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Tarefa salvar(@RequestBody Tarefa tarefa) {
		tarefa.setId(null);
		return tarefaRespository.saveAndFlush(tarefa);
	}
	
	@RequestMapping(value = "/{id}" , method = RequestMethod.PUT)
	public Tarefa atualizar(@RequestBody Tarefa tarefa, @PathVariable Integer id) {
		tarefa.setId(id);
		return tarefaRespository.saveAndFlush(tarefa);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void remover(@PathVariable Integer id) {
		tarefaRespository.delete(id);
	}
	
}
