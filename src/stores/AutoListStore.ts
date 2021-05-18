import {observable, action, makeAutoObservable, computed} from "mobx"
import {IStores} from "./index";
import { db } from "../config/firebaseApp";

export interface IDataCar {
    id?: string;
    name?: string;
    type?: string;
    car?: string;
}

export class AutoListStore {

    @observable autoData: IDataCar[] = []
    @observable errorData: object = {}

    constructor(stores: IStores) {
        makeAutoObservable(this)
    }

    @action getAllAuto(){
        db.collection('auto_shop')
            .get()
            .then((item)=>{
                item.forEach(doc => {
                    this.autoData.push(doc.data())
                })
            })
            .catch(error => {
                console.log('error', error)
            })
        }
}