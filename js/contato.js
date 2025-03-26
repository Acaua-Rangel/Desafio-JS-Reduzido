class Data {
    nome;
    email;
    telefone;
    motivo;
    mensagem;

    constructor() {
        this.updateValues();

        document.getElementById("btnSubmit").onclick = (event) => this.updateValuesBtn(event);
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

}

let dadosIniciais = new Data();

console.log(dadosIniciais);

dadosIniciais.debug();