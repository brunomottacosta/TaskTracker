package br.com.dev.rest.wrapper;

import java.io.Serializable;

import br.com.dev.rest.config.user.User;
import br.com.dev.rest.model.Comentario;
import br.com.dev.rest.model.Projeto;
import br.com.dev.rest.model.Tarefa;

public class ComentarioWrapper implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String texto;
	private User user;
	private Projeto projeto;
	private Tarefa tarefa;
	
	public ComentarioWrapper(Comentario comentario) {		
		if (comentario.getId() != null) {
			this.id = comentario.getId();
		}
		if (!comentario.getTexto().isEmpty()) {
			this.texto = comentario.getTexto();
		}
		if (comentario.getProjeto() != null) {
			this.projeto = comentario.getProjeto();
		}
		if (comentario.getTarefa() != null) {
			this.tarefa = comentario.getTarefa();
		}
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public User getUsuario() {
		return user;
	}

	public void setUsuario(User user) {
		this.user = user;
	}

	public Projeto getProjeto() {
		return projeto;
	}

	public void setProjeto(Projeto projeto) {
		this.projeto = projeto;
	}

	public Tarefa getTarefa() {
		return tarefa;
	}

	public void setTarefa(Tarefa tarefa) {
		this.tarefa = tarefa;
	}
	
}
