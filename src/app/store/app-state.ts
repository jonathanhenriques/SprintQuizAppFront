import { ActionReducerMap } from "@ngrx/store";
import { CategoriaQuestaoEffects } from "./categoriaQuestao/categoriaQuestao.effects";
import { categoriaQuestaoReducer, CategoriaQuestaoState } from "./categoriaQuestao/categoriaQuestao.reducer";


//arquivo criado para minimizar e centralizar as importações no appModule referente

//aqui importamos todos os states existentes
export interface AppState{
    categoriaQuestao: CategoriaQuestaoState, //nome reference vindo de reducer/getAllCategoriaQuestaoFeatureState
   
   
    //produtos: ProdutosState
}

//será importado no appModule referente como StoreModule.forRoot(appReducer)
//aqui importamos todos os Reducers existentes
export const appReducer: ActionReducerMap<AppState> = { //aqui estamos mapeando o estado de um reducer
    categoriaQuestao: categoriaQuestaoReducer,   //vindo da função categoriaQuestaoReducer que retorna um state de CategoriaQuestao, em reducer
    
    
   // produtos: produtosReducer
}  

//será importado no appModule referente como EffectsModule.forRoot(appEffects)
//aqui importamos todos os Effects existentes
export const appEffects = [
    CategoriaQuestaoEffects,  //nome da classe vindo de effects

    //ProdutosEffects
]