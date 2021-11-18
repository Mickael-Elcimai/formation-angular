export class LoginResponseDto {
  constructor(
    public id: string,
    public ttl: number,
    public created: Date,
    public userId: number
  ) {
  }
}
;


