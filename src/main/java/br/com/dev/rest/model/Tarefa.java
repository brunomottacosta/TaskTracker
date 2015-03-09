package br.com.dev.rest.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import br.com.dev.rest.model.constants.Status;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "tarefa")
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="id")
public class Tarefa {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idn_tarefa")
	private Integer id;

	@Column(name = "dsc_tarefa")
	private String descricao;

	@Column(name = "dat_criacao")
	private Date criacao;

	@Column(name = "dat_finalizacao")
	private Date finalizacao;

	@Column(name = "dat_prazo")
	private Date prazo;

	@Column(name = "cod_status")
	@Enumerated(EnumType.ORDINAL)
	private Status status;

	@OneToMany(mappedBy = "tarefa", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Comentario> comentarios;

	@ManyToOne
	@JoinColumn(name = "idn_projeto", referencedColumnName = "idn_projeto")
	private Projeto projeto;

	@ManyToOne
	@JoinColumn(name = "idn_usuario", referencedColumnName = "idn_usuario")
	private Usuario usuario;

	public Tarefa() {
		super();
	}

	public Tarefa(Integer id, String descricao, Date criacao, Date finalizacao,
			Date prazo, Status status, List<Comentario> comentarios,
			Projeto projeto) {
		super();
		this.id = id;
		this.descricao = descricao;
		this.criacao = criacao;
		this.finalizacao = finalizacao;
		this.prazo = prazo;
		this.status = status;
		this.comentarios = comentarios;
		this.projeto = projeto;
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

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public List<Comentario> getComentarios() {
		return comentarios;
	}

	public void setComentarios(List<Comentario> comentarios) {
		this.comentarios = comentarios;
	}

	public Projeto getProjeto() {
		return projeto;
	}

	public void setProjeto(Projeto projeto) {
		this.projeto = projeto;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

}
