# React SVG Icon System

[English](#english) | [Русский](#russian)

<a name="english"></a>
# English

A system for working with SVG icons in React applications.
Supports automatic type generation from the icons directory and SVG caching.

## Features

- 🔄 Automatic icon caching
- 🚀 Prevention of duplicate requests
- 🎨 Support for various sizes and color schemes
- ⚡ Memoization for performance optimization
- 🔍 Error handling for loading
- 📦 Automatic TypeScript type generation
- 🎯 Support for currentColor for dynamic coloring
- ⚙️ TypeScript and Next.js

## Installation

```bash
npm install
```

## Usage

```tsx
import { Icon } from '@/components/Icon';

// Basic usage
<Icon name="settings" />

// With size specification
<Icon name="settings" size="sm" />

// With color specification
<Icon name="settings" colorScheme="primary" />

// Combined usage
<Icon 
  name="settings" 
  size="lg" 
  colorScheme="secondary" 
  className="custom-class" 
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | IconName | - | Icon name |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Icon size (16px, 24px, 32px) |
| colorScheme | 'primary' \| 'secondary' \| 'white' | 'primary' | Color scheme |
| className | string | - | Additional CSS classes |

## Development

### Project Structure

```
├── public/
│   └── icons/          # Directory with SVG icons
├── scripts/
│   └── generate-icon-types.ts # Type generation script
└── src/
    └── components/
        └── Icon/
            ├── Icon.tsx           # Main component
            ├── Icon.module.scss   # Component styles
            ├── models.ts          # Auto-generated types
            ├── hook.ts            # Hook for working with icons
            └── index.ts           # Exports
```

### Adding New Icons

1. Add the SVG icon file to the `public/icons/` directory
2. Run the command to generate types:
```bash
npm run icons
```

### Scripts

- `npm run dev` - run in development mode
- `npm run build` - build project
- `npm run start` - run built project
- `npm run icons` - generate types from icons directory
- `npm run lint` - code linting

## How It Works

1. On first icon request, a Promise is created for loading
2. Subsequent requests for the same icon use cached data
3. SVG is cleaned of unnecessary attributes and optimized
4. Dynamic color change is supported via currentColor
5. On loading error, an empty SVG is displayed while maintaining dimensions
6. During loading, an empty SVG is displayed while maintaining dimensions

## License

MIT

---

<a name="russian"></a>
# Русский

Система для работы с SVG иконками в React приложениях.
Поддерживает автоматическую генерацию типов из директории с иконками и кэширование SVG.

## Особенности

- 🔄 Автоматическое кэширование иконок
- 🚀 Предотвращение дублирования запросов
- 🎨 Поддержка различных размеров и цветовых схем
- ⚡ Мемоизация для оптимизации производительности
- 🔍 Обработка ошибок загрузки
- 📦 Автоматическая генерация TypeScript типов
- 🎯 Поддержка currentColor для динамической окраски
- ⚙️ TypeScript и Next.js

## Установка

```bash
npm install
```

## Использование

```tsx
import { Icon } from '@/components/Icon';

// Базовое использование
<Icon name="settings" />

// С указанием размера
<Icon name="settings" size="sm" />

// С указанием цвета
<Icon name="settings" colorScheme="primary" />

// Комбинированное использование
<Icon 
  name="settings" 
  size="lg" 
  colorScheme="secondary" 
  className="custom-class" 
/>
```

## Пропсы

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|-----------|
| name | IconName | - | Название иконки |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Размер иконки (16px, 24px, 32px) |
| colorScheme | 'primary' \| 'secondary' \| 'white' | 'primary' | Цветовая схема |
| className | string | - | Дополнительные CSS классы |

## Разработка

### Структура проекта

```
├── public/
│   └── icons/          # Директория с SVG иконками
├── scripts/
│   └── generate-icon-types.ts # Скрипт генерации типов
└── src/
    └── components/
        └── Icon/
            ├── Icon.tsx           # Основной компонент
            ├── Icon.module.scss   # Стили компонента
            ├── models.ts          # Автогенерируемые типы
            ├── hook.ts            # Хук для работы с иконками
            └── index.ts           # Экспорты
```

### Добавление новых иконок

1. Добавьте SVG файл иконки в директорию `public/icons/`
2. Запустите команду для генерации типов:
```bash
npm run icons
```

### Скрипты

- `npm run dev` - запуск в режиме разработки
- `npm run build` - сборка проекта
- `npm run start` - запуск собранного проекта
- `npm run icons` - генерация типов из директории с иконками
- `npm run lint` - проверка кода

## Принцип работы

1. При первом запросе иконки создается Promise для загрузки
2. Последующие запросы той же иконки используют кэшированные данные
3. SVG очищается от ненужных атрибутов и оптимизируется
4. Поддерживается динамическая смена цвета через currentColor
5. При ошибке загрузки отображается пустой SVG с сохранением размеров
6. Во время загрузки отображается пустой SVG с сохранением размеров

## Лицензия

MIT
