import * as album from './album';
import * as comment from './comment';
import * as  photo from './photo';
import * as  post from './post';
import * as  user from './user';

export default {
  album: { ...album },
  comment: { ...comment },
  photo: { ...photo },
  post: { ...post },
  user: { ...user },
};

export * from './mainLoading';

/**
 * Actions work with api call
 */