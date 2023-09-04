import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { fromJSDate } from "@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar";

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  constructor(private http: HttpClient){

  }

  baseUrl = "https://localhost:7032/api/";
  baseUrl2 = "https://localhost:7032/api/Product/";

  add_carak(form: any){

    return this.http.post(
      this.baseUrl + "Carak/CreateCarak", form
    );
  }

  add_product(form: any){
     form.ProductName = form.ProductName + ""
     form.Supplier = form.Supplier + ""
     form.Phone = form.Phone + ""
     return this.http.post(
       this.baseUrl2 + "CreateProduct", form
     );
  }

  update_carak(data: any , id: number) {
    return this.http.put(
      this.baseUrl + "carak/updateCarak?id=" + id , data , {responseType : 'blob'}
    );
  }

  get_all() {
     return this.http.get(
      this.baseUrl + "Carak"
     );
  }

  get_by_id(id: number) {
     return this.http.get(
      this.baseUrl + "Carak/GetCarakById?id=" + id
     );
  }


  getCarakList(){
    return this.http.get(this.baseUrl);

  }

  updateCarak(form: any, id: any) {
    return this.http.put(this.baseUrl + "carak/updateCarak/" + id, form, { responseType: "blob" });
  }

  GetCarakById(id: number) {
    return this.http.get(
      this.baseUrl + "carak/GetCarakById?id=" + id
    );
  }

  getEmpolyeesById(id: any) {
    return this.http.get(
      this.baseUrl + "carak/GetCarakById?id=" + id
    );
  }

  deleteCarak(id:any){
     return this.http.delete(this.baseUrl + "carak/deleteCarak/" + id, {responseType: "text"});
  }

  getDeptList():Observable<any[]>{
     return this.http.get<any>(this.baseUrl + 'Product');
  }


  addProductResponse(form: any) {
    console.log('Error ' ,form.value);

    return this.http.post(this.baseUrl + "carak/CreateCarak/", form ,{ responseType: "blob" });
  }

  // getEmpolyeesById(id: any) {
  //   return this.http.get(
  //     this.baseUrl + "Employee/GetEmpById?id=" + id
  //   );
  // }
}


