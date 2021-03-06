package com.eason.transfer.openapi.core.system.entity.po;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * CmsUser entity.
 * 
 */
@Entity
@Table(name = "t_sys_user")
public class User implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2829339930280752686L;
	private String id;
	private String name;
	private String account;
	private String mobile;
	private String tele;
	private String email;
	private String pwd;
	private String isEnabled;
	
	private Set<Role> roles=new HashSet<Role>(0);
	
	// Constructors

	/** default constructor */
	public User() {
	}

	/** minimal constructor */
	public User(String id) {
		this.id = id;
	}

	/** full constructor */
	public User(String id, String name, String account, String mobile,
			String tele, String email, String pwd, String isEnabled) {
		this.id = id;
		this.name = name;
		this.account = account;
		this.mobile = mobile;
		this.tele = tele;
		this.email = email;
		this.pwd = pwd;
		this.isEnabled = isEnabled;
	}

	// Property accessors
	@Id
	@Column(name = "id", unique = true, nullable = false, length = 32)
	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Column(name = "name", length = 50)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "account", length = 25)
	public String getAccount() {
		return this.account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	@Column(name = "mobile", length = 32)
	public String getMobile() {
		return this.mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	@Column(name = "tele", length = 20)
	public String getTele() {
		return this.tele;
	}

	public void setTele(String tele) {
		this.tele = tele;
	}

	@Column(name = "email", length = 50)
	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name = "pwd", length = 100)
	public String getPwd() {
		return this.pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	@Column(name = "isEnabled", length = 1)
	public String getIsEnabled() {
		return this.isEnabled;
	}

	public void setIsEnabled(String isEnabled) {
		this.isEnabled = isEnabled;
	}
	
	//关联字段
	@ManyToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY,targetEntity=Role.class)
	@JoinTable(name="t_sys_userrole",
			joinColumns=@JoinColumn(name="userId"),
			inverseJoinColumns=@JoinColumn(name="roleId"))
	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	
	@Override
	public String toString() {
		return "User [account=" + account + ", email=" + email + ", id=" + id
				+ ", isEnabled=" + isEnabled + ", mobile=" + mobile + ", name="
				+ name + ", pwd=" + pwd + ", tele=" + tele + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((account == null) ? 0 : account.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((mobile == null) ? 0 : mobile.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (account == null) {
			if (other.account != null)
				return false;
		} else if (!account.equals(other.account))
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (mobile == null) {
			if (other.mobile != null)
				return false;
		} else if (!mobile.equals(other.mobile))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

	
}