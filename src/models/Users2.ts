import { Model, Column, Table, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table
export class Users2 extends Model<Users2> {
  @Column
  name: string;
}