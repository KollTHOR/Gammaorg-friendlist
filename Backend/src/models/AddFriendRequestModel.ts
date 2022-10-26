import { RelationshipStatusTypes } from '../models/Enums/RelationshipStatusTypes';

export interface AddFriendRequestModel {
  name: string;
  email: string;
  comment: string;
  favFood: string;
  relationshipStatus: RelationshipStatusTypes;
}