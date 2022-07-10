import ApiService from "./ApiService";

class DepoimentoService extends ApiService{
    constructor () {
        super("/api/depoimentos");
    }

    obterTodosDepoimentos() {
        return this.get("/");
    }

    obterDepoimentoEgresso(id) {
        return this.get(`/egresso/${id}`);
    }

    editarDepoimento(id, obj) {
        return this.put(`/${id}`, obj);
    }
}

export default DepoimentoService;