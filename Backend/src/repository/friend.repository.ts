import { db } from '../data/connection';
import { FriendDomainModel } from '../models/FriendDomainModel'
import { AddFriendRequestModel } from '../models/AddFriendRequestModel'
import { OkPacket } from 'mysql';
import { UpdateFriendRequestModel } from '../models/UpdateFriendRequestModel'

export const friendRepository = {
  async getAllFriends(): Promise<FriendDomainModel[]> {
    return await db.query<FriendDomainModel[]> (
      `SELECT * FROM friends`,[]
    )
  },

  async getFriendsById(idOfFriend: number): Promise<FriendDomainModel> {
    const friends = await db.query<FriendDomainModel[]> (
      `SELECT * FROM friends WHERE id = ?`,[idOfFriend.toString()]
    )
    console.log(friends)
    return friends[0]
  },

  async addNewFriend(friend: AddFriendRequestModel): Promise<number> {
    const { name, email, comment, favFood, relationshipStatus } = friend 

    const result = await db.query<OkPacket>(
      `INSERT INTO friends (name, email, comment, favFood, relationshipStatus) VALUES (?,?,?,?,?)`
      ,[
      name,
      email, 
      comment, 
      favFood, 
      relationshipStatus.toString()
    ])

    return result.insertId
  },

  async deleteFriend(idOfFriend: number): Promise<void> {
    return await db.query<void>(`DELETE FROM friends WHERE id = ?`, [idOfFriend.toString()]) 
  },

  async updateFriendById(friend: UpdateFriendRequestModel): Promise<void> {
    return await db.query<void>(`UPDATE friends SET name =?, email =?, comment =?, favFood =?, relationshipStatus =? WHERE id =?`, [
      friend.name,
      friend.email,
      friend.comment,
      friend.favFood,
      friend.relationshipStatus.toString(),
      friend.idOfFriend.toString(),
    ])
  }
}

