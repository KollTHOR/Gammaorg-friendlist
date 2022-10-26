import { NextFunction, Request, Response } from 'express';
import { AddFriendRequestModel } from '../models/AddFriendRequestModel';
import { AddFriendViewModel } from '../models/AddFriendViewModel';
import { FriendDomainModel } from '../models/FriendDomainModel';
import { friendService } from '../services/friendService'
import { foodService } from '../services/foodService'
import { UpdateFriendRequestModel } from '../models/UpdateFriendRequestModel';

export const friendController = {
  async getAllFriends(
    _req: Request,
    res: Response<FriendDomainModel[]>,
    next: NextFunction,
  ) {
    await friendService
      .getAllFriends()
      .then(friendList => {
        return res.status(200).json(friendList);
      })
      .catch(err => {
        console.log(err)
        next(err)
        return
      })
  },

  async getFriendById(
    req: Request,
    res: Response<FriendDomainModel>,
    next: NextFunction,
  ) {
    const { idOfFriend } = req.params;

    await friendService
     .getFriendById(+idOfFriend)
     .then(friend => {
       return res.status(200).json(friend);
     })
     .catch(err => {
      console.log(err)
      next(err)
      return
    })
  },

  async addFriend(
    req: Request<AddFriendRequestModel>,
    res: Response<AddFriendViewModel>,
    next: NextFunction,
  ) {
    const { name, email, comment, favFood, relationshipStatus } = req.body;

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return next({
        message: 'Email address not valid',
        statusCode: 400,
      });
    }

    if (name.length < 4) {
      return next({
        message: 'Name must be at least 4 characters',
        statusCode: 400,
      });
    }

    if (comment.length > 30) {
      return next({
        message: 'Comments cannot exceed 30 characters',
        statusCode: 400,
      });
    }

    const friend = {
      name,
      email,
      comment,
      favFood,
      relationshipStatus,
    }

    const idOfFriend = await friendService.addNewFriend(friend)

    await foodService
      .addFood({favFood, idOfFriend})
      .then(() => {
        return res.status(201)
      })
      .catch(err => {
        console.log(err)
        next(err)
        return
      })
  },

  async updateFriend(
    req: Request<AddFriendRequestModel>,
    res: Response,
    next: NextFunction,
  ) {
    const { idOfFriend, name, email, comment, favFood, relationshipStatus } = req.body;

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return next({
        message: 'Email address not valid',
        statusCode: 400,
      });
    }

    if (name.length < 4) {
      return next({
        message: 'Name must be at least 4 characters',
        statusCode: 400,
      });
    }

    if (comment.length > 30) {
      return next({
        message: 'Comments cannot exceed 30 characters',
        statusCode: 400,
      });
    }

    const friendToBeUpdated: UpdateFriendRequestModel = {
      idOfFriend,
      name,
      email,
      comment,
      favFood,
      relationshipStatus,
    }

    await friendService
      .updateFriend(friendToBeUpdated)
      .then(() => {
        res.status(200).send()
      })
      .catch(err => {
        console.log(err)
        next(err)
        return
      })
  },

  async deleteFriend(
    req: Request<UpdateFriendRequestModel>,
    res: Response,
    next: NextFunction,
  ) {
    const { idOfFriend } = req.params;

    await friendService
      .deleteFriend(Number(idOfFriend))
      .then(() => {
        res.status(200).send()
      })
      .catch(err => {
        console.log(err)
        next(err)
        return
      })
  }
}