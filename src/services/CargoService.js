import ApiService from "./ApiService";

class CargoService extends ApiService {
    constructor(apiToken) {
        super("/api/cargos", apiToken);
    }

    obterTodosCargos() {
        return this.get('/');
    }

}

export default CargoService;