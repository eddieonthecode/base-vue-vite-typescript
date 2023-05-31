import { PagingResponse, ServiceResponse } from "../../models/common";
import { axiosIns } from "./base-api-config";

export class BaseAPI<Entity> {
    constructor() {

    }

    controller: string = "";

    /**
     * Hàm lấy tất cả
     */
    GetAll() : Promise<ServiceResponse<PagingResponse<Entity>>> {
        return axiosIns.get('/' + this.controller + '/all');
    }

    /**
     * Hàm lấy 1 theo id
     */
    GetOne(id : any) : Promise<ServiceResponse<Entity>> {
        return axiosIns.get('/' + this.controller + '/' + id);
    }
}