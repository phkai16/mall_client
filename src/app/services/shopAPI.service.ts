import { Injectable } from "@angular/core";
import { BaseUrlService } from "./baseUrl.service";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
@Injectable()
export class ShopAPIService{
    constructor(
        private baseUrlServiceL: BaseUrlService,
        private httpClient: HttpClient
    ){}
    async findByCategoryID(categoryID: number){
        return await lastValueFrom(this.httpClient.get(this.baseUrlServiceL.getBaseUrl()
        + 'shop/findByCategoryID/' + categoryID));
    }

}