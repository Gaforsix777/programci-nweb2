import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        List<Estudiante> estudiantes = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Ingrese el nombre del estudiante (o '0' para terminar): ");
            String nombre = scanner.nextLine();
            if (nombre.equals("0")) break;

            System.out.print("Ingrese el apellido del estudiante: ");
            String apellido = scanner.nextLine();

            System.out.print("Ingrese el CI del estudiante: ");
            int ci = scanner.nextInt();
            scanner.nextLine();

            System.out.print("Ingrese el género del estudiante (M/F): ");
            String genero = scanner.nextLine();

            System.out.print("Ingrese la edad del estudiante: ");
            int edad = scanner.nextInt();

            System.out.print("Ingrese el peso del estudiante: ");
            float peso = scanner.nextFloat();

            System.out.print("Ingrese el CU del estudiante: ");
            int cu = scanner.nextInt();

            System.out.print("Ingrese el promedio del estudiante: ");
            float promedio = scanner.nextFloat();
            scanner.nextLine(); 

            System.out.print("Ingrese la carrera del estudiante: ");
            String carrera = scanner.nextLine();

            try {
                Estudiante nuevoEstudiante = new Estudiante(nombre, apellido, ci, genero, edad, peso, cu, promedio, carrera);
                estudiantes.add(nuevoEstudiante);
            } catch (Exception e) {
                System.out.println("Error al registrar el estudiante: " + e.getMessage());
            }
        }

        System.out.println("Lista completa de estudiantes:");
        for (Estudiante estudiante : estudiantes) {
            System.out.println(estudiante.toString());
        }

        scanner.close();
    }
}