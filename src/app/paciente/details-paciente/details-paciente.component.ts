import { ContatoED } from './../../models/ContatoED';
import { AfterViewInit, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnderecoED } from 'src/app/models/EnderecoED';
import { ExameED, criaExameComPaciente } from 'src/app/models/ExameED';
import { PacienteED } from 'src/app/models/PacienteED';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Validacoes } from 'src/app/util/validacoes';

@Component({
  selector: 'app-details-paciente',
  templateUrl: './details-paciente.component.html',
  styleUrls: ['./details-paciente.component.scss']
})
export class DetailsPacienteComponent {

  formularioDeUsuario: FormGroup;

  flagIdade: boolean = false;
  desabilitarValidacoes: boolean = false;

  pacientePassado = new PacienteED();
  enderecoPassado = new EnderecoED();
  contatoPassado = new ContatoED();
  examePassado: ExameED | undefined;
  recebePaciente: PacienteED | undefined;

  dataFormatadaExibicao: any
  idPaciente: number

  atributosExame: string[]


  constructor(
    private pacientesService: PacientesService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.idPaciente = this.activatedRoute.snapshot.params['id'];
    this.buscarPacienteById(this.idPaciente)
    this.desabilitarValidacoesDoFormulario();
    this.desabilitarValidacoes = true;

    this.atributosExame = Object.keys(new ExameED()).map(key => key);
    console.log(typeof this.atributosExame)

  }


  buscarPacienteById(idPaciente: number) {
    this.pacientesService.getPacienteById(this.idPaciente).subscribe((dataPaciente: PacienteED) => {
      this.pacientePassado = dataPaciente;
      console.log('obj paciente')
      console.log(JSON.stringify(this.pacientePassado,null,2))

      this.enderecoPassado = this.pacientePassado.endereco;
      this.contatoPassado = this.pacientePassado.contato;
      this.examePassado = this.pacientePassado?.exames?.[0];

      const dataNasc = new Date(this.pacientePassado.dataNasc);
      const dataNascString = dataNasc?.toISOString()?.split('T')[0];
      this.dataFormatadaExibicao = dataNascString


      this.configurarFormulario(this.pacientePassado, this.enderecoPassado, this.contatoPassado, this.examePassado);

    })

  }

