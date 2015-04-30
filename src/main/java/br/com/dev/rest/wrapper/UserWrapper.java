package br.com.dev.rest.wrapper;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

import br.com.dev.rest.config.user.User;
import br.com.dev.rest.config.user.UserRole;
import br.com.dev.rest.model.Projeto;

public class UserWrapper implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	private String nome;
	
	private String username;
	
	private Set<UserRole> authorities;
	
	private List<Projeto> projetos;
	
	public UserWrapper(User user) {
		if (user.getId() != null) {
			this.id = user.getId();
		}
		if (!user.getName().isEmpty()) {
			this.nome = user.getName();
		}
		if (!user.getUsername().isEmpty()) {
			this.username = user.getUsername();
		}
		if (!user.getRoles().isEmpty()) {
			this.authorities = user.getRoles();
		}
	}
	
	public UserWrapper() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Set<UserRole> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(Set<UserRole> authorities) {
		this.authorities = authorities;
	}

	public List<Projeto> getProjetos() {
		return projetos;
	}

	public void setProjetos(List<Projeto> projetos) {
		this.projetos = projetos;
	}

}
