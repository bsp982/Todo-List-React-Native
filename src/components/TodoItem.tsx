import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Todo } from '../types/todo';
import { useTheme } from '../contexts/ThemeContext';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.surface,
      borderRadius: 16,
      marginBottom: 12,
      shadowColor: theme.shadow.color,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: theme.shadow.opacity,
      shadowRadius: 3,
      elevation: 2,
    },
    contentContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    checkbox: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: theme.checkbox.border,
      marginRight: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkboxChecked: {
      backgroundColor: theme.checkbox.checked,
    },
    checkmark: {
      color: theme.checkbox.checkmark,
      fontSize: 14,
      fontWeight: 'bold',
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      color: theme.text.primary,
      marginBottom: 4,
    },
    titleCompleted: {
      color: theme.text.disabled,
      textDecorationLine: 'line-through',
    },
    date: {
      fontSize: 12,
      color: theme.text.secondary,
    },
    deleteButton: {
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    deleteText: {
      color: theme.delete,
      fontSize: 24,
      fontWeight: '300',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.contentContainer}
        onPress={() => onToggle(todo.id, !todo.completed)}
      >
        <View style={[styles.checkbox, todo.completed && styles.checkboxChecked]}>
          {todo.completed && (
            <Text style={styles.checkmark}>✓</Text>
          )}
        </View>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              todo.completed && styles.titleCompleted,
            ]}
            numberOfLines={2}
          >
            {todo.title}
          </Text>
          <Text style={styles.date}>
            {new Date(todo.createdAt).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(todo.id)}
      >
        <Text style={styles.deleteText}>×</Text>
      </TouchableOpacity>
    </View>
  );
} 