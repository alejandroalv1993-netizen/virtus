"use client";

import { useAuth } from "@/hooks/useAuth";
import { usePosts, Post } from "@/hooks/usePosts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus, Trash2, Edit3, LogOut, Loader2 } from "lucide-react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

export default function AdminDashboard() {
  const { user, loading: authLoading } = useAuth();
  const { posts, loading: postsLoading, addPost, deletePost, updatePost } = usePosts();
  const router = useRouter();
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<Post>>({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    category: "Historia",
    image: ""
  });

  if (authLoading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;
  
  if (!user) {
    router.push("/admin");
    return null;
  }

  const handleSignOut = () => {
    signOut(auth);
    router.push("/admin");
  };

  const handleSave = async () => {
    if (currentPost.id) {
      await updatePost(currentPost.id, currentPost);
    } else {
      await addPost(currentPost as Post);
    }
    setIsEditing(false);
    setCurrentPost({ title: "", slug: "", content: "", excerpt: "", category: "Historia", image: "" });
  };

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de eliminar este post?")) {
      await deletePost(id);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 px-6 pb-24">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h1 className="text-5xl font-black serif mb-2">Dashboard</h1>
            <p className="text-xs uppercase tracking-widest text-accent">Gestión de VIRTUS</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 bg-white text-black px-6 py-3 uppercase text-[10px] font-bold tracking-widest hover:bg-accent hover:text-white transition-all"
            >
              <Plus size={14} /> Nuevo Post
            </button>
            <button 
              onClick={handleSignOut}
              className="flex items-center gap-2 glass px-6 py-3 uppercase text-[10px] font-bold tracking-widest hover:bg-white/10 transition-all"
            >
              <LogOut size={14} /> Salir
            </button>
          </div>
        </div>

        {isEditing ? (
          <div className="glass p-12 max-w-4xl mx-auto mb-24">
            <h2 className="text-2xl serif mb-8">{currentPost.id ? "Editar Post" : "Crear Nuevo Post"}</h2>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Título</label>
                <input 
                  type="text" 
                  value={currentPost.title}
                  onChange={e => setCurrentPost({...currentPost, title: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Slug</label>
                <input 
                  type="text" 
                  value={currentPost.slug}
                  onChange={e => setCurrentPost({...currentPost, slug: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Categoría</label>
                <select 
                  value={currentPost.category}
                  onChange={e => setCurrentPost({...currentPost, category: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-accent"
                >
                  <option value="Historia">Historia</option>
                  <option value="Valores">Valores</option>
                  <option value="Masculinidad">Masculinidad</option>
                  <option value="Tradición">Tradición</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Imagen URL</label>
                <input 
                  type="text" 
                  value={currentPost.image}
                  onChange={e => setCurrentPost({...currentPost, image: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-accent"
                />
              </div>
              <div className="col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Resumen (Excerpt)</label>
                <textarea 
                  value={currentPost.excerpt}
                  onChange={e => setCurrentPost({...currentPost, excerpt: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 p-4 h-24 focus:outline-none focus:border-accent"
                />
              </div>
              <div className="col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Contenido (Markdown soportado)</label>
                <textarea 
                  value={currentPost.content}
                  onChange={e => setCurrentPost({...currentPost, content: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 p-4 h-64 focus:outline-none focus:border-accent"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={handleSave} className="bg-accent text-white px-8 py-4 uppercase text-xs font-bold tracking-widest">Guardar</button>
              <button onClick={() => setIsEditing(false)} className="glass px-8 py-4 uppercase text-xs font-bold tracking-widest">Cancelar</button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {posts.map(post => (
              <div key={post.id} className="glass p-6 flex justify-between items-center group hover:bg-white/5 transition-all">
                <div className="flex items-center gap-6">
                  <img src={post.image} className="w-16 h-16 object-cover bg-white/5" />
                  <div>
                    <h4 className="font-bold serif text-xl">{post.title}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-accent">{post.category} — {post.slug}</p>
                  </div>
                </div>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => { setCurrentPost(post); setIsEditing(true); }} className="p-2 hover:text-accent transition-colors"><Edit3 size={18} /></button>
                  <button onClick={() => handleDelete(post.id!)} className="p-2 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
