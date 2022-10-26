import { db } from '../data/connection';
import { AddFoodRequestModel } from '../models/AddFoodRequestModel';
import IDbResultDataModel from '../models/IDbResultDataModel';

export const foodRepository = {
  async addNewFood(food: AddFoodRequestModel): Promise<number> {
    const newFood = await db.query<IDbResultDataModel>(
      `INSERT INTO foods (name, idOfFriend) VALUES (?,?)`,
      [
        food.favFood,
        `${food.idOfFriend}`
      ],
    );
    return newFood.insertId
  }
}