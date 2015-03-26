package br.com.dev.rest.wrapper;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import br.com.dev.rest.config.user.User;
import br.com.dev.rest.model.Comentario;
import br.com.dev.rest.model.Projeto;
import br.com.dev.rest.model.Tarefa;
import br.com.dev.rest.model.constants.Status;

public class TarefaWrapper implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String descricao;
	private Date criacao;
	private Date finalizacao;
	private Date prazo;
	private Projeto projeto;
	private User user;
	private List<Comentario> comentarios;
	private Status status;
	
	public TarefaWrapper(Tarefa tarefa) {
		if (tarefa.getId() != null) {
			this.id = tarefa.getId();
		}
		if (!tarefa.getDescricao().isEmpty()) {
			this.descricao = tarefa.getDescricao();
		}
		if (tarefa.getCriacao() != null) {
			this.criacao = tarefa.getCriacao();
		}
		if (tarefa.getFinalizacao() != null) {
			this.finalizacao = tarefa.getFinalizacao();
		}
		if (tarefa.getPrazo() != null) {
			this.prazo = tarefa.getPrazo();
		}
		if (tarefa.getProjeto() != null) {
			this.projeto = tarefa.getProjeto();
		}
		if (!tarefa.getComentarios().isEmpty()) {
			this.comentarios = tarefa.getComentarios();
		}
		if (tarefa.getStatus() != null) {
			this.status = tarefa.getStatus();
		}
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

	public Date getFinalizacao() {
		return finalizacao;
	}

	public void setFinalizacao(Date finalizacao) {
		this.finalizacao = finalizacao;
	}

	public Date getPrazo() {
		return prazo;
	}

	public void setPrazo(Date prazo) {
		this.prazo = prazo;
	}

	public Projeto getProjeto() {
		return projeto;
	}

	public void setProjeto(Projeto projeto) {
		this.projeto = projeto;
	}

	public User getUsuario() {
		return user;
	}

	public void setUsuario(User user) {
		this.user = user;
	}

	public List<Comentario> getComentarios() {
		return comentarios;
	}

	public void setComentarios(List<Comentario> comentarios) {
		this.comentarios = comentarios;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

}
