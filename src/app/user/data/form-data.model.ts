export class Register {
    nomeCliente: string = '';
    cpfCliente: string = '';
    dataNascimentoCliente: string = '';
    sexoCliente: string = '';
    estadoCivilCliente: string = '';

    clear() {
        this.nomeCliente = '';
        this.cpfCliente = '';
        this.dataNascimentoCliente = '';
        this.sexoCliente = '';
        this.estadoCivilCliente = '';
    }
}

export class RegistryResponsible{
    nome: string = '';
    email: string = '';
    cpf: string = '';
    dataNascimento: string = '';
    sexo: string = '';
    estadoCivil: string = '';
    telefoneCelular: string = '';
    telefoneFixo: string = '';

}

export class RegistrationAddress{
    cep: string = '';
    endereco: string = '';
    numero: string = '';
    uf: string = '';
    bairro: string = '';
    adicional: string = '';
}