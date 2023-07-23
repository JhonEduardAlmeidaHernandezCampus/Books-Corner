# **Books Corner**



#### `INTRODUCCIÓN`

Un elemento clave en el funcionamiento efectivo de una biblioteca es un sistema de gestión de inventarios que permita un control preciso de los libros disponibles, las reservas y los préstamos.

El Sistema de Gestión de Inventarios de una biblioteca es una herramienta integral diseñada para optimizar el flujo de libros y mejorar la experiencia de los usuarios. 

Una de las características principales del sistema es la capacidad de prestar libros. Los usuarios pueden realizar búsquedas en el catálogo en línea y verificar la disponibilidad de los libros. El sistema mantiene un registro actualizado de los libros prestados, las fechas de vencimiento y las multas en caso de retrasos, esto asegura un control efectivo de los recursos y evita la pérdida o extravío de los libros.

Además de los préstamos, el sistema permite a los usuarios realizar reservas de libros que están actualmente prestados, en tal caso de que el usuario llegue a ir a la biblioteca por un libro y no se encuentre con disponibilidad, los usuarios serán notificados cuando esté disponible para su recogida, esto facilita el acceso equitativo a los libros más solicitados y garantiza una distribución justa.

El sistema de gestión de Inventarios de una biblioteca es una solución integral diseñada para facilitar la gestión eficiente de los recursos bibliográficos, permite el préstamo de libros y reserva, con esta herramienta, las bibliotecas pueden optimizar sus operaciones, mejorar la experiencia de los usuarios y mantener un control preciso de su inventario.



#### `PLANTEAMIENTO DEL PROBLEMA`

Las bibliotecas desempeñan un papel fundamental en la difusión del conocimiento y el acceso a la información, sin embargo, a medida que las colecciones bibliográficas crecen, surge la necesidad de implementar un sistema de gestión de inventarios eficiente que aborde los desafíos existentes.

1. `Descontrol en el inventario:` Sin un sistema de gestión centralizado, la biblioteca puede enfrentar dificultades para realizar un seguimiento preciso de los libros disponibles.

  

2. `Ineficiencia en los préstamos:` En ausencia de un sistema adecuado, los préstamos de libros pueden volverse confusos, La falta de un registro actualizado de los libros prestados puede llevar a situaciones en las que los usuarios no puedan acceder a los libros.

  

3. `Dificultad para gestionar reservas:` Si no hay un sistema de reservas integrado, los usuarios pueden enfrentar obstáculos para reservar libros que están actualmente prestados.

   

4. `Limitaciones en la generación de informes:` Sin un sistema de gestión de inventarios eficiente, la biblioteca puede enfrentar desafíos para generar informes y estadísticas precisas sobre el uso de los recursos, la demanda de libros específicos o el estado general del inventario.



#### OBJETIVO GENERAL

Resaltar la importancia de establecer un sistema de gestión de inventarios eficiente en una biblioteca, con el propósito de optimizar y agilizar el flujo de libros, mejorar la experiencia de los usuarios y asegurar un control preciso y actualizado del inventario bibliográfico. Este sistema integral tiene como objetivo principal facilitar y mejorar el proceso de préstamo de libros, así como garantizar un acceso equitativo a los recursos bibliográficos a través de la implementación de reservas y notificaciones para los usuarios. Además, este sistema busca minimizar la pérdida o extravío de libros al mantener un registro exhaustivo de los libros prestados, las fechas de vencimiento y las multas correspondientes en caso de retrasos, lo que contribuye a un control efectivo de los recursos y a la gestión eficiente de la biblioteca en su conjunto.



#### OBJETIVOS ESPECIFICOS

1. Implementar un sistema de gestión de inventarios que permita mantener un registro actualizado de todos los libros disponibles en la biblioteca, incluyendo información detallada sobre cada libro, como título, autor, descripción y categoría.



2. Establecer un sistema de alertas para el personal de la biblioteca que les notifique sobre la cantidad de copias disponibles para cada libro y cuándo se están agotando.



3. Proporcionar una interfaz de administración para que el personal de la biblioteca pueda agregar, modificar o eliminar registros de libros, actualizar el estado de los préstamos y reservas, y generar informes sobre el uso y la disponibilidad de los recursos bibliográficos.



4. Realizar pruebas exhaustivas del sistema antes de su implementación completa para asegurar su funcionalidad y confiabilidad, corrigiendo posibles errores o problemas identificados durante el proceso de prueba.



##### CONSULTAS

1.  Consultar la cantidad de clientes que hay en la base de datos.

2. Consultar el registro de clientes que tengan un "Penalthy Cost".

3.  Consultar el registro de clientes que llevaron un libro en especifico.

4. Consultar el registro de clientes que están en estado de "Overdue".

5.  Consultar la cantidad que hay en inventario respecto a ese libro.

6. Consultar si en el inventario hay algún registro con el estado de "Out of Stock".

7. Consultar que clientes llevaron libros con la categoría de "Mystery".

8. Consultar todos los libros disponibles en la biblioteca junto con su categoría y cantidad en inventario.

9. Consultar los detalles de un libro específico, incluyendo su descripción y autor.

10. Consultar todos los préstamos activos de un usuario en especifico.

11. Consultar la cantidad total de multas acumuladas por un usuario específico.


    



#### DIAGRAMA DE ENTIDAD RELACIÓN

![Diagrama Entidad-Relación](./assets/img/diagrama_entidad_relacion.png)




#### BASE DE DATOS

![IMG Base de datos](./assets/img/database.png)