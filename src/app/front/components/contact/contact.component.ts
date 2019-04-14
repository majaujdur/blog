import { Component, OnInit } from '@angular/core';
import { RazmenaPodatakaService } from '../../services/razmena-podataka.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private servisZaRazmenuPodataka : RazmenaPodatakaService,
    private fb : FormBuilder,
    private http : HttpClient,
    private blogService : BlogService
  ) { }

  public dugmeTekst = "Send";
  public podatak : string;
  public contactForm : FormGroup;
  public isFormSubmitted = false;
  public posts : any;

  public brTelefona = [{
    brojTelefona:"060123456",
    nazivKompanije:"Blog Kompanija"
  }];

  ngOnInit() {
    this.servisZaRazmenuPodataka.promeniPodatak(this.brTelefona);

    this.contactForm = this.fb.group({
      imePrezime:new FormControl('', Validators.required),
      email:new FormControl('', [Validators.email,Validators.required]),
      drzava:new FormControl(0)
    })

    this.blogService.getPosts().subscribe((data : Post[])=>{
      this.posts = data[0];
      this.contactForm.patchValue({
        imePrezime:this.posts['author']
      })
      console.log(this.posts)
    })

    //FORME



  

    
  }

  prihvatiPodatke(event){
    this.podatak = event;
  }

  submitForm(){
    if(this.contactForm.valid){
      console.log(this.contactForm.value)
      this.isFormSubmitted=true;
    }
    // this.http.post("http://www.pera.com",{data:this.contactForm.value}).subscribe(
    //   success=>{

    //   },
    //   error=>{
        
    //   }
    // )
  }



}
