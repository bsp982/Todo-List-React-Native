import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

interface TodoFormProps {
  onSubmit: (title: string) => void;
}

export function TodoForm({ onSubmit }: TodoFormProps) {
  const [title, setTitle] = useState('');
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 24,
      gap: 12,
    },
    input: {
      flex: 1,
      height: 50,
      backgroundColor: theme.surface,
      borderRadius: 12,
      paddingHorizontal: 16,
      fontSize: 16,
      color: theme.text.primary,
      ...Platform.select({
        web: {
          outlineStyle: 'none',
        },
      }),
      shadowColor: theme.shadow.color,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: theme.shadow.opacity,
      shadowRadius: 3,
      elevation: 2,
    },
    button: {
      backgroundColor: theme.primary,
      paddingHorizontal: 24,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      shadowColor: theme.primary,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 2,
    },
    buttonDisabled: {
      backgroundColor: theme.border,
      shadowOpacity: 0,
    },
    buttonText: {
      color: theme.surface,
      fontSize: 16,
      fontWeight: '600',
    },
    buttonTextDisabled: {
      color: theme.text.disabled,
    },
  });

  const handleSubmit = () => {
    if (title.trim()) {
      onSubmit(title.trim());
      setTitle('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="O que você precisa fazer?"
        placeholderTextColor={theme.text.disabled}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />
      <TouchableOpacity 
        style={[styles.button, !title.trim() && styles.buttonDisabled]} 
        onPress={handleSubmit}
        disabled={!title.trim()}
      >
        <Text style={[styles.buttonText, !title.trim() && styles.buttonTextDisabled]}>
          Adicionar
        </Text>
      </TouchableOpacity>
    </View>
  );
} 