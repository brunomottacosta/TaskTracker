package br.com.dev.rest.config.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@RequestMapping(value = "/api/users/current", method = RequestMethod.GET)
	public User getCurrent() {
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication instanceof UserAuthentication) {
			return ((UserAuthentication) authentication).getDetails();
		}
		
		return new User(authentication.getName()); 
	}

	@RequestMapping(value = "/api/users/current", method = RequestMethod.PATCH)
	public ResponseEntity<String> changePassword(@RequestBody final User user) {
		
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		final User currentUser = userRepository.findByUsername(authentication.getName());
		if (user.getNewPassword() == null || user.getNewPassword().length() < 4) {
			return new ResponseEntity<String>("new password to short",
					HttpStatus.UNPROCESSABLE_ENTITY);
		}
		
		final BCryptPasswordEncoder pwEncoder = new BCryptPasswordEncoder();
		
		if (!pwEncoder.matches(user.getPassword(), currentUser.getPassword())) {
			return new ResponseEntity<String>("old password mismatch",
					HttpStatus.UNPROCESSABLE_ENTITY);
		}
		
		currentUser.setPassword(pwEncoder.encode(user.getNewPassword()));
		userRepository.saveAndFlush(currentUser);
		
		return new ResponseEntity<String>("password changed", HttpStatus.OK);
	}

	@RequestMapping(value = "/admin/api/users/{id}/grant/role/{role}", method = RequestMethod.POST)
	public ResponseEntity<String> grantRole(@PathVariable Long id, @PathVariable UserRole role) {
		
		if (id == null || id == 0) {
			return new ResponseEntity<String>("invalid user id",
					HttpStatus.UNPROCESSABLE_ENTITY);
		}
		
		User user = get(id);
		user.grantRole(role);
		userRepository.saveAndFlush(user);
		
		return new ResponseEntity<String>("role granted", HttpStatus.OK);
	}

	@RequestMapping(value = "/admin/api/users/{user}/revoke/role/{role}", method = RequestMethod.POST)
	public ResponseEntity<String> revokeRole(@PathVariable User user, @PathVariable UserRole role) {
		
		if (user == null) {
			return new ResponseEntity<String>("invalid user id",
					HttpStatus.UNPROCESSABLE_ENTITY);
		}
		
		user.revokeRole(role);
		userRepository.saveAndFlush(user);
		
		return new ResponseEntity<String>("role revoked", HttpStatus.OK);
	}
	
	@RequestMapping(value = "/admin/api/users", method = RequestMethod.GET)
	public List<User> list() {
		return userRepository.findAll();
	}
	
	@RequestMapping(value = "/admin/api/users/{id}", method = RequestMethod.GET)
	public User get(@PathVariable Long id) {
		return userRepository.getOne(id);
	}
	
	@RequestMapping(value = "/admin/api/users", method = RequestMethod.POST)
	public User salvar(@RequestBody User user) {
		user.setId(null);
		user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
		return userRepository.save(user);
	}
	
	@RequestMapping(value = "/admin/api/users/{id}", method = RequestMethod.PUT)
	public User atualizar(@RequestBody User user, @PathVariable Long id) {
		user.setId(id);
		return userRepository.saveAndFlush(user);
	}
	
	@RequestMapping(value = "/admin/api/users/{id}", method = RequestMethod.DELETE)
	public void remover(@PathVariable Long id) {
		userRepository.delete(id);
	}
	
}