  enviarDados() {

    this.pacientePassado.nome = this.formularioDeUsuario.value.nome;
    this.pacientePassado.dataNasc = this.formularioDeUsuario.value.dataNasc;
    this.pacientePassado.idade = this.formularioDeUsuario.value.idade;
    this.pacientePassado.RG = this.formularioDeUsuario.value.RG;
    this.pacientePassado.estadoCivil = this.formularioDeUsuario.value.estadoCivil;
    this.pacientePassado.filhos = this.formularioDeUsuario.value.filhos;
    this.pacientePassado.nomeResponsavelPaciente = this.formularioDeUsuario.value.nomeResponsavelPaciente;
    this.pacientePassado.profissao = this.formularioDeUsuario.value.profissao;


    this.pacientePassado.contato = new ContatoED();
    this.pacientePassado.contato.celular = this.formularioDeUsuario.value.celular;
    this.pacientePassado.contato.telefone = this.formularioDeUsuario.value.telefone;
    this.pacientePassado.contato.contFacebook = this.formularioDeUsuario.value.contFacebook;
    this.pacientePassado.contato.contInstagram = this.formularioDeUsuario.value.contInstagram;
    this.pacientePassado.contato.email = this.formularioDeUsuario.value.email;

    this.pacientePassado.endereco = new EnderecoED();
    this.pacientePassado.endereco.endRua = this.formularioDeUsuario.value.endRua;
    this.pacientePassado.endereco.endNumero = this.formularioDeUsuario.value.endNumero;
    this.pacientePassado.endereco.endBairro = this.formularioDeUsuario.value.endBairro;
    this.pacientePassado.endereco.endCidade = this.formularioDeUsuario.value.endCidade;
    this.pacientePassado.endereco.endTipoResidencia = this.formularioDeUsuario.value.endTipoResidencia;
    this.pacientePassado.endereco.endCep = this.formularioDeUsuario.value.endCep;
    this.pacientePassado.endereco.endObservacao = this.formularioDeUsuario.value.endObservacao;
    // this.pacientePassado.endereco = enderecoCompleto;

    this.pacientePassado.deficiente = this.formularioDeUsuario.value.deficiente === true || this.formularioDeUsuario.value.deficiente === 'true' || this.formularioDeUsuario.value.deficiente === true ? 1 : 0;
    this.pacientePassado.deficiencia = this.formularioDeUsuario.value.deficiencia;
    this.pacientePassado.deficienciaFamilia = this.formularioDeUsuario.value.deficienciaFamilia;
    this.pacientePassado.convenio = this.formularioDeUsuario.value.convenio === true ? 1 : 0;
    this.pacientePassado.atendente = [this.formularioDeUsuario.value.atendente];

    let exameCompleto = new ExameED();
    exameCompleto.nomeExame = this.formularioDeUsuario.value.exame;
    exameCompleto.medico = this.formularioDeUsuario.value.medicoAtendente;
    exameCompleto.local = this.formularioDeUsuario.value.local;
    exameCompleto.paciente = null;
    exameCompleto.dataExame = new Date();
    exameCompleto.valor = this.formularioDeUsuario.value.valorExame;
    exameCompleto.observacao = this.formularioDeUsuario.value.observacaoExame;
    this.pacientePassado.exames = [exameCompleto];
    this.pacientePassado.local = [this.formularioDeUsuario.value.local];
    this.pacientePassado.medicoAtendente = [this.formularioDeUsuario.value.medicoAtendente];


    this.pacientePassado.observacao = this.formularioDeUsuario.value.observacaoExame;
    this.pacientePassado.indicacao = this.formularioDeUsuario.value.indicacao;
    // this.pacientePassado.aceite = this.formularioDeUsuario.value.aceite;
    this.pacientePassado.aceite = true

    this.pacientePassado.isAtivo = 1;
    this.pacientePassado.dataCadastro = new Date();




    // console.log(JSON.stringify(this.pacientePassado,null,2))
    console.log('obj formulario')
    console.log(JSON.stringify(this.formularioDeUsuario.value,null,2))
    console.warn('---------------------------------')
    console.log('obj paciente')
    console.log(JSON.stringify(this.pacientePassado,null,2))
    console.warn('---------------------------------')
    // console.log('obj contato')
    // console.log(JSON.stringify(this.contatoPassado,null,2))
    // console.warn('---------------------------------')
    // console.log('obj exame')
    // console.log(JSON.stringify(this.examePassado,null,2))
    // console.warn('---------------------------------')
    // console.log('obj endereco')
    // console.log(JSON.stringify(this.enderecoPassado,null,2))


    this.pacientesService.cadastrarPaciente(this.pacientePassado).subscribe((dados: any) => {
      console.log(JSON.stringify(dados,null,2));
    })

    // const usuario = new Usuario(
    //   dadosFormulario.nome,
    //   dadosFormulario.email,
    //   dadosFormulario.cpf,
    //   dadosFormulario.nascimento,
    //   dadosFormulario.senha
    // );
  }


  configurarFormulario(paciente: PacienteED, endereco: EnderecoED, contato: ContatoED, exame: ExameED | undefined) {
    this.formularioDeUsuario = this.fb.group({
      nome: [paciente.nome,Validators.compose( [Validators.required, Validators.minLength(3)])],
      dataNasc: [this.dataFormatadaExibicao, Validators.required],
      idade: [paciente.idade, Validators.compose([Validators.required])],
      RG: [paciente.RG, Validators.compose([Validators.required, Validacoes.ValidaRg])],
      estadoCivil: [paciente.estadoCivil, Validators.required],
      filhos: [paciente.filhos],
      nomeResponsavelPaciente: [paciente.nomeResponsavelPaciente, Validators.compose([Validators.required])],
      profissao: [paciente.profissao, Validators.required],

      // contatoForm: this.fb.group({
        celular: [contato.celular, Validators.required],
        telefone: [contato.telefone, Validators.compose([Validators.required, Validacoes.comecaComNove])],
        contFacebook: [contato.contFacebook],
        contInstagram: [contato.contInstagram],
        email: [contato.email],
      // },),


      // endereco: this.fb.group({
        endRua: [endereco.endRua],
        endNumero: [endereco.endNumero],
        endBairro: [endereco.endBairro],
        endCidade: [endereco.endCidade],
        endCep: [endereco.endCep],
        endTipoResidencia: [endereco.endTipoResidencia],
        endObservacao: [endereco.endObservacao],
      // }),

      deficiente: [paciente.deficiente],
      deficiencia: [paciente.deficiencia],
      deficienciaFamilia: [paciente.deficienciaFamilia],
      convenio: [paciente.convenio],
      observacaoPaciente: [paciente.observacao],
      aceite: [paciente.aceite],
      atendente: [paciente.atendente],
      medicoAtendente: [paciente.medicoAtendente, Validators.required],
      exame: [exame?.nomeExame, Validators.required],
      observacaoExame: [exame?.observacao],
      valorExame: [exame?.valor, Validators.required],
      local: [paciente.local, Validators.required],
      indicacao: [paciente.indicacao],

      // isAtivo: [paciente.isAtivo],
      // dataCadastro: [paciente.dataCadastro],
    },[
      // {
      //   Validator:Validacoes.comecaComNove
      // },
      // {
      //   validator: Validacoes.maiorDeIdade
      // }
    ]


    );

  }


