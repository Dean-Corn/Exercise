export class User {
    Name: string;
    Bio: string;
    Pic: string;
}
export class Log {
    Date: string;
    ExerciseType: string;
    TimeExercised: number;

}
export class Exercise {
    Users: User[] = [];
    Logs: Log[] = [];
}
