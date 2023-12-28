import java.sql.Connection;
import java.sql.PreparedStatement;
importjava.sql.ResultSet;
importjava.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class AutoDAO {
    private Connection connection;

    // Constructor que recibe la conexión a la base de datos
    public AutoDAO(Connection connection) {
        this.connection = connection;
    }

    // Método para guardar un modelo de auto en la base de datos
    public void guardarAuto(Auto auto) {
        try {
            String query = "INSERT INTO autos (nombre, modelo, marca, año, puertas, precio) VALUES (?, ?, ?, ?, ?, ?)";
            try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
                preparedStatement.setString(1, auto.getNombre());
                preparedStatement.setString(2, auto.getModelo());
                preparedStatement.setString(3, auto.getMarca());
                preparedStatement.setInt(4, auto.getAnio());
                preparedStatement.setInt(5, auto.getPuertas());
                preparedStatement.setDouble(6, auto.getPrecio());
                preparedStatement.executeUpdate();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Método para recuperar todos los modelos de autos de la base de datos
    public List<Auto> obtenerTodosAutos() {
        List<Auto> autos = new ArrayList<>();
        try {
            String query = "SELECT * FROM autos";
            try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
                try (ResultSet resultSet = preparedStatement.executeQuery()) {
                    while (resultSet.next()) {
                        Auto auto = new Auto();
                        auto.setNombre(resultSet.getString("nombre"));
                        auto.setModelo(resultSet.getString("modelo"));
                        auto.setMarca(resultSet.getString("marca"));
                        auto.setAnio(resultSet.getInt("año"));
                        auto.setPuertas(resultSet.getInt("puertas"));
                        auto.setPrecio(resultSet.getDouble("precio"));
                        autos.add(auto);
                    }
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return autos;
    }

    // Método para eliminar un modelo de auto de la base de datos por nombre
    public void eliminarAutoPorNombre(String nombre) {
        try {
            String query = "DELETE FROM autos WHERE nombre=?";
            try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
                preparedStatement.setString(1, nombre);
                preparedStatement.executeUpdate();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
