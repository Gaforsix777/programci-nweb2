import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        Scanner entrada = new Scanner(System.in);
        System.out.println("registre un numero :");
        int a = entrada.nextInt();
        int b = 20;
        System.out.println(a+b);
        entrada.close(); 
        Calculadora calc = new Calculadora();
        calc.ejemplo();
        int resSuma = calc.sumar(2, 3);
        int resRestar = calc.res(2, 3);
        int resMultiplicar = calc.mul(2, 3);
        int resDidivir = calc.div(2, 3);


        System.out.println(resSuma);
        System.out.println(resRestar);
        System.out.println(resMultiplicar);
        System.out.println(resDidivir);
        calc.incremento();
    }
}
