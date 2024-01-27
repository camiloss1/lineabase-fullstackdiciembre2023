import { User } from "./user";

export class UserInResponse extends User {
    type!: String;
    status!: String;
    isRemoved!: boolean;
    _id!: string;
    createdAt!: String;
    updatedAt!: String
}

export class UserResponse {
    user!: UserInResponse;
}
