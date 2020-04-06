public void establecerParametros()
{
    driver = "com.ibm.db2.jcc.DB2Driver";
	servidor = "181.228.144.21:51552";
	baseDatos = "mjRios";
	usuario = "userExterno";
	clave = "passExterno";
	urlConexion = "jdbc:mysql://" + servidor + "/" + baseDatos;
}