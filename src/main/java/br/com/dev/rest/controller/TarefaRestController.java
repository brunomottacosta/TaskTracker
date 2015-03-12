package br.com.dev.rest.controller;

import java.util.ArrayList;
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
import br.com.dev.rest.wrapper.TarefaWrapper;

@RestController
public class TarefaRestController {
	
	@Autowired private TarefaRepository tarefaRespository;
	@Autowired private ProjetoRepository projetoRepository;
	
	@RequestMapping(value = "/tarefas", method = RequestMethod.GET)
	public List<TarefaWrapper> listar() {
		
		List<TarefaWrapper> wrappers = new ArrayList<TarefaWrapper>();
		List<Tarefa> tarefas =  tarefaRespository.findAll();
		
		tarefas.forEach(t -> wrappers.add(new TarefaWrapper(t)));
		
		return wrappers;
	}
	
	@RequestMapping(value = "/tarefas/{tarefaId}", method = RequestMethod.GET)
	public TarefaWrapper getTarefa(@PathVariable Integer tarefaId) {
		
		Tarefa tarefa = tarefaRespository.findOne(tarefaId);
		TarefaWrapper wrapper = new TarefaWrapper(tarefa);
		
		return wrapper;
	}
	
	@RequestMapping(value = "/tarefas", method = RequestMethod.POST)
	public Tarefa salvar(@RequestBody Tarefa tarefa) {
		tarefa.setId(null);
		return tarefaRespository.saveAndFlush(tarefa);
	}
	
	@RequestMapping(value = "/tarefas/{tarefaId}" , method = RequestMethod.PUT)
	public Tarefa atualizar(@RequestBody Tarefa tarefa, @PathVariable Integer tarefaId) {
		tarefa.setId(tarefaId);
		return tarefaRespository.saveAndFlush(tarefa);
	}
	
	@RequestMapping(value = "/tarefas/{tarefaId}", method = RequestMethod.DELETE)
	public void remover(@PathVariable Integer tarefaId) {
		tarefaRespository.delete(tarefaId);
	}
	
}
