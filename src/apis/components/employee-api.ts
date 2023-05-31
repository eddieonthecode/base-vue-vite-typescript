import { Employee } from "@/models";
import { BaseAPI } from "../base/base-api";
import { axiosIns } from "../base/base-api-config";

class _EmployeeAPI extends BaseAPI<Employee> {
   constructor()  {
    super();
    this.controller = "Employee";
   }

   /**
    * Hàm lấy nhân viên đặc biệt
    */
   GetEmployeeSpecial() {
    axiosIns.get('/' + this.controller + '/special');
   }
}

export const EmployeeAPI = new _EmployeeAPI();