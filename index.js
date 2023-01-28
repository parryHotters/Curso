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

    constructor (){
        this.saldo =0;
    }

    depositoEnCuenta(valor) {
        this.saldo += valor;
        this.numero = '';
        this.agencia ='';

    }

    retirarDeCuenta (valor) {
        this.saldo -= valor;
    }
}

cuentaDeLeonardo =new CuentaCorriente();

cuentaDeLeonardo.depositoEnCuenta(100);

cuentaDeLeonardo.retirarDeCuenta(80);

console.log(cuentaDeLeonardo);