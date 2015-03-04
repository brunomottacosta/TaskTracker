package br.com.dev.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.dev.rest.model.Tarefa;
import br.com.dev.rest.repository.ProjetoRepository;
import br.com.dev.rest.repository.TarefaRepository;

@RestController
public class TarefaRestController {
	
	@Autowired private TarefaRepository tarefaRespository;
	@Autowired private ProjetoRepository projetoRepository;
	
	@RequestMapping(value = "/tarefas", method = RequestMethod.GET)
	public List<Tarefa> listar() {
		return tarefaRespository.findAll();
	}
	
	@RequestMapping(value = "/projetos/{projetoId}/tarefas", method = RequestMethod.GET)
	public List<Tarefa> listarPorProjeto(@PathVariable Integer projetoId) {
		return tarefaRespository.findByProjeto(projetoId);
	}
	
	@RequestMapping(value = "/projetos/{projetoId}/tarefas/{tarefaId}", method = RequestMethod.GET)
	public Tarefa getTarefa(@PathVariable Integer tarefaId, @PathVariable Integer projetoId) {
		return tarefaRespository.findOne(tarefaId);
	}
	
	@RequestMapping(value = "/projetos/{projetoId}/tarefas", method = RequestMethod.POST)
	public Tarefa salvar(@RequestBody Tarefa tarefa) {
		tarefa.setId(null);
		return tarefaRespository.saveAndFlush(tarefa);
	}
	
	@RequestMapping(value = "/projetos/{projetoId}/tarefas/{tarefaId}" , method = RequestMethod.PUT)
	public Tarefa atualizar(@RequestBody Tarefa tarefa, @PathVariable Integer tarefaId) {
		tarefa.setId(tarefaId);
		return tarefaRespository.saveAndFlush(tarefa);
	}
	
	@RequestMapping(value = "/projetos/{projetoId}/tarefas/{tarefaId}", method = RequestMethod.DELETE)
	public void remover(@PathVariable Integer tarefaId, @PathVariable Integer projetoId) {
		tarefaRespository.delete(tarefaId);
	}
	
}
