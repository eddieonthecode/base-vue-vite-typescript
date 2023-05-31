export interface ServiceResponse<Entity> {
    Success: boolean;
    Data: Entity;
    ValidateInfo: object;
    Code?: string;
    ServerTime?: string;
}