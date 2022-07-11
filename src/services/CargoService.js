import ApiService from "./ApiService";

class CargoService extends ApiService {
    constructor() {
        super("/api/cargos")
    }

    obterTodosCargos() {
        return this.get('/');
    }

}

export default CargoService;