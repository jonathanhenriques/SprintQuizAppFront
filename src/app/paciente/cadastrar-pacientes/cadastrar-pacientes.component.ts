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
import { EnderecoED } from 'src/app/models/EnderecoED';
import { ExameED, criaExameComPaciente } from 'src/app/models/ExameED';
import { PacienteED } from 'src/app/models/PacienteED';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Validacoes } from 'src/app/util/validacoes';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.scss'],
})
export class CadastrarPacientesComponent implements OnInit {

  formularioDeUsuario: FormGroup;

  flagIdade: boolean = false;
  desabilitarValidacoes: boolean = false;

  pacientePassado = new PacienteED();
  enderecoPassado = new EnderecoED();
  contatoPassado = new ContatoED();
  examePassado = new ExameED();

  constructor(
    private pacientesService: PacientesService,
    private fb: FormBuilder,
  ) {

  }

  ngOnInit(): void {

    this.pacientePassado.exames = [this.examePassado]
    this.configurarFormulario(this.pacientePassado, this.enderecoPassado, this.contatoPassado, this.examePassado);
    this.desabilitarValidacoesDoFormulario();
    this.desabilitarValidacoes = true;
  }

  enviarDados() {

    let jso = {
      "nome": "Jonathan",
      "dataNasc": "1997-05-05",
      "idade": "25",
      "RG": "501818352",
      "estadoCivil": "SOLTEIRO",
      "filhos": 0,
      "nomeResponsavelPaciente": "",
      "profissao": "Desenvolvedor",
      "contatoForm": {
        "celular": "11959503571",
        "telefone": "1140551452",
        "contFacebook": "faceboks",
        "contInstagram": "instagram",
        "email": "email@email.com"
      },
      "enderecoForm": {
        "rua": "ruas",
        "numero": "1",
        "bairro": "bairros",
        "cidade": "Cidades",
        "tipoResidencia": "Casa",
        "cep": "09951490",
        "endObservacao": "Obersevado"
      },
      "deficiente": false,
      "deficiencia": "",
      "deficienciaFamilia": "",
      "convenio": false,
      "observacao": "",
      "aceite": true,
      "atendente": [
        "andreia"
      ],
      "medicoAtendente": [
        "Japones"
      ],
      "exame": "vista",
      "local": [
        "Diadema"
      ],
      "indicacao": "",
      "isAtivo": false,
      "dataCadastro": "2023-04-23T18:43:29.369Z",
      "exames": [{
        "id": 0,
        "medico": "J",
        "local": "D",
        "paciente": null,
        "dataExame": "2023-04-23T19:16:54.830Z",
        "valor": 0,
        "observacao": ""
      }]
    }

    // let pacienteEnviar = new PacienteED();
    // pacienteEnviar = this.formularioDeUsuario.value;

    const exame = new ExameED();
    exame.nomeExame = this.pacientePassado?.exames?.[0]?.nomeExame || '';
    exame.medico = this.pacientePassado.medicoAtendente[0]
    exame.local = this.pacientePassado.local[0];
    // exame.paciente = dadosFormulario;
    this.pacientePassado.exames = [exame];
    // dadosFormulario.exames.push(exame);
    this.pacientePassado.medicoAtendente = [...this.pacientePassado.medicoAtendente]
    // dadosFormulario.medicoAtendente = dadosFormulario.medicoAtendente;
    this.pacientePassado.atendente = [...this.pacientePassado.atendente]
    // dadosFormulario.atendente.push(dadosFormulario.atendente);
    this.pacientePassado.local = [...this.pacientePassado.local];
    // dadosFormulario.local = dadosFormulario.local;

    const enderecoEnviar = new EnderecoED()
    enderecoEnviar.rua = this.pacientePassado.endereco.rua;
    enderecoEnviar.numero = this.pacientePassado.endereco.numero;
    enderecoEnviar.bairro = this.pacientePassado.endereco.bairro;
    enderecoEnviar.cidade = this.pacientePassado.endereco.cidade;
    enderecoEnviar.tipoResidencia = this.pacientePassado.endereco.tipoResidencia;
    enderecoEnviar.cep = this.pacientePassado.endereco.cep;
    enderecoEnviar.endObservacao = this.pacientePassado.endereco.endObservacao;
    this.pacientePassado.endereco = new EnderecoED;
    this.pacientePassado.endereco = enderecoEnviar;

    const contatoEnviar = new ContatoED()
    contatoEnviar.celular = this.pacientePassado.contato.celular;
    contatoEnviar.telefone = this.pacientePassado.contato.telefone;
    contatoEnviar.contFacebook = this.pacientePassado.contato.contFacebook;
    contatoEnviar.contInstagram = this.pacientePassado.contato.contInstagram;
    contatoEnviar.email = this.pacientePassado.contato.email;
    this.pacientePassado.contato = new ContatoED;
    this.pacientePassado.contato = contatoEnviar;

    console.log(JSON.stringify(this.pacientePassado,null,2))

    this.pacientesService.cadastrarPaciente(this.pacientePassado).subscribe((dados: any) => {
      console.log(dados);
    })

    // const usuario = new Usuario(
    //   dadosFormulario.nome,
    //   dadosFormulario.email,
    //   dadosFormulario.cpf,
    //   dadosFormulario.nascimento,
    //   dadosFormulario.senha
    // );
  }


