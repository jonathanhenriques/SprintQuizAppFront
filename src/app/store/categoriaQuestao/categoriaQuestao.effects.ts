import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { CategoriaQuestaoService } from "src/app/categoria-questao/service/categoria-questao.service";
import * as fromCategoriaQuestaoAction from './categoriaQuestao.actions';


@Injectable()
export class CategoriaQuestaoEffects {

    constructor(
        private actions$: Actions,
        private categoriaQuestaoService: CategoriaQuestaoService
    ) { }

    //criando um Effect de allCategoriaQuestao
    getAllCategoriaQuestao$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromCategoriaQuestaoAction.categoriaQuestaoAcoes.GET_ALL_CATEGORIAQUESTAO), //verificamos o que foi executado, aqui foi um getAllCategoriaQuestao
                exhaustMap(() => this.categoriaQuestaoService.getAllCategoriaQuestao() //Depois executamos o service de CategoriaQuestao, getAllCategoriaQuestao()
                    .pipe( //trabalhos em cima do retorno do service, dando certo (success) ou dando errado (error)
                        map(payload =>
                            fromCategoriaQuestaoAction.getAllCategoriaQuestaoSucess({ payload }), //dando certo, retorna o obj payload contendo tudo
                            catchError(error => of(fromCategoriaQuestaoAction.getAllCategoriaQuestaoFail({ error }))) //dando errado retorna o erro
                        )
                    )
                )
            )
    );

    //effect getCategoriaQuestao
    getCategoriaQuestao$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromCategoriaQuestaoAction.categoriaQuestaoAcoes.GET_CATEGORIAQUESTAO),
                exhaustMap((resp: any) => this.categoriaQuestaoService.getByIdCategoriaQuestao(resp.payload)
                    .pipe(
                        map(payload =>
                            fromCategoriaQuestaoAction.getCategoriaQuestaoSucess({ payload }),
                            catchError(error => of(fromCategoriaQuestaoAction.getAllCategoriaQuestaoFail({ error })))
                        )

                    )
                )
            )
    );

    //effect postCategoriaQuestao
    postCategoriaQuestao$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromCategoriaQuestaoAction.categoriaQuestaoAcoes.POST_CATEGORIAQUESTAO),
                exhaustMap((resp: any) => this.categoriaQuestaoService.postCategoriaQuestao(resp.payload)

                    .pipe(
                        map(payload =>
                            fromCategoriaQuestaoAction.postCategoriaQuestaoSucess({ payload }),
                            catchError(error => of(fromCategoriaQuestaoAction.postCategoriaQuestaoFail({ error })))
                        )
                    )
                )
            )
    )

    //effect putCategoriaQuestao
    putCategoriaQuestao$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromCategoriaQuestaoAction.categoriaQuestaoAcoes.PUT_CATEGORIAQUESTAO),
                exhaustMap((resp: any) => this.categoriaQuestaoService.putCategoriaQuestao(resp.payload)
                    .pipe(
                        map(payload =>
                            fromCategoriaQuestaoAction.putCategoriaQuestaoSucess({ payload }),
                            catchError(error => of(fromCategoriaQuestaoAction.putCategoriaQuestaoFail({ error })))
                        )
                    )
                )
            )
    )

    //effect DeleteCategoriaQuestao
    deleteCategoriaQuestao = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromCategoriaQuestaoAction.categoriaQuestaoAcoes.DELETE_CATEGORIAQUESTAO),
                exhaustMap((resp: any) => this.categoriaQuestaoService.deleteCategoriaQuestao(resp.payload)
                    .pipe(
                        map(() =>
                            fromCategoriaQuestaoAction.deleteCategoriaQuestaoSucess({ payload: resp.payload }),
                            catchError(error => of(fromCategoriaQuestaoAction.deleteCategoriaQuestaoFail({ error })))
                        )
                    )
                )
            )
    )
}