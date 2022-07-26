import ApiService from "./ApiService";

class EgressoService extends ApiService{
    constructor(apiToken) {
        super("api/egressos", apiToken);
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

    obterIdporEmail(email) {
        return this.get(`/email/${email}`);
    }

    editarEgresso(id, obj) {
        return this.post(`/editar/${id}`, obj);
    }

    adicionarCurso(idEgresso, idCurso, obj) {
        return this.post(`/${idEgresso}/curso/${idCurso}`, obj);
    }

    editarCurso(egressoId, novoCursoId, prevCursoId, obj) {
        return this.post(`/editar/${egressoId}/curso/${prevCursoId}/${novoCursoId}`, obj);
    }

    removerCurso(idEgresso, idCurso) {
        return this.post(`/delete/${idEgresso}/curso/${idCurso}`);
    }

    adicionarCargo(idEgresso, idCargo, obj) {
        return this.post(`/${idEgresso}/cargo/${idCargo}`, obj);
    }

    editarCargo(egressoId, obj) {
        return this.post(`/editar/${egressoId}/cargo`, obj);
    }

    removerCargo(egressoId, profId) {
        return this.post(`/delete/${egressoId}/cargo/${profId}`);
    }

    adicionarContato(idEgresso, idContato, obj) {
        return this.post(`/${idEgresso}/contato/${idContato}`, obj);
    }

    editarContato(idEgresso, idContato, idNovoContato, obj) {
        return this.post(`/editar/${idEgresso}/contato/${idContato}/${idNovoContato}`, obj);
    }

    removerContato(idEgresso, idContato) {
        return this.post(`/deletar/${idEgresso}/contato/${idContato}`);
    }

}

export default EgressoService;