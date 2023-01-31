package demo;

import openbootcamp.obrestdata.domain.Book;
import openbootcamp.obrestdata.repository.BookRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.time.LocalDate;

import static java.time.LocalTime.now;

@SpringBootApplication
public class ObRestDataApplication {

	public static void main(String[] args) {


	ApplicationContext context = SpringApplication.run(ObRestDataApplication.class, args);
	BookRepository repository =context.getBean(BookRepository.class);

	//Crear Libro
		Book book = new Book(null,"Los fantasmas del pasado","Edgard", 10,99.1, LocalDate.of(2018,12,1),true);
		Book book2 = new Book(null,"Los fantasmas del mañana","Edgard", 10,99.1, LocalDate.of(2019,12,1),true);

		System.out.println("Num Libros en Base de datos "+ repository.findAll().size());

		//Almacenar un libro
		repository.save(book);
		repository.save(book2);
		System.out.println("Num Libros en Base de datos "+ repository.findAll().size());

		//recuperar todos los Libros

		System.out.println(repository.findAll().size());

		//borrar un libro
		repository.deleteById(1L);

		System.out.println("Num Libros en Base de datos "+ repository.findAll().size());

	}

}
