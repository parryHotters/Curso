/*definicion de clases*/

class cliente {
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente {
    numero;
    saldo;
    agencia;

    depositoEnCuenta(valor) {
        this.saldo += valor;

    }

    retirarDeCuenta (valor) {
        this.saldo -= valor;
    }
}

cuentaDeLeonardo =new CuentaCorriente();
cuentaDeLeonardo.saldo =0;

cuentaDeLeonardo.depositoEnCuenta(100);

cuentaDeLeonardo.retirarDeCuenta(80);

console.log(cuentaDeLeonardo);