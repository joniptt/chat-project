import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      name: [Validators.required],
      email: [Validators.email],
      password: [Validators.minLength(8)],
      telefone: [Validators],
    });
  }
  submit() {
    if (this.cadForm.invalid) {
      this.auth.cadastro(this.cadForm.value).subscribe((res) => {
        console.log('funfou');
      });
    } else {
      console.log('error');
    }
  }
}
