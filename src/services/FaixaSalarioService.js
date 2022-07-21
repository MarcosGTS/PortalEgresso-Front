import ApiService from "./ApiService";

class FaixaSalarioService extends ApiService {
    constructor(apiToken) {
        super("/api/faixasalario", apiToken);
    }

    obterTodasFaixas() {
        return this.get('/');
    }

    quantitativoEgresso(id) {
        return this.get(`/${id}`);
    }

    obterEstatisticas() {
        return this.get("/estatisticas");
    }

}

export default FaixaSalarioService;