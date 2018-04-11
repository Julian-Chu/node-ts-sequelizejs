import { Model, Column, Table, CreatedAt, UpdatedAt, DataType, PrimaryKey, AllowNull, AutoIncrement } from "sequelize-typescript";
@Table({
  tableName: "users4",
})
export class Users2 extends Model<Users2> {
  @PrimaryKey
  @AllowNull
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    field: "id"
  })
  public id: number;
  @Column(DataType.STRING)
  public name: string;
  @Column({
    type: DataType.STRING,
    field: "user_password"
  })
  public password: string;
}