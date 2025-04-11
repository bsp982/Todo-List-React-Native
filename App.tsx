import React from 'react';
import { SafeAreaView, ScrollView, View, Text, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { useTodos } from './src/hooks/useTodos';
import { TodoForm } from './src/components/TodoForm';
import { TodoItem } from './src/components/TodoItem';

export default function App() {
  const { todos, loading, error, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Minhas Tarefas</Text>
          <Text style={styles.subtitle}>
            {todos.length} {todos.length === 1 ? 'tarefa' : 'tarefas'}
          </Text>
        </View>
        
        <TodoForm onSubmit={addTodo} />
        
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#3B82F6" />
          </View>
        ) : (
          <ScrollView 
            style={styles.scrollView}
            showsVerticalScrollIndicator={Platform.OS === 'web'}
          >
            {todos.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>
                  Você ainda não tem nenhuma tarefa
                </Text>
                <Text style={styles.emptySubtext}>
                  Adicione uma nova tarefa acima
                </Text>
              </View>
            ) : (
              todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  content: {
    flex: 1,
    padding: 24,
    maxWidth: 800,
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  errorContainer: {
    backgroundColor: '#FEE2E2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  errorText: {
    color: '#DC2626',
    fontSize: 14,
  },
  scrollView: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 64,
  },
  emptyText: {
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#6B7280',
  },
});
