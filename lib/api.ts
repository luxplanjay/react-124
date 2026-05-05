import axios from "axios";

export const nextServer = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

// localhost:3000 > GET localhost:300/api/notes
export const getNotes = async (categoryId?: string) => {
  // GET localhost:300/api/notes
  const res = await nextServer.get<NoteListResponse>("/notes", {
    params: { categoryId },
  });
  return res.data;
};

// localhost:3000 > locahost:3000/api/notes/:noteId
export const getSingleNote = async (id: string) => {
  const res = await nextServer.get<Note>(`/notes/${id}`);
  return res.data;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

// localhost:3000 > locahost:3000/api/categories
export const getCategories = async () => {
  const res = await nextServer.get<Category[]>("/categories");
  return res.data;
};

export type NewNoteData = {
  title: string;
  content: string;
  categoryId: string;
};

// localhost:300 > POST localhost:3000/api/notes
export const createNote = async (data: NewNoteData) => {
  const res = await nextServer.post<Note>("/notes", data);
  return res.data;
};

// AUTH
export type RegisterRequest = {
  email: string;
  password: string;
  userName: string;
};

export type User = {
  id: string;
  email: string;
  userName?: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

// localhost:300 > POST localhost:3000/api/auth/register
export const register = async (data: RegisterRequest) => {
  const res = await nextServer.post<User>("/auth/register", data);
  return res.data;
};

export type LoginRequest = {
  email: string;
  password: string;
};

// localhost:300 > POST localhost:3000/api/auth/login
export const login = async (data: LoginRequest) => {
  const res = await nextServer.post<User>("/auth/login", data);
  return res.data;
};
