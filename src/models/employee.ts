import { EmployeeGenderEnum } from "./enum";

export interface Employee {
    /**
     * Họ và tên
     */
    FullName: string;
    /**
     * Ngày sinh
     */
    DateOfBirth: string;
    /**
     * Giới tính
     */
    Gender: EmployeeGenderEnum;
    /**
     * Địa chỉ
     */
    Address: string;
}