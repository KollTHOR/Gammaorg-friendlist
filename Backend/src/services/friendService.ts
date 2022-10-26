import { AddFriendRequestModel } from '../models/AddFriendRequestModel';
import { FriendDomainModel } from '../models/FriendDomainModel'
import { UpdateFriendRequestModel } from '../models/UpdateFriendRequestModel';
import { friendRepository } from '../repository/friend.repository'

export const friendService = {
  async getAllFriends(): Promise<FriendDomainModel[]> {
    return await friendRepository.getAllFriends()
  },

  async getFriendById(idOfFriend: number): Promise<FriendDomainModel> {
    const friend = await friendRepository.getFriendsById(idOfFriend);
    console.log(friend)

    if (!friend) {
      throw new Error('No friend found with matching id!')
    }
    return friend;
  },

  async addNewFriend(friend: AddFriendRequestModel): Promise<number> {
    return await friendRepository.addNewFriend(friend);
  },

  async deleteFriend(idOfFriend: number): Promise<void> {
    const friend = await friendRepository.getFriendsById(idOfFriend);

    if (!friend) {
      throw new Error('Cannot delete! No friend found with matching id!')
    }
    await friendRepository.deleteFriend(idOfFriend);
  },

  async updateFriend(friendToUpdate: UpdateFriendRequestModel): Promise<void> {
    const friend = await friendRepository.getFriendsById(friendToUpdate.idOfFriend);

    if (!friend) {
      throw new Error('No friend found with matching id!');
    }
    await friendRepository.updateFriendById(friendToUpdate);
  },
}

