# Ejercicio 3 Validaciones y Almacenamiento Local (localstorage)

## Tiempo para realizar la actividad

4 Horas

## Instrucciones

Utilizando HTML+JS+BOOTSTRAP+CSS resolver los siguientes problemas.

## Problema 1 Empleado

Se requiere desarrollar un programa que permita administrar a los empleados de una empresa. Programar la clase Empleado que pudiera servir para este proyecto. El programa deberá contar con:

1. Un formulario CON VALIDACIONES para capturar los datos necesarios para cada Empleado
2. Cada vez que se agrega un nuevo empleado la información deberá quedar grabada de manera local (LOCAL STORAGE)
3. Una tabla en donde se muestre la información de los empleados que se han capturado como se muestra en la siguiente tabla.

| Número de Trabajador | Nombre Completo | Fecha de Nacimiento | Fecha de Contratación |   Sueldo    | Edad | Antiguedad |
| -------------------- | :-------------: | :-----------------: | :-------------------: | :---------: | :--: | :--------: |
| 12345                |   Juan Pérez    |     10/01/1980      |      20/01/2000       | \$10,000.00 |  39  |     19     |

4. Una tabla de resúmen con la siguiente información:

| Indicador                                                        |    Valor    |
| ---------------------------------------------------------------- | :---------: |
| Empleados con sueldo hasta \$10,000                              |      5      |
| Empleados con sueldo mayor que $10,000 y menor o igual a $20,000 |      5      |
| Empleados con sueldo mayor que \$20,000                          |      5      |
| Sueldo promedio                                                  | \$25,000.00 |
| Edad promedio                                                    |     25      |

## Problema 2 Consulta

Se requiere desarrollar un programa que permita administrar la agenda de citas o consultas con pacientes de un Médico. Escribir la clase Consulta que pudiera servir para este proyecto. El programa deberá contar con una GUI que permita:

1. Un formulario CON VALIDACIONES para capturar los datos necesarios para cada Cita
2. Cada vez que se agrega una nueva consulta la información deberá quedar grabada de manera local (LOCAL STORAGE)
3. Una tabla en donde se muestre la información de los empleados que se han capturado como se muestra en la siguiente tabla:

| Fecha       | Hora  | Nombre del paciente | Días que faltan para la cita |
| ----------- | :---: | :-----------------: | :--------------------------: |
| 17/Feb/2019 | 10:00 |     Juan Pérez      |              4               |

NOTA: Cuando la fecha ya pasó, en días se mostrará un guión -

4. Una tabla en donde se muestre un resúmen con la siguiente información:

| Indicador                      | Valor |
| ------------------------------ | :---: |
| Citas programadas en Lunes     |   5   |
| Citas programadas en Martes    |   5   |
| Citas programadas en Miércoles |   5   |
| Citas programadas en Jueves    |   5   |
| Citas programadas en Viernes   |   5   |
| Citas programadas en Sábado    |   5   |
| Citas programadas en Domingo   |   5   |

## Problema 3 Gasto

Se requiere desarrollar un programa que permita administrar los gastos de viáticos de una persona. Escribir la clase Gasto que pudiera servir para este proyecto. El programa deberá contar con una GUI que permita:

1. Un formulario CON VALIDACIONES para capturar los datos necesarios para cada Gasto
2. Cada vez que se agrega un nuevo gasto la información deberá quedar grabada de manera local (LOCAL STORAGE)
3. Una tabla en donde se muestre la información de los gastos que se han capturado como se muestra en la siguiente tabla:

| Fecha       |    Tipo    |   Concepto   |  Monto   |
| ----------- | :--------: | :----------: | :------: |
| 17/Feb/2019 | Transporte | Pago de taxi | \$100.00 |

4. Una tabla en donde se muestre un resúmen con la siguiente información:

| Indicador            |   Valor    |
| -------------------- | :--------: |
| Gastos en transporte | \$1,000.00 |
| Gastos en hospedaje  | \$1,000.00 |
| Alimentos            | \$1,000.00 |
| Otros gastos         | \$1,000.00 |
