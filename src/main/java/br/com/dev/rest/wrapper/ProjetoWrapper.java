package br.com.dev.rest.wrapper;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import br.com.dev.rest.config.user.User;
import br.com.dev.rest.model.Comentario;
import br.com.dev.rest.model.Projeto;
import br.com.dev.rest.model.Tarefa;

public class ProjetoWrapper implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer id;
	private String descricao;
	private Date criacao;
	private User user;
	private List<Tarefa> tarefas;
	private List<Comentario> comentarios;
	
	public ProjetoWrapper(Projeto projeto) {
		if (projeto.getId() != null) {
			this.id = projeto.getId();
		}
		if (!projeto.getDescricao().isEmpty()) {
			this.descricao = projeto.getDescricao();
		}
		if (projeto.getCriacao() != null) {
			this.criacao = projeto.getCriacao();
		}
		if (!projeto.getTarefas().isEmpty()) {
			this.tarefas = projeto.getTarefas();
		}
		if (!projeto.getComentarios().isEmpty()) {
			this.comentarios = projeto.getComentarios();
		}
	}
	
	public ProjetoWrapper() {
		
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Date getCriacao() {
		return criacao;
	}

	public void setCriacao(Date criacao) {
		this.criacao = criacao;
	}

	public User getUsuario() {
		return user;
	}

	public void setUsuario(User user) {
		this.user = user;
	}

	public List<Tarefa> getTarefas() {
		return tarefas;
	}

	public void setTarefas(List<Tarefa> tarefas) {
		this.tarefas = tarefas;
	}

	public List<Comentario> getComentarios() {
		return comentarios;
	}

	public void setComentarios(List<Comentario> comentarios) {
		this.comentarios = comentarios;
	}

}
