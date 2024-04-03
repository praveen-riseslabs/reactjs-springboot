package com.facebookapp.service;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

//import java.util.Date;
//
//import org.springframework.stereotype.Component;
//
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil {

	  public static final String SECRET = "5367566B59703373367639792F423F4528482B4D6251655468576D5A71347437";
	    public static final long JWT_TOKEN_VALIDITY = 20 * 60;
	    public String extractUsername(String token) {
	        return extractClaim(token, Claims::getSubject);
	    }

	    public Date extractExpiration(String token) {
	        return extractClaim(token, Claims::getExpiration);
	    }

	    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
	        final Claims claims = extractAllClaims(token);
	        return claimsResolver.apply(claims);
	    }

	    private Claims extractAllClaims(String token) {
	        return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody();
	    }

	    private Boolean isTokenExpired(String token) {
	        return extractExpiration(token).before(new Date());
	    }

	    public Boolean validateToken(String token, UserDetails userDetails) {
	        final String username = extractUsername(token);
	        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
	    }

	    public String generateToken(UserDetails userDetails){
	        Map<String,Object> claims=new HashMap<>();
	        return createToken(claims,userDetails.getUsername());
	    }

	    private String createToken(Map<String, Object> claims, String userName) {
	        return Jwts.builder()
	                .setClaims(claims)
	                .setSubject(userName)
	                .setIssuedAt(new Date(System.currentTimeMillis()))
	                .setExpiration(new Date(System.currentTimeMillis()+1000*60*30))
	                .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
	    }

	    private Key getSignKey() {
	        byte[] keyBytes= Decoders.BASE64.decode(SECRET);
	        return Keys.hmacShaKeyFor(keyBytes);
	    }

	
	
	
	
	
	
	


//		private long expMilliSeconds = 30 * 60 * 1000;
//		private final String SECRET_KEY = "HSHDHSDJKDSDSHKDDFKDFJDJFDJFFKDFDKFKFSFSDKFDNKF"
//				+ "HDHSDSHDSJDSHHSDHSDHSDHSDHSDCNVCCXNCNCJDSHDHJDSHDNCNNNNNNHJDHSD";
//
//		public String createToken(String userName) {
//
//			String token = Jwts.builder()
//					.setSubject(userName)
//					.setIssuedAt(new Date(System.currentTimeMillis()))
//					.setExpiration(new Date(System.currentTimeMillis() + expMilliSeconds))
//					.signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
//
//			return token;
//		}
//
//		// Validation of token
//
//		public boolean isValidtoken(String userName, String token) {
//			// Extract User Name from Token
//			String tokenUserName = getUserNameFromToken(token);
//
//			// Compare Token User Name with incoming USER Name : userName
//
//			boolean isExpired = isTokenExpired(token);
//
//			return userName.equals(tokenUserName) && !isExpired;
//		}
//
//		public String getUserNameFromToken(String token) {
//
//			String tokenUserName = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody().getSubject();
//
//			return tokenUserName;
//
//		}
//
//		public boolean isTokenExpired(String token) {
//
//			Date expirationTime = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody().getExpiration();
//
//			return expirationTime.before(new Date());
//		}

		
}
	
	
	
	