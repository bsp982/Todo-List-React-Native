import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebase';
import { Todo } from '../types/todo';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const q = query(
        collection(db, 'todos'),
        orderBy('createdAt', 'desc')
      );
      
      const unsubscribe = onSnapshot(q, 
        (snapshot) => {
          const todosData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate() || new Date(),
          })) as Todo[];
          
          setTodos(todosData);
          setLoading(false);
          setError(null);
        },
        (error) => {
          console.error('Erro ao carregar tarefas:', error);
          setError('Erro ao carregar tarefas. Por favor, tente novamente.');
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (error) {
      console.error('Erro ao configurar listener:', error);
      setError('Erro ao configurar o monitoramento de tarefas.');
      setLoading(false);
    }
  }, []);

  const addTodo = async (title: string) => {
    try {
      await addDoc(collection(db, 'todos'), {
        title,
        completed: false,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
      setError('Erro ao adicionar tarefa. Por favor, tente novamente.');
    }
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    try {
      const todoRef = doc(db, 'todos', id);
      await updateDoc(todoRef, {
        completed
      });
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
      setError('Erro ao atualizar tarefa. Por favor, tente novamente.');
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const todoRef = doc(db, 'todos', id);
      await deleteDoc(todoRef);
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
      setError('Erro ao deletar tarefa. Por favor, tente novamente.');
    }
  };

  return {
    todos,
    loading,
    error,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
} 