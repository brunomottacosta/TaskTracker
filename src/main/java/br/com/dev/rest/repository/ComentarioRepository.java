package br.com.dev.rest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.dev.rest.model.Comentario;

public interface ComentarioRepository extends JpaRepository<Comentario, Integer> {

}
