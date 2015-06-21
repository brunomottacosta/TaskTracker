package br.com.dev.rest.wrapper;

import java.io.Serializable;

import br.com.dev.rest.model.constants.Status;

public class StatusWrapper implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Integer codigo;
	private String descricao;
	private Status status;
	
	public StatusWrapper(Status status) {
		this.codigo = status.getCodigo();
		this.descricao = status.getDescricao();
		this.status = status;
	}

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
	
}
