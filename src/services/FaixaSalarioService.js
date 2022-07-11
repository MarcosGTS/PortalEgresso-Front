import ApiService from "./ApiService";

class FaixaSalarioService extends ApiService {
    constructor() {
        super("/api/faixasalario")
    }

    obterTodasFaixas() {
        return this.get('/');
    }

}

export default FaixaSalarioService;