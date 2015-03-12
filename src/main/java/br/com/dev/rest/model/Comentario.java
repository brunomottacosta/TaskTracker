package br.com.dev.rest.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

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
	@JoinColumn(name = "idn_usuario", referencedColumnName = "idn_usuario")
	@JsonBackReference(value = "usuario-comentario")
	private Usuario usuario;
	
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

	public Comentario(Integer id, String texto, Usuario usuario) {
		super();
		this.id = id;
		this.texto = texto;
		this.usuario = usuario;
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

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
}
