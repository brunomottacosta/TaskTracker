package br.com.dev.rest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.dev.rest.model.Projeto;
import br.com.dev.rest.model.Tarefa;

public interface TarefaRepository extends JpaRepository<Tarefa, Integer>{
	
	public List<Tarefa> findByProjeto(Projeto projeto);
	
}
