export class User {
    Name: string;
    Bio: string;
    Pic: string;
}
export class Log {
    Date: string;

}
export class Exercise {
    Users: User[] = [];
    Logs: Log[] = [];
}
