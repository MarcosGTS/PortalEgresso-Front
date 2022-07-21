import ApiService from "./ApiService";

class CargoService extends ApiService {
    constructor(apiToken) {
        super("/api/cargos", apiToken);
    }

    obterTodosCargos() {
        return this.get("/");
    }

    quantitativoEgresso(id) {
        return this.get(`/${id}`);
    }

    obterEstattisticas() {
        return this.get("/estatisticas");
    }

}

export default CargoService;