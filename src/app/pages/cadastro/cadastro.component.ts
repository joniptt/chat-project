import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../login/services/auth.service';

@Component({
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  cadForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.cadForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      telefone: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  submit() {
    if (!this.cadForm.invalid) {
      this.auth.cadastro(this.cadForm.value).subscribe(
        (res) => {
          Swal.fire({
            text: 'Cadastro efetuado com sucesso!',
            position: 'top',
            icon: 'success',
            width: '400px',
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
        }
        // (error) => {
        //   Swal.fire({
        //     title: 'Erro 401!',
        //     text: 'Ocorreu um erro na hora de realizar o cadastro!',
        //     position: 'top',
        //     icon: 'error',
        //     width: '400px',
        //     timer: 2000,
        //     timerProgressBar: true,
        //     showConfirmButton: false,
        //   });
        // }
      );
    } else {
      Swal.fire({
        title: 'Erro 401!',
        text: 'Ocorreu um erro na hora de realizar o cadastro!',
        position: 'top',
        icon: 'error',
        width: '400px',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  }
}
