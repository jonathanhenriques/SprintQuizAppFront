import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { CategoriaQuestao } from "src/app/categoria-questao/model/CategoriaQuestao";
import * as fromCategoriaQuestaoAction from './categoriaQuestao.actions';

//tipo do objeto do estado
//poderia ser também
//categoriaProvaState
//provaState
export interface CategoriaQuestaoState {
    categoriaQuestoes: CategoriaQuestao[];
    categoriaQuestao: CategoriaQuestao | null;
    erro: string | '';
}

//objetos de estado
export const initialState: CategoriaQuestaoState = {
    categoriaQuestoes: [],
    categoriaQuestao: null,
    erro: ''
}

//reducers
const _categoriaQuestaoReducer = createReducer(
    initialState,
    //get all
    on(fromCategoriaQuestaoAction.getAllCategoriaQuestaoSucess, (state, { payload }) => ({ ...state, categoriaQuestoes: payload, error: '' })),
    on(fromCategoriaQuestaoAction.getAllCategoriaQuestaoFail, (state, { error }) => ({ ...state, error: error })),

    //get
    on(fromCategoriaQuestaoAction.getCategoriaQuestaoSucess, (state, { payload }) => ({ ...state, categoriaQuestao: payload, error: '' })),
    on(fromCategoriaQuestaoAction.getCategoriaQuestaoFail, (state, { error }) => ({ ...state, error: error })),

    //post
    on(fromCategoriaQuestaoAction.postCategoriaQuestaoSucess, (state, { payload }) => ({ ...state, categoriaQuestoes: [...state.categoriaQuestoes, payload], error: '' })),
    on(fromCategoriaQuestaoAction.getCategoriaQuestaoFail, (state, { error }) => ({ ...state, error: error })),

    //update
    on(fromCategoriaQuestaoAction.postCategoriaQuestaoSucess, (state, { payload }) => ({
        ...state,
        categoriaQuestoes: [...state.categoriaQuestoes].map((obj) => {
            if (obj.id == payload.id)
                return payload;
            else 
                return obj;

        }),
        error: ''
    })),
    on(fromCategoriaQuestaoAction.getCategoriaQuestaoFail, (state, { error }) => ({ ...state, error: error })),

    //delete
    on(fromCategoriaQuestaoAction.deleteCategoriaQuestaoSucess, (state, { payload }) => ({
        ...state,
        categoriaQuestoes: [...state.categoriaQuestoes].filter((obj) => obj.id != payload ),
        error: ''
    })),
    on(fromCategoriaQuestaoAction.getCategoriaQuestaoFail, (state, { error }) => ({ ...state, error: error })),

)

export function categoriaQuestaoReducer(state = initialState, action: Action) {
    return _categoriaQuestaoReducer(state, action);
}


//chave dos seletores
//chave de acesso para os dados de categoriaQuestao
const getCategoriaQuestaoFeatureState = createFeatureSelector<CategoriaQuestaoState>(
    'categoriaQuestao'
)



//seletores
//semelhante ao jparepository
export const getAllCategoriaQuestao = createSelector(
    getCategoriaQuestaoFeatureState,
    (state: CategoriaQuestaoState)=> state.categoriaQuestoes
);

export const getCategoriaQuestao = createSelector(
    getCategoriaQuestaoFeatureState,
    (state: CategoriaQuestaoState)=> state.categoriaQuestao
);

export const getCategoriaQuestaoErro = createSelector(
    getCategoriaQuestaoFeatureState,
    (state: CategoriaQuestaoState) => state.erro
);

export const getCategoriaQuestaoPortugues = createSelector(
    getCategoriaQuestaoFeatureState,
    (state: CategoriaQuestaoState) => state.categoriaQuestoes.filter((obj)=> obj.titulo == 'Matemática')
);

//talvez de erro por conta do length
export const getCategoriaQuestaoComMaisDe5Questoes = createSelector(
    getCategoriaQuestaoFeatureState,
    (state: CategoriaQuestaoState) => state.categoriaQuestoes.filter((obj)=> obj.questoes.length > 5)
);

