import { createAction, props } from "@ngrx/store"
import { CategoriaQuestao } from "src/app/categoria-questao/model/CategoriaQuestao";

// DEFININDO ACTIONS

export const enum categoriaQuestaoAcoes{
    //GET ALL
    GET_ALL_CATEGORIAQUESTAO = '[GET_ALL_CATEGORIAQUESTAO] OBTER TODOS CATEGORIAQUESTAO',
    GET_ALL_CATEGORIAQUESTAO_SUCESS = '[GET_ALL_CATEGORIAQUESTAO_SUCESS] OBTER TODOS CATEGORIAQUESTAO SUCESSO',
    GET_ALL_CATEGORIAQUESTAO_FAIL = '[GET_ALL_CATEGORIAQUESTAO_FAIL] OBTER TODOS CATEGORIAQUESTAO FAIL',

    //GET BY ID
    GET_CATEGORIAQUESTAO = '[GET_CATEGORIAQUESTAO] OBTER CATEGORIAQUESTAO',
    GET_CATEGORIAQUESTAO_SUCESS = '[GET_CATEGORIAQUESTAO_SUCESS] OBTER CATEGORIAQUESTAO SUCESSO',
    GET_CATEGORIAQUESTAO_FAIL = '[GET_CATEGORIAQUESTAO_FAIL] OBTER CATEGORIAQUESTAO FAIL',

    //POST
    POST_CATEGORIAQUESTAO = '[POST_CATEGORIAQUESTAO] SALVAR CATEGORIAQUESTAO',
    POST_CATEGORIAQUESTAO_SUCESS = '[POST_CATEGORIAQUESTAO_SUCESS] SALVAR CATEGORIAQUESTAO SUCESS',
    POST_CATEGORIAQUESTAO_FAIL = '[POST_CATEGORIAQUESTAO_FAIL] SALVAR CATEGORIAQUESTAO FAIL',

    //PUT
    PUT_CATEGORIAQUESTAO = '[PUT_CATEGORIAQUESTAO] ATUALIZAR CATEGORIAQUESTAO',
    PUT_CATEGORIAQUESTAO_SUCESS = '[PUT_CATEGORIAQUESTAO_SUCESS] ATUALIZAR CATEGORIAQUESTAO SUCESS',
    PUT_CATEGORIAQUESTAO_FAIL = '[PUT_CATEGORIAQUESTAO_FAIL] ATUALIZAR CATEGORIAQUESTAO FAIL',

    //DELETE
    DELETE_CATEGORIAQUESTAO = '[DELETE_CATEGORIAQUESTAO] DELETAR CATEGORIAQUESTAO',
    DELETE_CATEGORIAQUESTAO_SUCESS = '[DELETE_CATEGORIAQUESTAO_SUCESS] DELETAR CATEGORIAQUESTAO SUCESS',
    DELETE_CATEGORIAQUESTAO_FAIL = '[DELETE_CATEGORIAQUESTAO_FAIL] DELETAR CATEGORIAQUESTAO FAIL',

}

//CRIANDO ACTIONS
//get all
export const getAllCategoriaQuestao = createAction(
    categoriaQuestaoAcoes.GET_ALL_CATEGORIAQUESTAO
);

export const getAllCategoriaQuestaoSucess = createAction(
    categoriaQuestaoAcoes.GET_ALL_CATEGORIAQUESTAO_SUCESS,
    props<{payload: CategoriaQuestao[]}>()
);

export const getAllCategoriaQuestaoFail = createAction(
    categoriaQuestaoAcoes.GET_ALL_CATEGORIAQUESTAO_FAIL,
    props<{error: string}>()
);

//get
export const getCategoriaQuestao = createAction(
    categoriaQuestaoAcoes.GET_CATEGORIAQUESTAO,
    props<{payload: number}>()
);

export const getCategoriaQuestaoSucess = createAction(
    categoriaQuestaoAcoes.GET_CATEGORIAQUESTAO_SUCESS,
    props<{payload: CategoriaQuestao}>()
);

export const getCategoriaQuestaoFail = createAction(
    categoriaQuestaoAcoes.GET_CATEGORIAQUESTAO_FAIL,
    props<{error: string}>()
);

//post
export const postCategoriaQuestao = createAction(
    categoriaQuestaoAcoes.POST_CATEGORIAQUESTAO,
    props<{payload: CategoriaQuestao}>()
);

export const postCategoriaQuestaoSucess = createAction(
    categoriaQuestaoAcoes.POST_CATEGORIAQUESTAO_SUCESS,
    props<{payload: CategoriaQuestao}>()
);

export const postCategoriaQuestaoFail = createAction(
    categoriaQuestaoAcoes.POST_CATEGORIAQUESTAO_FAIL,
    props<{error: string}>()
);

//put
export const putCategoriaQuestao = createAction(
    categoriaQuestaoAcoes.PUT_CATEGORIAQUESTAO,
    props<{payload: CategoriaQuestao}>()
);

export const putCategoriaQuestaoSucess = createAction(
    categoriaQuestaoAcoes.PUT_CATEGORIAQUESTAO_SUCESS,
    props<{payload: CategoriaQuestao}>()
);

export const putCategoriaQuestaoFail = createAction(
    categoriaQuestaoAcoes.PUT_CATEGORIAQUESTAO_FAIL,
    props<{error: string}>()
);

//delete
export const deleteCategoriaQuestao = createAction(
    categoriaQuestaoAcoes.DELETE_CATEGORIAQUESTAO,
    props<{payload: number}>()
);

export const deleteCategoriaQuestaoSucess = createAction(
    categoriaQuestaoAcoes.DELETE_CATEGORIAQUESTAO_SUCESS,
    props<{payload: number}>()
);

export const deleteCategoriaQuestaoFail = createAction(
    categoriaQuestaoAcoes.DELETE_CATEGORIAQUESTAO_FAIL,
    props<{error : string}>()
);








