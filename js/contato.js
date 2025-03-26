class Data {
    nome;
    email;
    telefone;
    motivo;
    mensagem;

    constructor() {
        this.updateValues();

        document.getElementById("btnSubmit").onclick = (event) => this.updateValuesBtn(event);

        document.getElementsByName("cpf")[0].addEventListener("input", this.applyMaskCPF);
        document.getElementsByName("telefone")[0].addEventListener("input", this.applyMaskTel);
    }

    updateValuesBtn(event) {
        if (document.getElementsByName("contato")[0].value !== "") {
            this.updateValues();
            console.log(this.debug());
        } else {
            alert("Você selcionar um motivo de contato");
        }
        event.preventDefault();
    }

    updateValues() {
        this.nome = document.getElementsByName("nome")[0].value;
        this.email = document.getElementsByName("email")[0].value;
        this.telefone = document.getElementsByName("telefone")[0].value;
        this.motivo = document.getElementsByName("contato")[0].value;
        this.mensagem = document.getElementsByName("mensagem")[0].value;
    }

    debug() {
        return {
            "nome": this.nome, 
            "email": this.email, 
            "telefone": this.telefone, 
            "motivo": this.motivo, 
            "mensagem": this.mensagem,
        };
    }

    applyMaskCPF(event) {
        let cpf = event.target.value.replace(/\D/g, "");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        event.target.value = cpf;
    }
    
    applyMaskTel(event) {
        let telefone = event.target.value.replace(/\D/g, "");
        telefone = telefone.replace(/(\d{2})(\d)/, "($1) $2");
        telefone = telefone.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
        event.target.value = telefone;
    }

}

let dadosIniciais = new Data();

console.log(dadosIniciais);

dadosIniciais.debug();