export class EnderecoED {
  public rua: string;
  public numero: number;
  public bairro: string;
  public cidade: string;
  public tipoResidencia: string;
  public cep: string;
  public endObservacao: string;

  constructor() {
    this.rua = '';
    this.numero = 0;
    this.bairro = '';
    this.cidade = '';
    this.tipoResidencia = '';
    this.cep = '';
    this.endObservacao = '';
  }
}
