package br.com.dev.rest.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "projeto")
public class Projeto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idn_projeto")
	private Integer id;

	@Column(name = "dsc_projeto")
	private String descricao;

	@Column(name = "dat_criacao")
	@Temporal(TemporalType.TIMESTAMP)
	private Date criacao;

	@OneToMany(mappedBy = "projeto", cascade = CascadeType.ALL)
	@JsonManagedReference(value = "projeto-tarefa")
	private List<Tarefa> tarefas;

	@OneToMany(mappedBy = "projeto", cascade = CascadeType.ALL)
	@JsonManagedReference(value = "projeto-comentario")
	private List<Comentario> comentarios;

	public Projeto() {
		super();
	}

	public Projeto(Integer id, String descricao, Date criacao,
			List<Tarefa> tarefas, List<Comentario> comentarios) {
		super();
		this.id = id;
		this.descricao = descricao;
		this.criacao = criacao;
		this.tarefas = tarefas;
		this.comentarios = comentarios;
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
