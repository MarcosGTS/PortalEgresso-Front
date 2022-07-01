import ApiService from "./ApiService";

class DepoimentoService extends ApiService{
    constructor () {
        super("/api/depoimentos");
    }

    obterTodosDepoimentos() {
        return this.get("/");
    }
}

export default DepoimentoService;