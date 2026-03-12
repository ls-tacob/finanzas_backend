import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    guardarUsuario(){
        return 'usuario guardado';
    }
}
