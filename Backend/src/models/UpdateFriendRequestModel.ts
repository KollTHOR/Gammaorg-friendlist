import { RelationshipStatusTypes } from '../models/Enums/RelationshipStatusTypes';

export interface UpdateFriendRequestModel {
  idOfFriend: number;
  name: string;
  email: string;
  comment: string;
  favFood: string;
  relationshipStatus: RelationshipStatusTypes;
}