import { Project } from './project';

export class User {
  key: string;
  name: string;
  bio: string;
  projects: Project[];
  githubLogin: string;
  avatar: string;
}