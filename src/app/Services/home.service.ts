import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  display_image:any;
  allTestmonial:any[] = [];
  allTestmonialUsers:any[] = [];
  allVacciniationCentre:any=[{}];
  centertitlecoordinate:any=[{}];
  totalCenters=0

  allHome:any[] = [];
  allAbout:any[] = [];
  allFooter:any[] = [];
  logoImage:any;
  testmonialImage:any;
  title1Im:any;
  new1Im:any;
  new2Im:any;
  new3Im:any; 
  imTitleAbout:any;
  whImageAbout:any;
  proImageAbout:any;



  constructor(private http:HttpClient,private spinner :NgxSpinnerService ,private toastr:ToastrService) { }
  message: string = "Welcome Trainee :) ";


  
    GetAllTestmonials(){
      this.spinner.show();
      this.http.get('https://localhost:44352/api/testmonial/GetAll').subscribe((resp:any)=>
      {
       this.allTestmonial = resp;
       this.spinner.hide();
     },
     err=>
     {
     this.spinner.hide();
     this.toastr.error(err.message, err.status);
     }
   );
   }
   ShowAllTestmonials(){
    this.spinner.show();
    this.http.get('https://localhost:44352/api/testmonial/ShowAll').subscribe((resp:any)=>
    {
     this.allTestmonialUsers = resp;
     console.log(this.allTestmonialUsers)
     this.spinner.hide();
   },
   err=>
   {
   this.spinner.hide();
   this.toastr.error(err.message, err.status);
   }
 );
 }

   createTestmonial(body:any){
     body.image = this.testmonialImage;
     body.status = 'Pending';
     var r = localStorage.getItem('ID');
     let m:number = +r;
     body.userid = m;     
     this.spinner.show();
     this.http.post('https://localhost:44352/api/testmonial/', body).subscribe((resp)=>
     {
     this.spinner.hide();
     this.toastr.success('Created');

     }, err=>
     {
       this.spinner.hide();
       this.toastr.error(err.message, err.status);
     });
   }

   updateTestmonial(body:any){
    body.image = this.testmonialImage;
     this.spinner.show();
     this.http.put('https://localhost:44352/api/testmonial', body).subscribe((resp)=>
     {
       this.spinner.hide();
       this.toastr.success('Updated');
     }, err=>
     {
       this.toastr.error(err.message, err.status);
     })
   }
   uploadTestmonialImage(file:FormData){
    this.http.post('https://localhost:44352/api/Testmonial/UploadImage/', file).subscribe((resp:any)=>{
    this.testmonialImage = resp.image;
    }, err=>
    {
      this.toastr.error('Can\'t Upload Image');
    });
    }
   deleteTestmonial(id:number){
     this.spinner.show();
     this.http.delete('https://localhost:44352/api/testmonial/Delete/' + id).subscribe((resp)=>
     {
       this.spinner.hide();
       this.toastr.success('Deleted');
     }, err=>
     {
       this.spinner.hide();
       this.toastr.error(err.message, err.status);
     })
   }

   searchByTestmonial(id:number){
     this.spinner.show();
     this.http.get('https://localhost:44352/api/testmonial/GetById/' + id).subscribe((resp:any)=>{
     this.allTestmonial = [resp];
     this.spinner.hide();  
     this.toastr.success('found SucsessFully');
   
     },err=>{
     this.spinner.hide();
     this.toastr.error(err.status, err.message);
     }
     )}

     getAllHome(){
      this.spinner.show();
      this.http.get('https://localhost:44352/api/home/').subscribe((resp:any)=>
      {
        this.spinner.hide();
        this.allHome = resp;
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    createHome(body:any){
      body.imagelogo = this.logoImage;
      body.imagetitle1 = this.title1Im;
      body.newsimage1 = this.new1Im;
      body.newsimage2 = this.new2Im;
      body.newsimage3 = this.new3Im;
      this.spinner.show();
      this.http.post('https://localhost:44352/api/home/', body).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Created');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    uploadLogoImage(file:FormData){
      this.http.post('https://localhost:44352/api/home/UploadImage/logo', file).subscribe((resp:any)=>{
      this.logoImage = resp.imagelogo;
      }, err=>
      {
        this.toastr.error('Can\'t Upload Image');
      });
      }
      uploadImageTitle1(file:FormData){
        this.http.post('https://localhost:44352/api/home/UploadImage/imageTitle1', file).subscribe((resp:any)=>{
        this.title1Im = resp.imagetitle1;
        }, err=>
        {
          this.toastr.error('Can\'t Upload Image');
        });
        }
        uploadNewsIm1(file:FormData){
          this.http.post('https://localhost:44352/api/home/UploadImage/newsImage1', file).subscribe((resp:any)=>{
          this.new1Im = resp.newsimage1;
          }, err=>
          {
            this.toastr.error('Can\'t Upload Image');
          });
          }
          uploadNewsIm2(file:FormData){
            this.http.post('https://localhost:44352/api/home/UploadImage/newsImage2', file).subscribe((resp:any)=>{
            this.new2Im = resp.newsimage2;
            }, err=>
            {
              this.toastr.error('Can\'t Upload Image');
            });
            }
            uploadNewsIm3(file:FormData){
              this.http.post('https://localhost:44352/api/home/UploadImage/newsImage3', file).subscribe((resp:any)=>{
              this.new3Im = resp.newsimage3;
              }, err=>
              {
                this.toastr.error('Can\'t Upload Image');
              });
              }
    updateHome(body:any){
      body.imagelogo = this.logoImage;
      body.imagetitle1 = this.title1Im;
      body.newsimage1 = this.new1Im;
      body.newsimage2 = this.new2Im;
      body.newsimage3 = this.new3Im;
      this.spinner.show();
      this.http.put('https://localhost:44352/api/home/', body).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Updated');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      });
    }

    deleteHome(id:number){
      this.spinner.show();
      this.http.delete('https://localhost:44352/api/home/' + id).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Deleted');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }

    
   

    getAllVacciniationCentre(){
      this.spinner.show();
      this.http.get('https://localhost:44352/api/VaccinationCenter/').subscribe((resp:any)=>
      {
        this.spinner.hide();
        this.centertitlecoordinate= [resp.centername];
        this.allVacciniationCentre = resp;
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    gettotalCenters(){
      this.spinner.show();
      this.http.get('https://localhost:44352/api/VaccinationCenter/totalCenters').subscribe((resp:any)=>
      {
        this.spinner.hide();
        this.totalCenters = resp;
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    createVacciniationCentre(body:any){
      this.spinner.show();
      this.http.post('https://localhost:44352/api/VaccinationCenter/', body).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Created');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    updateVacciniationCentre(body:any){
      debugger
      this.spinner.show();
      this.http.put('https://localhost:44352/api/VaccinationCenter/', body).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Updated');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      });
    }

    deleteVacciniationCentre(id:number){
      this.spinner.show();
      this.http.delete('https://localhost:44352/api/VaccinationCenter/Delete/' + id).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Deleted');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }

    searchByVacciniationCentre(id:number)
    {
      this.spinner.show();
      this.http.get('https://localhost:44352/api/VaccinationCenter/GetById/' + id).subscribe((resp:any)=>
      {
      this.allVacciniationCentre = [resp];
      this.spinner.hide();  
      this.toastr.success('found SucsessFully');
      },err=>
      {
      this.spinner.hide();
      this.toastr.error(err.message,err.status);
      }
      )
    }
    SearchVaccinationCenter(name:string)
    {
      this.spinner.show();
      this.http.get('https://localhost:44352/api/VaccinationCenter/SearchVaccinationCenter/' + name).subscribe((resp:any)=>
      {
      this.allVacciniationCentre = resp;
      this.spinner.hide();  
      this.toastr.success('found SucsessFully');
      },err=>
      {
      this.spinner.hide();
      this.toastr.error(err.message,err.status);
      }
      )
    }
    getAllAbout(){
      this.spinner.show();
      this.http.get('https://localhost:44352/api/about').subscribe((resp:any)=>
      {
        this.spinner.hide();
        this.allAbout = resp;
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    createAbout(body:any){
      body.imagetitle1 = this.imTitleAbout;
      body.whatimage = this.whImageAbout;
      body.protectimage = this.proImageAbout;
      this.spinner.show();
      this.http.post('https://localhost:44352/api/about', body).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Created');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    uploadImageTitleAbout(file:FormData){
      this.http.post('https://localhost:44352/api/about/UploadImage/imageTitle1', file).subscribe((resp:any)=>{
      this.imTitleAbout = resp.imagetitle1;
      }, err=>
      {
        this.toastr.error('Can\'t Upload Image');
      });
      }
      uploadImageProAbout(file:FormData){
        this.http.post('https://localhost:44352/api/about/UploadImage/protectImage', file).subscribe((resp:any)=>{
        this.proImageAbout = resp.protectimage;
        }, err=>
        {
          this.toastr.error('Can\'t Upload Image');
        });
        }
        uploadImageWhAbout(file:FormData){
          this.http.post('https://localhost:44352/api/about/UploadImage/whatImage', file).subscribe((resp:any)=>{
          this.whImageAbout = resp.whatimage;
          }, err=>
          {
            this.toastr.error('Can\'t Upload Image');
          });
          }
         
    updateAbout(body:any){
      this.spinner.show();
      this.http.put('https://localhost:44352/api/about', body).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Updated');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      });
    }

    deleteAbout(id:number){
      this.spinner.show();
      this.http.delete('https://localhost:44352/api/about/Delete/' + id).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Deleted');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }

    getAllFooter(){
      this.spinner.show();
      this.http.get('https://localhost:44352/api/footer/').subscribe((resp:any)=>
      {
        this.spinner.hide();
        this.allFooter = resp;
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    createFooter(body:any){
     
      this.spinner.show();
      this.http.post('https://localhost:44352/api/footer/', body).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Created');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }

    updateFooter(body:any){
      this.spinner.show();
      this.http.put('https://localhost:44352/api/footer/', body).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Updated');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      });
    }

    deleteFooter(id:number){
      this.spinner.show();
      this.http.delete('https://localhost:44352/api/footer/Delete/' + id).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Deleted');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }

    
}
