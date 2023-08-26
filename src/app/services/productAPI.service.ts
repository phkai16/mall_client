import { Injectable } from "@angular/core";
import { BaseUrlService } from "./baseUrl.service";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
@Injectable()
export class ProductAPIService{
    constructor(
        private baseUrlServiceL: BaseUrlService,
        private httpClient: HttpClient
    ){}
    async findAll(){
        return await lastValueFrom(this.httpClient.get(this.baseUrlServiceL.getBaseUrl()
        + 'product/findAll'));
    }
    async findByName(name: string){
        return await lastValueFrom(this.httpClient.get(this.baseUrlServiceL.getBaseUrl()
        + 'product/findByName/' + name));
    }

}