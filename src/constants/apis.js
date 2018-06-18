const PREFIX_API = 'https://jsonplaceholder.typicode.com';


export const API_GET_USER = `${PREFIX_API}/users/:id`;
export const API_GET_USER_LIST = `${PREFIX_API}/users`;

export const API_GET_POST = `${PREFIX_API}/posts/:id`;
export const API_GET_POST_LIST = `${PREFIX_API}/posts`;
export const API_GET_POST_COMMENTS = `${PREFIX_API}/posts/:id/comments`;
export const API_NEW_POST = `${PREFIX_API}/posts`;
export const API_EDIT_POST = `${PREFIX_API}/posts/:id`;
export const API_DELETE_POST = `${PREFIX_API}/posts/:id`;

export const API_GET_ALBUM = `${PREFIX_API}/albums/:id`;
export const API_GET_ALBUM_LIST = `${PREFIX_API}/albums`;
export const API_GET_ALBUM_PHOTOS = `${PREFIX_API}/albums/:id/photos`;


export const API_GET_PHOTO = `${PREFIX_API}/photos/:id`;

export const API_NEW_COMMENT = `${PREFIX_API}/comments`;
export const API_EDIT_COMMENT = `${PREFIX_API}/comments/:id`;
export const API_DELETE_COMMENT = `${PREFIX_API}/comments/:id`;