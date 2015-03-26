package br.com.dev.rest.config.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@IdClass(UserAuthority.class)
public class UserAuthority implements GrantedAuthority {
	
	@Id
	@NotNull
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore	
	private User user;
	
	@Id
	@NotNull	
	@Column(name = "dsc_authority")
	private String authority;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String getAuthority() {
		return authority;
	}

	public void setAuthority(String authority) {
		this.authority = authority;
	}

	@Override
	public boolean equals(Object obj) {
		if (!(obj instanceof UserAuthority))
			return false;
		UserAuthority ua = (UserAuthority) obj;
		return ua.getAuthority() == this.getAuthority()
				|| ua.getAuthority().equals(this.getAuthority());
	}

	@Override
	public int hashCode() {
		return getAuthority() == null ? 0 : getAuthority().hashCode();
	}

	@Override
	public String toString() {
		return getClass().getSimpleName() + ": " + getAuthority();
	}
}
