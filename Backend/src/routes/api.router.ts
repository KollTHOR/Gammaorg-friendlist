import express from "express";
//import cors from 'cors';
import { friendController } from "../controllers/friendController";

const apiRouter = express.Router()
apiRouter.use(express.json());
//apiRouter.use(cors());

apiRouter.get('', friendController.getAllFriends);
apiRouter.get('/:idOfFriend', friendController.getFriendById);
apiRouter.post('', friendController.addFriend);
apiRouter.put('', friendController.updateFriend);
apiRouter.delete('/:idOfFriend', friendController.deleteFriend);

export default apiRouter