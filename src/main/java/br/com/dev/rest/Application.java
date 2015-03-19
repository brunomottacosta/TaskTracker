package br.com.dev.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Application {
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
//	@Configuration
//	@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
//	protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//		@Override
//		protected void configure(HttpSecurity http) throws Exception {
//			http.httpBasic()
//					.and()
//						.authorizeRequests()
//						.antMatchers("/index.html", "/home.html", "/login.html", "/")
//						.permitAll()
//						.anyRequest()
//						.authenticated()
//					.and().csrf()
//					.csrfTokenRepository(csrfTokenRepository()).and()
//					.addFilterAfter(csrfHeaderFilter(), CsrfFilter.class);
//		}
//
//		
//		
//		private Filter csrfHeaderFilter() {
//			return new OncePerRequestFilter() {
//				@Override
//				protected void doFilterInternal(HttpServletRequest request,
//						HttpServletResponse response, FilterChain filterChain)
//						throws ServletException, IOException {
//					CsrfToken csrf = (CsrfToken) request.getAttribute(CsrfToken.class.getName());
//					if (csrf != null) {
//						Cookie cookie = WebUtils.getCookie(request, "XSRF-TOKEN");
//						String token = csrf.getToken();
//						if (cookie == null || token != null	&& !token.equals(cookie.getValue())) {
//							cookie = new Cookie("XSRF-TOKEN", token);
//							cookie.setPath("/");
//							response.addCookie(cookie);
//						}
//					}
//					filterChain.doFilter(request, response);
//				}
//			};
//		}
//
//		private CsrfTokenRepository csrfTokenRepository() {
//			HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
//			repository.setHeaderName("X-XSRF-TOKEN");
//			return repository;
//		}
//	}

}
