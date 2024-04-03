package com.facebookapp.security;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.facebookapp.service.CustomerService;
import com.facebookapp.service.JwtUtil;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@Component
public class JwtTokenAuthenticationFilter extends OncePerRequestFilter{

	@Autowired
	JwtUtil jwtTokenUtil;
	
	@Autowired
	CustomerService customerService;
	
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        String token = null;
        String username = null;

        if (authHeader != null && authHeader.startsWith("Bearer")) {
            token = authHeader.substring(7);

            try {

                username = this.jwtTokenUtil.extractUsername(token);

            } catch (IllegalArgumentException e) {
                logger.info("Illegal Argument while fetching the username !!");
                e.printStackTrace();
            } catch (ExpiredJwtException e) {
                logger.info("Given jwt token is expired !!");
                e.printStackTrace();

            } catch (MalformedJwtException e) {
                logger.info("Some changed has done in token !! Invalid Token");
                e.printStackTrace();
            } catch (Exception e) {
                e.printStackTrace();

            }


        } else {
            logger.info("Invalid Header Value !! ");
        }


        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.customerService.loadUserByUsername(username);
            Boolean validateToken=this.jwtTokenUtil.validateToken(token,userDetails);

            if (validateToken) {
                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }else {
                logger.info("Validation fails !!");
            }

        }

        filterChain.doFilter(request, response);

    }
}
	
	
	
	
	
	
	
	
	
	
//	@Override
//	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//			throws ServletException, IOException {
//		
//	String token = request.getHeader("Authorization");	
//		System.out.println("token :" +token);
//		
//		String userNameFromToken = null;
//		
//		if(token == null) {
//			System.out.println("Please Add token.. Token Missing.. Invalid Header");
//		}else {
//			userNameFromToken = this.jwtTokenUtil.getUserNameFromToken(token);
//		}
//		
//		if(userNameFromToken != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//			
//			UserDetails userDetails = this.customerService.loadUserByUsername(userNameFromToken);
//			
//		boolean isValidToken = this.jwtTokenUtil.isValidtoken(userDetails.getUsername(),token);
//			
//			if(isValidToken) {
//				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
//				userDetails, null, userDetails.getAuthorities());
//				
//				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
//			} else {
//				System.out.println("Token is invalid.. Please Come with valid token");
//			}
//		}
//		filterChain.doFilter(request, response);
//	}
//}
	
	
	
	
	
	
	

