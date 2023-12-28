package mx.uv;

public class Auto {
    private String id;
    private String nombre;
    private String modelo;
    private String marca;  
    private int year;
    private int puertas;  
    private double precio;

    public Auto() {
    }

    public Auto(String id, String nombre, String modelo, String marca, int year, int puertas, double precio) {
        this.id = id;
        this.nombre = nombre;
        this.modelo = modelo;
        this.marca = marca;
        this.year = year;
        this.puertas = puertas;
        this.precio = precio;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getPuertas() {
        return puertas;
    }

    public void setPuertas(int puertas) {
        this.puertas = puertas;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }
}
