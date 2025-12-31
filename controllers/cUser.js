import { supabase } from '../connection.js';

export async function addUser(req, res) {
  try {
    await supabase.from('users').insert(req.body);
    return res.status(200).send('User registered successfully');
  } catch (error) {
    console.error({ error: error });
  }
}
export async function checkLogin(req, res) {
  try {
    const { password, username } = req.body;
    const { data: users } = await supabase
      .from('users')
      .select()
      .eq('username', username)
      .eq('password', password);
    if (users.length > 0) {
      return res.status(200).send('User logged');
    }
    return res.status(404).send('User Not Found');
  } catch (error) {
    console.error({ error: error });
  }
}
