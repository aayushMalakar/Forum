import { LOAD_COMMENTS, INIT_LOAD_COMMENTS } from "./constant";

export const initLoadComments = comments => ({
  type: INIT_LOAD_COMMENTS,
  comments
});

export const loadComments = comments => ({
  type: LOAD_COMMENTS,
  comments
});
