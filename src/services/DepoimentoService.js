import ApiService from "./ApiService";

class DepoimentoService extends ApiService{
    constructor(apiToken) {
        super("api/depoimentos", apiToken);
    }

    obterTodosDepoimentos() {
        return this.get("/");
    }

    obterDepoimentoEgresso(id) {
        return this.get(`/egresso/${id}`);
    }

    adicionarDepoimento(id, obj) {
        return this.post(`/egresso/${id}`, obj);
    }

    editarDepoimento(id, obj) {
        return this.post(`/editar/${id}`, obj);
    }
}

export default DepoimentoService;