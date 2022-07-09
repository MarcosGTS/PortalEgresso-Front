import ApiService from "./ApiService";

class EgressoService extends ApiService{
    constructor() {
        super("api/egressos")
    }

    salvarEgresso(obj) {
        return this.post("/", obj);
    }

    obterEgressoCompleto(id) {
        return this.get(`/${id}`);
    }

    obterEgressos(){
        return this.get("/");
    }
}

export default EgressoService;