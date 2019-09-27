export class SignUp {
  constructor(
    public fullName: string = null,
    public email: string = null,
    public password: string = null,
    public retypedPassword = null,
    public terms: boolean = false
  ) {}
}
