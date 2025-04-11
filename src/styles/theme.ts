export const themes = {
  light: {
    background: '#F3F4F6',
    surface: '#FFFFFF',
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
      disabled: '#9CA3AF',
    },
    primary: '#3B82F6',
    error: '#DC2626',
    delete: '#EF4444',
    border: '#E5E7EB',
    checkbox: {
      border: '#3B82F6',
      checked: '#3B82F6',
      checkmark: '#FFFFFF',
    },
    shadow: {
      color: '#000000',
      opacity: 0.05,
    },
  },
  dark: {
    background: '#111827',
    surface: '#1F2937',
    text: {
      primary: '#F9FAFB',
      secondary: '#9CA3AF',
      disabled: '#6B7280',
    },
    primary: '#60A5FA',
    error: '#EF4444',
    delete: '#F87171',
    border: '#374151',
    checkbox: {
      border: '#60A5FA',
      checked: '#60A5FA',
      checkmark: '#F9FAFB',
    },
    shadow: {
      color: '#000000',
      opacity: 0.2,
    },
  },
} as const;

export type Theme = typeof themes.light;
export type ThemeType = keyof typeof themes; 