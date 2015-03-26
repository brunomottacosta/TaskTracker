package br.com.dev.rest.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import br.com.dev.rest.config.user.User;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "comentario")
public class Comentario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idn_comentario")
	private Integer id;
	
	@Column(name = "txt_comentario")
	private String texto;
	

	@ManyToOne
	@JoinColumn(name = "idn_projeto", referencedColumnName = "idn_projeto")
	@JsonBackReference(value = "projeto-comentario")
	private Projeto projeto;
	
	@ManyToOne
	@JoinColumn(name = "idn_tarefa", referencedColumnName = "idn_tarefa")
	@JsonBackReference(value = "tarefa-comentario")
	private Tarefa tarefa;
	
	public Comentario() {
		super();
	}

	public Comentario(Integer id, String texto, User user) {
		super();
		this.id = id;
		this.texto = texto;
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
