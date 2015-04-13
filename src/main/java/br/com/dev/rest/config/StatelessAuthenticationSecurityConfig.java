package br.com.dev.rest.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import br.com.dev.rest.config.user.UserDetailsService;

@EnableWebSecurity
@Configuration
@Order(1)
public class StatelessAuthenticationSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private TokenAuthenticationService tokenAuthenticationService;

	public StatelessAuthenticationSecurityConfig() {
		super(true);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.exceptionHandling().and()
				.anonymous().and()
				.servletApi().and()
				.headers().cacheControl().and()
				.authorizeRequests()
				
				.antMatchers("/").permitAll()
				.antMatchers("/favicon.ico").permitAll()
				.antMatchers("/resources/**").permitAll()
				
				.antMatchers(HttpMethod.POST, "/api/login").permitAll()
				.antMatchers(HttpMethod.GET, "/api/users/current").permitAll()
				
				.antMatchers(HttpMethod.GET, "/api/**").authenticated()
				.antMatchers(HttpMethod.POST, "/api/**").hasRole("ADMIN")
				.antMatchers(HttpMethod.PUT, "/api/**").hasRole("ADMIN")
				.antMatchers(HttpMethod.DELETE, "/api/**").hasRole("ADMIN")
				
				.antMatchers("/admin/**").hasRole("ADMIN")
				.anyRequest().permitAll()
				
				.and()
				
				.addFilterBefore(
						new StatelessLoginFilter("/api/login",
								tokenAuthenticationService, userDetailsService,
								authenticationManager()),
						UsernamePasswordAuthenticationFilter.class)				
				.addFilterBefore(
						new StatelessAuthenticationFilter(
								tokenAuthenticationService),
						UsernamePasswordAuthenticationFilter.class);
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth)
			throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(
				new BCryptPasswordEncoder());
	}

	@Override
	protected UserDetailsService userDetailsService() {
		return userDetailsService;
	}
}
