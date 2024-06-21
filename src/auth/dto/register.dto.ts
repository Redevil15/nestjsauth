import { IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class RegisterDto  {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]).{8,}$/, {
        message: 'Password too weak',
    })
    password: string;

    @IsOptional()
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    @Matches(/^\S+$/, { message: 'Name should not contain spaces' })
    name?: string;
}