  configurarFormulario(paciente: PacienteED, endereco: EnderecoED, contato: ContatoED, exame: ExameED) {
    this.formularioDeUsuario = this.fb.group({
      nome: [paciente.nome,Validators.compose( [Validators.required, Validators.minLength(3)])],
      dataNasc: [paciente.dataNasc, Validators.required],
      idade: [paciente.idade, Validators.compose([Validators.required])],
      RG: [paciente.RG, Validators.compose([Validators.required, Validacoes.ValidaRg])],
      estadoCivil: [paciente.estadoCivil, Validators.required],
      filhos: [paciente.filhos],
      nomeResponsavelPaciente: [paciente.nomeResponsavelPaciente, Validators.compose([Validators.required])],
      profissao: [paciente.profissao, Validators.required],

      contatoForm: this.fb.group({
        celular: [contato.celular, Validators.required],
        telefone: [contato.telefone, Validators.compose([Validators.required, Validacoes.comecaComNove])],
        contFacebook: [contato.contFacebook],
        contInstagram: [contato.contInstagram],
        email: [contato.email],
      },),


      endereco: this.fb.group({
        endRua: [endereco.rua],
        endNumero: [endereco.numero],
        endBairro: [endereco.bairro],
        endCidade: [endereco.cidade],
        endCep: [endereco.cep],
        endTipoResidencia: [endereco.tipoResidencia],
        endObservacao: [endereco.endObservacao]}),

      deficiente: [paciente.deficiente],
      deficiencia: [paciente.deficiencia],
      deficienciaFamilia: [paciente.deficienciaFamilia],
      convenio: [paciente.convenio],
      observacao: [paciente.observacao],
      aceite: [paciente.aceite],
      atendente: [paciente.atendente],
      medicoAtendente: [paciente.medicoAtendente],
      exame: [exame.nomeExame, Validators.required],
      local: [paciente.local, Validators.required],
      indicacao: [paciente.indicacao],
      isAtivo: [paciente.isAtivo],
      dataCadastro: [paciente.dataCadastro],
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

  // salvar() {
  //   console.log(this.formularioDeUsuario.value);
  //   console.log(this.formularioDeUsuario);
  //   this.pacientesService
  //     .postPaciente(this.formularioDeUsuario.value)
  //     .subscribe(() => console.log('Paciente cadastrado com sucesso!'));
  // }

  // atualizar() {
  //   this.pacientesService
  //     .putPaciente(this.formularioDeUsuario.value)
  //     .subscribe((paciente) => {
  //       this.formularioDeUsuario.setValue(paciente);
  //       console.log('Paciente atualizado com sucesso!');
  //     });
  // }


  novo() {
    this.formularioDeUsuario.reset();
  }

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
