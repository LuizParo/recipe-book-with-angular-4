import * as firebase from 'firebase';

export class AuthService {

    signupUser(email: string, password: string): void {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(console.error);
    }

    signinUser(email: string, password: string): void {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(console.log)
            .catch(console.error);
    }
}