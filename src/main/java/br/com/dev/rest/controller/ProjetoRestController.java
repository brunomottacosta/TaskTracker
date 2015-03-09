package br.com.dev.rest.controller;

import java.time.Instant;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.dev.rest.model.Projeto;
import br.com.dev.rest.repository.ProjetoRepository;

@RestController
public class ProjetoRestController {
	
	@Autowired
	private ProjetoRepository projetoRepository;
	
	@RequestMapping(value = "/projetos", method = RequestMethod.GET)
	public List<Projeto> listar() {
		return projetoRepository.findAll();
	}
	
	@RequestMapping(value = "/projetos/{id}", method = RequestMethod.GET)
	public Projeto getProjeto(@PathVariable Integer id) {
		return projetoRepository.findOne(id);
	}
	
	@RequestMapping(value = "/projetos", method = RequestMethod.POST)
	public Projeto salvar(@RequestBody Projeto projeto) {
		projeto.setId(null);
		projeto.setCriacao(Date.from(Instant.now()));
		return projetoRepository.saveAndFlush(projeto);		
	}
	
	@RequestMapping(value = "/projetos/{id}", method = RequestMethod.PUT)
	public Projeto atualizar(@RequestBody Projeto projeto, @PathVariable Integer id) {
		projeto.setId(id);
		return projetoRepository.saveAndFlush(projeto);
	}
	
	@RequestMapping(value = "/projetos/{id}", method = RequestMethod.DELETE)
	public void remover(@PathVariable Integer id) {
		projetoRepository.delete(id);
	}	
}
