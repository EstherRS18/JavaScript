// Definimos el usuario y la contraseña correctos
const usuarioCorrecto = "admin";
const contrasenaCorrecta = "12345";

// Intentos de inicio de sesión
let intentos = 0;
const maxIntentos = 3;

// Función de inicio de sesión
function iniciarSesion() {
    while (intentos < maxIntentos) {
        let usuario = prompt("Ingrese su usuario:");
        let contrasena = prompt("Ingrese su contraseña:");
        if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
            alert("Inicio de sesión exitoso");
            return true;
        } else {
            alert("Usuario o contraseña incorrectos. Inténtelo de nuevo.");
            intentos++;
        }
    }
    alert("Se ha excedido el número máximo de intentos");
    return false;
}

// Arreglo para almacenar salarios de empleados
let empleados = [];
let totalSalarios = 0;
let empleadosMenos2Millones = 0;
let empleadosMas3Millones = 0;

// Función para calcular el salario de un empleado
function calcularSalario(horasTrabajadas, tarifaHora) {
    if (horasTrabajadas < 24) {
        alert("Un empleado no puede trabajar menos de 24 horas.");
        return null;
    }

    let salarioBase = horasTrabajadas * tarifaHora;
    if (horasTrabajadas > 96) {
        let horasExtras = horasTrabajadas - 96;
        salarioBase = (96 * tarifaHora) + (horasExtras * tarifaHora * 1.4);
    }

    if (salarioBase > 3000000) {
        salarioBase *= 0.9; // Deducción del 10%
        empleadosMas3Millones++;
    } else if (salarioBase < 2000000) {
        salarioBase += 115000; // Auxilio de transporte
        empleadosMenos2Millones++;
    }

    return salarioBase;
}

// Proceso principal
if (iniciarSesion()) {
    let continuar = true;

    while (continuar) {
        let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas por el empleado:"));
        let tarifaHora = parseInt(prompt("Ingrese la tarifa por hora del empleado:"));
        let salario = calcularSalario(horasTrabajadas, tarifaHora);

        if (salario !== null) {
            empleados.push(salario);
            totalSalarios += salario;
        }

        continuar = confirm("¿Desea registrar otro empleado?");
    }

    let promedioSalarial = totalSalarios / empleados.length;

    alert(`Total de empleados registrados: ${empleados.length}`);
    alert(`Promedio salarial: ${promedioSalarial}`);
    alert(`Cantidad de empleados que ganan menos de 2 millones: ${empleadosMenos2Millones}`);
    alert(`Cantidad de empleados que ganan más de 3 millones: ${empleadosMas3Millones}`);
}


