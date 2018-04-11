import { Model, Column, Table, CreatedAt, UpdatedAt, DataType, PrimaryKey } from "sequelize-typescript";
@Table({
  tableName: "users",
})
export class Users2 extends Model<Users2> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
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