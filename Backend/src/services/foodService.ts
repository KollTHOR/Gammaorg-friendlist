import { AddFoodRequestModel } from "../models/AddFoddRequestModel";
import { foodRepository } from '../repository/foods.repository';

export const foodService = {
  async addFood(
    food: AddFoodRequestModel
  ): Promise<void> {
    await foodRepository.addNewFood(food)
  }
}