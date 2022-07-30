import {PostType} from "./post";

export interface MetaProps
  extends Pick<PostType, 'date' | 'chapter' | 'description' | 'image' | 'title'>{
    type?: string
  }