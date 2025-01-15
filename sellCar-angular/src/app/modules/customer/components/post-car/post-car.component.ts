import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../../../auth/service/storage/storage.service';

@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrl: './post-car.component.css'
})
export class PostCarComponent {

  postCarForm : FormGroup;
  imagePreview: string | null = null;
  selectedFile : File | null ;

  listOfBrands = ["BMW", "AUDI", "FERRARI", "TESLA", "VOLVO", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDAI", "LEXUS", "KIA", "HAVAL"];
  listOfType = ["Petrol", "Hybrid", "Diesel", "Electric", "CNG"];
  listOfColor = ["Red", "White", "Blue", "Black", "Orange", "Grey", "Silver"];
  listOfTransmission = ["Manual", "Automatic"];

  constructor (
    private service : CustomerService,
    private formBuilder : FormBuilder,
    private router : Router,
    
  ){}  


  ngOnInit() {
    this.postCarForm = this.formBuilder.group({
    brand: [null, [Validators.required]],
    name: [null, [Validators.required]],
    type: [null, [Validators.required]],
    transmission: [null, [Validators.required]],
    color: [null, [Validators.required]],
    year: [null, [Validators.required]],
    description: [null, [Validators.required]],
    price: [null, [Validators.required]],
    })
  }

  postCar(){
    console.log("post car metodo del componente")
      console.log(this.postCarForm.value);
      console.log(this.selectedFile);

      const formData : FormData = new FormData()
      formData.append("img" , this.selectedFile)
      formData.append("brand" , this.postCarForm.get('brand').value)
      formData.append("name" , this.postCarForm.get('name').value)
      formData.append("type" , this.postCarForm.get('type').value)
      formData.append("color" , this.postCarForm.get('color').value)
      formData.append("year" , this.postCarForm.get('year').value)
      formData.append("transmission" , this.postCarForm.get('transmission').value)
      formData.append("description" , this.postCarForm.get('description').value)
      formData.append("price" , this.postCarForm.get('price').value)
      console.log(StorageService.getUSerId())
      formData.append("userId" , StorageService.getUSerId())

      console.log(formData)

      this.service.postCar(formData).subscribe((res)=>{
        console.log(res);
        console.log("auto posteado correctamente");
        this.router.navigateByUrl("/customer/dashboard")
        }, error => {
        console.log("algo salio mal en el post Car")
      })

  }
    

  // Método que maneja la carga de la imagen y la vista previa
  onImageChange(event: Event): void {
    this.selectedFile = (event.target as HTMLInputElement).files?.[0];  

    if (this.selectedFile) {
      const reader = new FileReader();
      
      reader.onload = () => {
        this.imagePreview = reader.result as string;  // Guardar la URL de la imagen para la previsualización
      };

      reader.readAsDataURL(this.selectedFile);  // Leer el archivo como URL
    }
  }

  

}
