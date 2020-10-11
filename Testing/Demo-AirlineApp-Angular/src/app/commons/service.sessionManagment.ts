import { Inject, Injectable } from '@angular/core';
//import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({ providedIn: 'root' })
export class SessionManagent {
    public data: any = []
    constructor(private storage: LocalStorageService) { }

    saveInLocal(key, val): void {
        this.storage.store(key, val);
        this.data[key] = this.storage.retrieve(key);
    }
    getFromLocal(key): void {
        this.data[key] = this.storage.retrieve(key);
    }

    removeFromLocal() {
        this.storage.clear;
    }
    get isLoggedin(){
        if(this.data['currentUser']!=null){
            return true;
        }
        else{
            return false;
        }
    }

}