public class Persona {
    private String nombre;
    private String apellido;
    private int ci;
    private String genero;
    private int edad;
    private float peso;
    public Persona(String nombre, String apellido, int ci, String genero, int edad, float peso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.ci = ci;
        this.genero = genero;
        this.edad = edad;
        this.peso = peso;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    public int getCi() {
        return ci;
    }
    public void setCi(int ci) {
        this.ci = ci;
    }
    public String getGenero() {
        return genero;
    }
    public void setGenero(String genero) {
        this.genero = genero;
    }
    public int getEdad() {
        return edad;
    }
    public void setEdad(int edad) {
        this.edad = edad;
    }
    public float getPeso() {
        return peso;
    }
    public void setPeso(float peso) {
        this.peso = peso;
    }
    @Override
    public String toString() {
        return "Persona [nombre=" + nombre + ", apellido=" + apellido + ", ci=" + ci + ", genero=" + genero + ", edad=" + edad + ", peso=" + peso + "]";
    }
}
