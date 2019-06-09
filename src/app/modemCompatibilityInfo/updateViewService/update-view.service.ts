import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UpdateInfoModel } from '../updateInfoDetail/update.info'


@Injectable({
  providedIn: 'root'
})
export class UpdateViewService {
  //private updateInfo = new BehaviorSubject<any>('');
  private updateInfo: BehaviorSubject<UpdateInfoModel[]> = new BehaviorSubject([]);
  cast: Observable<UpdateInfoModel[]> = this.updateInfo.asObservable();
  // cast = this.updateInfo.asObservable();

  constructor() { }

  editUpdate(newUpdate){
    this.updateInfo.next(newUpdate);
  }
}
