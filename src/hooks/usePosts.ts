"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  query, 
  orderBy 
} from "firebase/firestore";

export interface Post {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  image: string;
  createdAt: any;
}

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Post[];
      setPosts(postsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addPost = async (post: Omit<Post, "id">) => {
    return await addDoc(collection(db, "posts"), {
      ...post,
      createdAt: new Date()
    });
  };

  const updatePost = async (id: string, post: Partial<Post>) => {
    const postRef = doc(db, "posts", id);
    return await updateDoc(postRef, post);
  };

  const deletePost = async (id: string) => {
    const postRef = doc(db, "posts", id);
    return await deleteDoc(postRef);
  };

  return { posts, loading, addPost, updatePost, deletePost };
}
