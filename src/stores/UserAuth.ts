import { observable, action, makeAutoObservable} from "mobx"
import {IStores} from "./index";
import {auth} from "../config/firebaseApp";
import firebase from "firebase/app";

export class UserAuthStore {
    @observable userSession: firebase.auth.UserCredential | undefined
    @observable error: any

    constructor(stores: IStores) {
        makeAutoObservable(this)
    }

    @action signIn(login: string, userPassword: string) {
        auth.signInWithEmailAndPassword(login, userPassword)
            .then((user: firebase.auth.UserCredential | undefined)=>{
                this.userSession = user
            })
            .catch((error: any) => {
                this.error = error
            });
    }

    @action signUp(login: string, userPassword: string){
        auth.createUserWithEmailAndPassword(login, userPassword)
            .then((user: firebase.auth.UserCredential | undefined)=>{
                this.userSession = user
            })
            .catch((error: any) => {
                this.error = error
            });
    }

    @action signOut(){
        auth.signOut()
            .then(
                this.userSession = undefined
            )
            .catch((error: any) => {
                this.error = error
            });
    }
}