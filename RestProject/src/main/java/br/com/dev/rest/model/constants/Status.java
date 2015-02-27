package br.com.dev.rest.model.constants;

import java.util.Arrays;
import java.util.List;

public enum Status {
	
	_EM_ANALISE("Em Análise", 0),
	_EM_PRODUCAO("Em Produção", 1),
	_TRANSFERIDO("Transferido", 2),
	_CONCLUIDO("Concluído", 3);
	
	private String descricao;
	private Integer codigo;
	
	private Status(String descricao, Integer codigo) {
		this.descricao = descricao;
		this.codigo = codigo;
	}
	
	public Status getStatusByCodigo(Integer codigo) {
		List<Status> status = Arrays.asList(Status.values());
		for (Status s : status) {
			if (s.getCodigo() == codigo) return s;
			else return null;
		}
		return null;		
	}	
	
	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}
	
}
