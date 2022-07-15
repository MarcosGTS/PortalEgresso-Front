import ApiService from "./ApiService";

class FaixaSalarioService extends ApiService {
    constructor(apiToken) {
        super("/api/faixasalario", apiToken);
    }

    obterTodasFaixas() {
        return this.get('/');
    }

}

export default FaixaSalarioService;