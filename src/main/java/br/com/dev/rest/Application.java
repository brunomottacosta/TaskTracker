package br.com.dev.rest;

import javax.servlet.Filter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.CharacterEncodingFilter;

@EnableAutoConfiguration
@Configuration
@ComponentScan
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

//	@Bean
//	public InitializingBean insertDefaultUsers() {
//		return new InitializingBean() {
//
//			@Autowired
//			private UserRepository repository;
//
//			@Override
//			public void afterPropertiesSet() {
//				addUser("admin", "admin");
//				addUser("user", "user");
//			}
//
//			private void addUser(String username, String password) {
//				User user = new User();
//				user.setName("Administrador");
//				user.setUsername(username);
//				user.setPassword(new BCryptPasswordEncoder().encode(password));
//				user.grantRole(username.equals("admin") ? UserRole.ADMIN : UserRole.USER);
//				repository.save(user);
//			}
//		};
//	}

	@Bean
	public Filter characterEncodingFilter() {
		CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
		characterEncodingFilter.setEncoding("UTF-8");
		characterEncodingFilter.setForceEncoding(true);
		
		return characterEncodingFilter;
	}
}
