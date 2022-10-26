import { RelationshipStatusTypes } from '../models/Enums/RelationshipStatusTypes';

export interface FriendDomainModel {
  id: number;
  name: string;
  email: string;
  comment: string;
  favFood: string;
  relationshipStatus: RelationshipStatusTypes;
}