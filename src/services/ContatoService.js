import ApiService from "./ApiService";

class ContatoService extends ApiService {
    constructor(apiToken) {
        super("/api/contatos", apiToken);
    }

    obterTodosContatos() {
        return this.get("/");
    }

}

export default ContatoService;