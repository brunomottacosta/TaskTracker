//package br.com.dev.rest;
//
//import java.io.IOException;
//
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.Cookie;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.access.hierarchicalroles.RoleHierarchy;
//import org.springframework.security.access.hierarchicalroles.RoleHierarchyImpl;
//import org.springframework.security.access.vote.RoleHierarchyVoter;
//import org.springframework.security.access.vote.RoleVoter;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.web.csrf.CsrfFilter;
//import org.springframework.security.web.csrf.CsrfToken;
//import org.springframework.security.web.csrf.CsrfTokenRepository;
//import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
//import org.springframework.web.filter.OncePerRequestFilter;
//import org.springframework.web.util.WebUtils;
//
//	
//
//public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//	
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth)	throws Exception {
//		auth.inMemoryAuthentication()
//			.withUser("admin")
//			.password("admin")
//			.roles("ADMIN");
//	}
//	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http.authorizeRequests()
//			.antMatchers("/", "/assets/**").permitAll()
//			.antMatchers("/pages/projeto/**", "/pages/tarefa/**").authenticated()
//			.and()
//				.csrf()
//				.csrfTokenRepository(csrfTokenRepository())
//			.and()
//				.addFilterAfter(csrfHeaderFilter(), CsrfFilter.class);
//		
//		http.logout().logoutUrl("/logout");
//		
//		http.formLogin()
//			.loginPage("/pages/login.html")
//			.defaultSuccessUrl("/pages/home.html");
//	}
//	
//	private Filter csrfHeaderFilter() {
//		return new OncePerRequestFilter() {
//			@Override
//			protected void doFilterInternal(HttpServletRequest request,
//					HttpServletResponse response, FilterChain filterChain)
//					throws ServletException, IOException {
//				CsrfToken csrf = (CsrfToken) request.getAttribute(CsrfToken.class.getName());
//				if (csrf != null) {
//					Cookie cookie = WebUtils.getCookie(request, "XSRF-TOKEN");
//					String token = csrf.getToken();
//					if (cookie == null || token != null	&& !token.equals(cookie.getValue())) {
//						cookie = new Cookie("XSRF-TOKEN", token);
//						cookie.setPath("/");
//						response.addCookie(cookie);
//					}
//				}
//				filterChain.doFilter(request, response);
//			}
//		};
//	}
//
//	private CsrfTokenRepository csrfTokenRepository() {
//		HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
//		repository.setHeaderName("X-XSRF-TOKEN");
//		return repository;
//	}
//	
//	@Bean
//	public RoleHierarchy roleHierarchy() {
//		RoleHierarchyImpl impl = new RoleHierarchyImpl();
//		impl.setHierarchy("ROLE_ADMIN > ROLE_STAFF > ROLE_EMPLOYEE");
//		return impl;
//	}
//	
//	@Bean
//    public RoleVoter roleVoter() {
//        return new RoleHierarchyVoter(roleHierarchy());
//    }
//
//}