  // novo() {
  //   this.formularioDeUsuario.reset();
  // }

  get nome(){
    return this.formularioDeUsuario.get('nome');
  }

  get dataNasc(){
    return this.formularioDeUsuario.get('dataNasc');
  }

  verificaIdade(){
      const idade = this.formularioDeUsuario.get('idade');
      if(idade !== null || idade !== undefined || idade !== '' || idade !== 0){
        this.flagIdade = idade !== null && idade.value >= 18 ? true : false;
      }
  }

  get idade(){
    const idade = this.formularioDeUsuario.get('idade');
    if(idade !== null || idade !== undefined || idade !== '' || idade !== 0){
      this.flagIdade = idade !== null && idade.value >= 18 ? true : false;
    }
    return this.formularioDeUsuario.get('idade');
  }

  get RG(){
    return this.formularioDeUsuario.get('RG');
  }

  get estadoCivil(){
    return this.formularioDeUsuario.get('estadoCivil');
  }

  get filhos(){
    return this.formularioDeUsuario.get('filhos');
  }

  get nomeResponsavelPaciente(){
    return this.formularioDeUsuario.get('nomeResponsavelPaciente');
  }

  get profissao(){
    return this.formularioDeUsuario.get('profissao');
  }

  get celular(){
    return this.formularioDeUsuario.get('celular');
  }

  get telefone(){
    return this.formularioDeUsuario.get('telefone');
  }

  get contFacebook(){
    return this.formularioDeUsuario.get('contFacebook');
  }

  get contInstagram(){
    return this.formularioDeUsuario.get('contInstagram');
  }

  get email(){
    return this.formularioDeUsuario.get('email');
  }

  get rua(){
    return this.formularioDeUsuario.get('rua');
  }

  get numero(){
    return this.formularioDeUsuario.get('numero');
  }

  get bairro(){
    return this.formularioDeUsuario.get('bairro');
  }

  get cidade(){
    return this.formularioDeUsuario.get('cidade');
  }

  get tipoResidencia(){
    return this.formularioDeUsuario.get('tipoResidencia');
  }

  get cep(){
    return this.formularioDeUsuario.get('cep');
  }

  get endObservacao(){
    return this.formularioDeUsuario.get('endObservacao');
  }

  get deficiente(){
    return this.formularioDeUsuario.get('deficiente');
  }

  get deficiencia(){
    return this.formularioDeUsuario.get('deficiencia');
  }

  get deficienciaFamilia(){
    return this.formularioDeUsuario.get('deficienciaFamilia');
  }

  get convenio(){
    return this.formularioDeUsuario.get('convenio');
  }

  get observacao(){
    return this.formularioDeUsuario.get('observacao');
  }

  get aceite(){
    return this.formularioDeUsuario.get('aceite');
  }

  get atendente(){
    return this.formularioDeUsuario.get('atendente');
  }

  get medicoAtendente(){
    return this.formularioDeUsuario.get('medicoAtendente');
  }

  get exame(){
    return this.formularioDeUsuario.get('exame');
  }

  get local(){
    return this.formularioDeUsuario.get('local');
  }

  get indicacao(){
    return this.formularioDeUsuario.get('indicacao');
  }

  get isAtivo(){
    return this.formularioDeUsuario.get('isAtivo');
  }

  get dataCadastro(){
    return this.formularioDeUsuario.get('dataCadastro');
  }


  desabilitarValidacoesDoFormulario() {
    Object.keys(this.formularioDeUsuario.controls).forEach(key => {
      const control = this.formularioDeUsuario.controls[key];
      control.clearValidators();
      control.updateValueAndValidity();
    });
  }





}



