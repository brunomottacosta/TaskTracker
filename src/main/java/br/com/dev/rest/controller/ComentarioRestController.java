package br.com.dev.rest.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.dev.rest.model.Comentario;
import br.com.dev.rest.repository.ComentarioRepository;
import br.com.dev.rest.wrapper.ComentarioWrapper;

@RestController
public class ComentarioRestController {
	
	@Autowired private ComentarioRepository comentarioRepository;
	
	@RequestMapping(value = "/comentarios", method = RequestMethod.GET)
	public List<ComentarioWrapper> listar() {
		
		List<ComentarioWrapper> wrappers = new ArrayList<ComentarioWrapper>();
		List<Comentario> comentarios = comentarioRepository.findAll();
		
		comentarios.forEach(p -> wrappers.add(new ComentarioWrapper(p)));	
		
		return wrappers;
	}
	
	@RequestMapping(value = "/comentarios/{comentarioId}", method = RequestMethod.GET)
	public ComentarioWrapper getComentario(@PathVariable Integer comentarioId) {
		
		Comentario comentario = comentarioRepository.findOne(comentarioId);
		ComentarioWrapper wrapper = new ComentarioWrapper(comentario);
		
		return wrapper;
	}
	
	@RequestMapping(value = "/comentarios", method = RequestMethod.POST)
	public Comentario salvar(@RequestBody Comentario comentario) {
		comentario.setId(null);
		return comentarioRepository.saveAndFlush(comentario);		
	}
	
	@RequestMapping(value = "/comentarios/{comentarioId}", method = RequestMethod.PUT)
	public Comentario atualizar(@RequestBody Comentario comentario, @PathVariable Integer comentarioId) {
		comentario.setId(comentarioId);
		return comentarioRepository.saveAndFlush(comentario);
	}
	
	@RequestMapping(value = "/comentarios/{comentarioId}", method = RequestMethod.DELETE)
	public void remover(@PathVariable Integer comentarioId) {
		comentarioRepository.delete(comentarioId);
	}	
	
}
