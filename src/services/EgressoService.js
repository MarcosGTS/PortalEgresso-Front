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

    obterEgressos() {
        return this.get("/");
    }

    editarEgresso(id, obj) {
        return this.put(`/${id}`, obj);
    }

    adicionarCurso(idEgresso, idCurso, obj) {
        return this.post(`/${idEgresso}/curso/${idCurso}`, obj);
    }

    adicionarCargo(idEgresso, idCargo, obj) {
        return this.post(`/${idEgresso}/cargo/${idCargo}`, obj);
    }
}

export default EgressoService;