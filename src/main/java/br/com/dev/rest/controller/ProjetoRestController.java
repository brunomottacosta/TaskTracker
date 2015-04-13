package br.com.dev.rest.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.dev.rest.model.Projeto;
import br.com.dev.rest.repository.ProjetoRepository;
import br.com.dev.rest.wrapper.ProjetoWrapper;

@RestController
@RequestMapping(value = "/api")
public class ProjetoRestController {
	
	@Autowired
	private ProjetoRepository projetoRepository;
	
	@RequestMapping(value = "/projetos", method = RequestMethod.GET)
	public List<ProjetoWrapper> listar() {
		
		List<ProjetoWrapper> wrappers = new ArrayList<ProjetoWrapper>();
		List<Projeto> projetos = projetoRepository.findAll();
		
		projetos.forEach(p -> wrappers.add(new ProjetoWrapper(p)));	
		
		return wrappers;
	}
	
	@RequestMapping(value = "/projetos/default", method = RequestMethod.GET)
	public ProjetoWrapper getDefault() {
		return new ProjetoWrapper();
	}
	
	@RequestMapping(value = "/projetos/{projetoId}", method = RequestMethod.GET)
	public ProjetoWrapper getProjeto(@PathVariable Integer projetoId) {
		
		Projeto projeto = projetoRepository.findOne(projetoId);
		ProjetoWrapper wrapper = new ProjetoWrapper(projeto);
		
		return wrapper;
	}
	
	@RequestMapping(value = "/projetos", method = RequestMethod.POST)
	public Projeto salvar(@RequestBody Projeto projeto) {		
		projeto.setId(null);
		return projetoRepository.saveAndFlush(projeto);		
	}
	
	@RequestMapping(value = "/projetos/{projetoId}", method = RequestMethod.PUT)
	public Projeto atualizar(@RequestBody Projeto projeto, @PathVariable Integer projetoId) {
		projeto.setId(projetoId);
		return projetoRepository.saveAndFlush(projeto);
	}
	
	@RequestMapping(value = "/projetos/{projetoId}", method = RequestMethod.DELETE)
	public void remover(@PathVariable Integer projetoId) {
		projetoRepository.delete(projetoId);
	}	
}
