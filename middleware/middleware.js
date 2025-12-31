import { supabase } from '../connection.js';

export async function checkUserExist(req, res, next) {
  try {
    const { username, password } = req.headers;
    const { data: users } = await supabase
      .from('users')
      .select()
      .eq('username', username)
      .eq('password', password);
    if (users.length > 0) {
      return next();
    }
    return res.status(401).send('User Not Found');
  } catch (error) {
    console.error({ error: error });
  }
}

export async function checkBody(req, res, next) {
  try {
    const { username, password } = req.body;
    if (username && password) {
      return next();
    }
    return res.status(401).send('Invalid Body');
  } catch (error) {
    console.error({ error: error });
  }
}

// export function checkMessage(req, res, next) {
//   const body = req.body;
//   if (!body.userId && !body.username && !body.content) {
//     res.status(401).send('Body unauthorized');
//   } else {
//     next();
//   }
// }
