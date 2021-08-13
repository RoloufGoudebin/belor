import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private dbPath = "/home";

  cms: AngularFireList<String>;

  constructor(private db: AngularFireDatabase) {
    this.cms = db.list(this.dbPath);
  }

  getAll(): AngularFireList<String> {
    return this.cms;
  }

  create(tutorial: any): any {
    return this.cms.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.cms.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.cms.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.cms.remove();
  }

  setDbPath(dbPath: string){
    this.dbPath = this.dbPath;
  }


}