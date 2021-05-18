import { observable, action, makeAutoObservable} from "mobx"
import {IStores} from "./index";
import {auth} from "../config/firebaseApp";

interface IError {
    message?: string,
}

export class UserAuthStore {
    @observable userSession: object | null = {}
    @observable error: IError = {}

    constructor(stores: IStores) {
        makeAutoObservable(this)
    }

    @action signIn(login: string, userPassword: string) {
        if (login != null && userPassword != null) {
            auth.signInWithEmailAndPassword(login, userPassword)
                .then(user=> {
                    this.userSession = user
                })
                .catch(error => {
                    this.error = error
                });
        }
    }

    @action signUp(login: string, userPassword: string){
        if (login != null && userPassword != null) {
            auth.createUserWithEmailAndPassword(login, userPassword)
                .then(user => {
                    this.userSession = user
                })
                .catch(error => {
                    this.error = error
                });
        }
    }

    @action signOut(){
        auth.signOut()
            .then(()=>{
                this.userSession = null
                this.clearError()
            })
            .catch(error => {
                this.error = error
            });
    }

    @action.bound
    public clearError() {
        this.error = {}
    }
}