import {connect} from 'mongoose';

export function configure(): Promise<any> {
  // Set up default mongoose connection
  return connect(process.env.DATABASE_URL || '', {useNewUrlParser: true})
    .catch(console.log);
}
