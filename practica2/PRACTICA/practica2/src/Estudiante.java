public class Estudiante extends Persona {
    private int cu;
    private float promedio;
    private String carrera;

    public Estudiante(String nombre, String apellido, int ci, String genero, int edad, float peso, int cu, float promedio, String carrera) {
        super(nombre, apellido, ci, genero, edad, peso);
        this.cu = cu;
        this.promedio = promedio;
        this.carrera = carrera;
    }

    public int getCu() {
        return cu;
    }

    public void setCu(int cu) {
        this.cu = cu;
    }

    public float getPromedio() {
        return promedio;
    }

    public void setPromedio(float promedio) {
        this.promedio = promedio;
        try {
            if (promedio >= 0 & promedio <= 100) {
                this.promedio = promedio;
            }
        } catch (Exception e) {
            System.out.println("someting went wrong");
        } finally {
            System.out.println("finally block");
        }
    }

    public String getCarrera() {
        return carrera;
    }

    public void setCarrera(String carrera) {
        this.carrera = carrera;
    }

    @Override
    public String toString() {
        return "Estudiante [cu=" + cu + ", promedio=" + promedio + ", carrera=" + carrera + ", toString()=" + super.toString() + "]";
    }
}