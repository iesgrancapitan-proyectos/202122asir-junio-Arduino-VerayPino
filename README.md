# 1. Descripción del proyecto
Nuestro proyecto trata de un Rover controlado con el móvil, este será programado para que siga caminos, mueva objetos con una carretilla elevadora y evite obstáculos. También incluiremos una serie de sensores en el Rover como el sensor de luz del Kit IoT de Arduino.

Los requisitos previos son sencillos, necesitaremos disponer de los dos kits de los cuales hemos hablado en la introducción, el Engineering Kit Rev 2 y el IoT Kit.
No se hace falta que tengamos conocimientos avanzados sobre Arduino y MATLAB, ya que ambos kits contienen tanto el material como la información necesaria para ser construidos sin tener que enfrentarnos a grandes problemas, como en cualquier proyecto si que encontraremos pequeños problemas que tendremos que ir solucionando poco, algo que nos ayudará a entender mejor tanto Arduino como MATLAB.



# 2. Despliegue
Nuestro proyecto se llevará a cabo en tres fases:

## 2.1. Investigación de los kits
La primera fase de nuestro es la investigación de ambos kits, sus sensores, placas, dispositivos y posibles proyectos que ofrecen, con el objetivo de finalmente decantarnos por el proyecto a llevar a cabo de cada kit.

## 2.2. Engineering Kit Rev 2
### 2.2.1. Rover controlado por Cámara Web
Tras estudiar los proyectos de este kit nos decantamos por el Rover controlado por cámara web, en esta fase probaremos el movimiento lineal del Rover, el movimiento de la carretilla elevadora y el movimiento del Rover siguiendo una ruta preestablecida. Estas pruebas están explicadas en profundidad en la Wiki.

## 2.3 IoT Kit
### 2.3.1. Alarma de Seguridad para el Hogar
Al igual que en la fase en la fase anterior tras el estudio de los sensores y de las posibilidades que ofrece el kit, la Alarma del Hogar es uno de nuestros proyectos elegidos de este kit, este proyecto se basa en la utilización del sensor de proximidad, el cual genera una alarma al detectar movimiento. Estas pruebas están explicadas en profundidad en la Wiki.
## 2.3.2. Estación Meteorológica
La siguiente fase del proyecto es hacer la Estación Meteorológica, con este proyecto usaremos prácticamente todos los sensores del kit, excepto el sensor de proximidad que hemos usado en la Alarma del Hogar. La Estación Meteorológica tiene los sensores de humedad, temperatura, presión y luminosidad, estos sensores permiten recoger sus datos respectivos y mostrarlos en la pantalla LCD que incluye el kit, también hemos usado un Webhook que permite la recogida en tiempo real de los datos en una hoja de Google Sheets, y hemos hecho una macro en el propio Google Sheets con el objetivo de arreglar algunos fallos que tiene la recogida de datos y poder filtrar dichos datos. Estas pruebas están explicadas en profundidad en la Wiki.



# 3. Uso
En esta fase explicaremos los usos de cada proyecto seleccionado:
## 3.1. Engineering Kit Rev 2
### 3.1.1. Rover controlado por Cámara Web
Realmente el Rover no tiene nigún uso en específico, simplemente sigue un patrón de movimiento que se le indica. Con un poco de imaginación se podría usar para transportar materiales pequeños sobre su base.

## 3.2 IoT Kit
### 3.2.1. Alarma de Seguridad para el Hogar
El uso de este proyecto es simple, como su propio nombre indica sirve como una medida de seguridad para el hogar, este proyecto detecta movimiento y genera una alarma al detectar el movimiento, al detectarlo el sensor emitirá una luz roja a modo de alarma.
### 3.2.1. Estación Meteorológica
Este proyecto se usa para recoger datos meteorológicos como la temperatura, humedad, presión ... Este proyecto incluye las piezas necesarias para montar un Carrier, una pequeña plataforma en la cual dependiendo del botón que pulsemos nos mostrará el valor de un sensor o de otro.



# 4. Autores
Autores del proyecto: Adrián Pino y Julio Vera, alumnos de 2º de ASIR del IES Gran Capitán (Córdoba)

Supervisor: María del Carmen Tripiana Profesora de Informática del IES Gran Capitán (Córdoba)
