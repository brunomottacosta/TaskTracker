package br.com.dev.rest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.dev.rest.model.Projeto;

public interface ProjetoRepository extends JpaRepository<Projeto, Integer> { 

}
