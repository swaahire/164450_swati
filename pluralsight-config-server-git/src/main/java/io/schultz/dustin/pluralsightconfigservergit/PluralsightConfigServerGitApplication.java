package io.schultz.dustin.pluralsightconfigservergit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class PluralsightConfigServerGitApplication {

	public static void main(String[] args) {
		SpringApplication.run(PluralsightConfigServerGitApplication.class, args);
	}

}

