import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA

// const users = [
//   { id: 1, name: "Jhon" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "........", userId: 1 },
//   { id: 2, title: "Post 2", body: "........", userId: 1 },
//   { id: 3, title: "Post 3", body: "........", userId: 2 },
//   { id: 4, title: "Post 4", body: "........", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    console.log("posts====", posts);
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
