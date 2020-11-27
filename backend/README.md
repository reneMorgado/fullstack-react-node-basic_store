## BACKEND DE TIENDA

#### - CONFIGURACIÓN DE LA BASE DE DATOS

En un terminal, ingresamos al shell de postgres con:
```bash
sudo -u postgres psql
```
Ahi ejecutaremos los siguientes comandos:

- **Para crear la base de datos**

```SQL
create database nodestr;
```

- **Para ver las bases de datos**

```SQL
\l
```

- **Para conectarnos a nuestra base de datos**

```SQL
\c nodestr
```

- **Para crear la tabla de nuestros productos**

```SQL
create table products(
    id SERIAL PRIMARY KEY,
    name text,
    img text,
    description text,
    amount int,
    price int
);
```

- **Para ver nuestra tablas creadas**

```SQL
\dt
```

- **Para introducir nuestros datos en la tabla**

```SQL
insert into products values 
    (/* Los datos se encuentran en el 
            archivo database.sql */)
```

- **Para ver los datos en nuestra tabla**

```SQL
select * from products;
```

- **Creamos el usuario para la base de datos**

```SQL
CREATE USER nodestruser WITH PASSWORD '1234';
GRANT ALL PRIVILEGES ON DATABASE nodestr to nodestruser;
GRANT ALL PRIVILEGES ON TABLE products TO nodestruser;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO nodestruser; 
```

- **Con esto tendríamos todo listo, salimos de la interfaz con:**

```SQL
exit
```



