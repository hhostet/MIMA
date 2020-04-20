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

export interface Exercise{
  exTwo_Zero: string;
  exTwo_One: string;
  exTwo_Two: string;
  exTwo_Three: string;
  exTwo_Four: string;
  exTwo_Five: string;
  exTwo_Six: string;
  exTwo_Seven: string;
  exTwo_Eight: string;
  exTwo_Nine: string;
  exTwo_Ten: string;
  exTwo_Positive: string;
  exTwo_Negative: string;
  exFour_Negative: string;
  exFour_Counter: string;
  exFive_One: string;
}

export interface User {
  username:string;
  timeStamp: Date;

}

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  private posts: Observable<Post[]>;
  private postCollection:AngularFirestoreCollection<Post>;

  private exercises: Observable<Exercise[]>;
  private exerciseCollection:AngularFirestoreCollection<Exercise>;

  private users: Observable<User[]>;
  private userCollection:AngularFirestoreCollection<User>;

  constructor(private afs:AngularFirestore) {

    this.postCollection = this.afs.collection<Post>('posts');
    this.posts = this.postCollection.valueChanges();

    this.exerciseCollection = this.afs.collection<Exercise>('exercises');
    this.exercises = this.exerciseCollection.valueChanges();

    this.userCollection = this.afs.collection<User>('users');
    this.users = this.userCollection.valueChanges();
    
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

   getExercises():Observable<Exercise[]> {
    return this.exercises;
  }

  getUsers():Observable<User[]> {
    return this.users;
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
