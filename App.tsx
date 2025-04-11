import React from 'react';
import { SafeAreaView, ScrollView, View, Text, ActivityIndicator, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useTodos } from './src/hooks/useTodos';
import { TodoForm } from './src/components/TodoForm';
import { TodoItem } from './src/components/TodoItem';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

function TodoApp() {
  const { todos, loading, error, addTodo, toggleTodo, deleteTodo } = useTodos();
  const { theme, toggleTheme, isDark } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    content: {
      flex: 1,
      padding: 24,
      maxWidth: 800,
      width: '100%',
      alignSelf: 'center',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 32,
    },
    headerLeft: {
      flex: 1,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.text.primary,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: theme.text.secondary,
    },
    themeButton: {
      padding: 8,
    },
    errorContainer: {
      backgroundColor: theme.error,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
    },
    errorText: {
      color: '#FFFFFF',
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
      color: theme.text.primary,
      marginBottom: 8,
    },
    emptySubtext: {
      fontSize: 16,
      color: theme.text.secondary,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>Minhas Tarefas</Text>
            <Text style={styles.subtitle}>
              {todos.length} {todos.length === 1 ? 'tarefa' : 'tarefas'}
            </Text>
          </View>
          <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
            <Ionicons 
              name={isDark ? 'sunny' : 'moon'} 
              size={24} 
              color={theme.text.primary}
            />
          </TouchableOpacity>
        </View>
        
        <TodoForm onSubmit={addTodo} />
        
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={theme.primary} />
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

export default function App() {
  return (
    <ThemeProvider>
      <TodoApp />
    </ThemeProvider>
  );
}
