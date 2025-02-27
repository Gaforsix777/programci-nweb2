public class Calculadora {
    public void ejemplo(){
        System.out.println("entraste a Calculadora");
    }
    public int sumar(int n1, int n2){
        return n1 + n2;
    }
    public int res(int n1, int n2){
        return n1 -  n2;
    }
    public int mul(int n1, int n2){
        return n1 * n2;
    }
    public int div(int n1, int n2){
        return n1 / n2;
    }
    public void incremento (){
        int a = 5;
        int b = a++;
        System.out.println("b=a++" + b);
        a = 5;
        b = ++a;
        System.out.println("b=++a: " + b);
        
    }
}

