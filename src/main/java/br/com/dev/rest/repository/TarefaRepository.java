package br.com.dev.rest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.dev.rest.model.Tarefa;

public interface TarefaRepository extends JpaRepository<Tarefa, Integer>{

}
