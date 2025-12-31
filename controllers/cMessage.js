import { connectMongo } from '../connection.js';

export async function createMessage(req, res) {
  try {
    const { userId, username, content } = req.body;
    const message = {
      userId: userId,
      username: username,
      content: content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const db = await connectMongo();
    await db.collection('messages').insertOne(message);
    res.status(200).send('message added');
  } catch (error) {
    console.error(error);
  }
}
export async function createMessage(req, res) {
  try {
    const { userId, username, content } = req.body;
    const message = {
      userId: userId,
      username: username,
      content: content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const db = await connectMongo();
    await db.collection('messages').insertOne(message);
    res.status(200).send('message added');
  } catch (error) {
    console.error(error);
  }
}
