package io.schultz.dustin.pluralsightconfigserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class PluralsightConfigServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(PluralsightConfigServerApplication.class, args);
	}

}

