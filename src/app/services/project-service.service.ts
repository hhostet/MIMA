import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';

export interface Post {
  author: string; 
  date: Date;
  desc: string;
  effect: string;
  skillUsed: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  private posts: Observable<Post[]>;
  private postCollection:AngularFirestoreCollection<Post>;

  constructor(private afs:AngularFirestore) {

    this.postCollection = this.afs.collection<Post>('posts');
    this.posts = this.postCollection.valueChanges();
    
/*     this.postCollection = this.afs.collection<Post>("posts");
    this.posts = this.postCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a=> {
          //gets what inside a doc
          const data = a.payload.doc.data();
          //auth usr and get id 
          const id= a.payload.doc.id;
          return {id, ...data};
        });
      })
    ); */
   }

   getPosts():Observable<Post[]> {
     return this.posts;
   }

/*    getProject(id: string):Observable<Post> {
     return this.postCollection.doc<Post>(id).valueChanges().pipe(
       take(1),
       map(project => {
         project.date = date;
         return project;
       })
      )
   } */
/* 
   addProject(project: Project): Promise<DocumentReference> {
     return this.projectCollection.add(project);
   }

   updateProject(project: Project): Promise<void> {
     return this.projectCollection
     .doc(project.id)
     .update({skill_used: project.skill_used, description: project.description, effect: project.effect, time: project.time, date: project.date, location: project.location });
   }

   deleteProject(id:string):Promise<void> {
     return this.projectCollection.doc(id).delete();
   } */
}
