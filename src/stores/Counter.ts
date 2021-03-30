import {makeAutoObservable, observable} from "mobx";
import {IStores} from "./index";


export class CounterStore {
    @observable count = ''

    constructor(stores: IStores) {
        makeAutoObservable(this)
    }
    increment(){
        console.log('count', this.count)
        this.count = this.count +'1'
    }
    decrement(event:string){
        this.count = event
    }


}

