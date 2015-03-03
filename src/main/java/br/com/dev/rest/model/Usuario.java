package br.com.dev.rest.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "usuario")
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@usuarioId")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idn_usuario")
	private Integer id;
	
	@Column(name = "dsc_nome")
	private String nome;
	
	@OneToMany(mappedBy = "usuario")
	private List<Projeto> projetos;
	
	@OneToMany(mappedBy = "usuario")
	private List<Tarefa> tarefas;
	
	@OneToMany(mappedBy = "usuario")
	private List<Comentario> comentarios;	
	
	public Usuario() {
		super();
	}

	public Usuario(Integer id, String nome, List<Projeto> projetos,
			List<Tarefa> tarefas, List<Comentario> comentarios) {
		super();
		this.id = id;
		this.nome = nome;
		this.projetos = projetos;
		this.tarefas = tarefas;
		this.comentarios = comentarios;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<Projeto> getProjetos() {
		return projetos;
	}

	public void setProjetos(List<Projeto> projetos) {
		this.projetos = projetos;
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
