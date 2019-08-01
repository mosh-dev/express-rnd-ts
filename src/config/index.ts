require('dotenv').config();

import {connect} from 'mongoose';


export function configure(): Promise<any> {
  // Set up default mongoose connection
  const mongoDB = 'mongodb://127.0.0.1/testDb';
  return connect(mongoDB, {useNewUrlParser: true})
    .catch(console.log);
}
