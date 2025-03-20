import { Icon } from '@/components/Icon';
import { ICON_TYPE_NAMES } from '@/components/Icon/models';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Компонент Icon
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Гибкий и настраиваемый компонент для отображения иконок с поддержкой различных размеров и цветовых схем
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Размеры иконок */}
          <section className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Размеры иконок</h2>
            <div className="flex gap-8 items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <Icon name="settings" size="sm" />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-600">Small</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <Icon name="settings" size="md" />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-600">Medium</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <Icon name="settings" size="lg" />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-600">Large</span>
              </div>
            </div>
          </section>

          {/* Цветовые схемы */}
          <section className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Цветовые схемы</h2>
            <div className="flex gap-8 items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <Icon name="info" colorScheme="primary" />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-600">Primary</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <Icon name="info" colorScheme="secondary" />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-600">Secondary</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-900 p-4 rounded-xl">
                  <Icon name="info" colorScheme="white" />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-600">White</span>
              </div>
            </div>
          </section>
        </div>

        {/* Примеры использования */}
        <section className="mt-12 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Примеры использования</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Пример 1: Кнопка с иконкой */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Кнопка с иконкой</h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <Icon name="settings" colorScheme="white" size="sm" />
                <span>Настройки</span>
              </button>
            </div>

            {/* Пример 2: Карточка с иконкой */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Карточка с иконкой</h3>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <Icon name="info" colorScheme="primary" size="lg" />
                <div>
                  <h4 className="font-medium text-gray-900">Информационное сообщение</h4>
                  <p className="text-sm text-gray-600 mt-1">Это пример использования иконки в карточке</p>
                </div>
              </div>
            </div>

            {/* Пример 3: Навигационное меню */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Навигационное меню</h3>
              <nav className="space-y-2">
                <a href="#" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <Icon name="settings" colorScheme="secondary" size="md" />
                  <span>Настройки</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <Icon name="info" colorScheme="secondary" size="md" />
                  <span>Информация</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <Icon name="unavailable" colorScheme="secondary" size="md" />
                  <span>Недоступно</span>
                </a>
              </nav>
            </div>

            {/* Пример 4: Статус с иконкой */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Статус с иконкой</h3>
              <div className="flex items-center gap-2">
                <Icon name="info" colorScheme="primary" size="sm" />
                <span className="text-sm text-gray-600">Информационное сообщение</span>
              </div>
            </div>
          </div>
        </section>

        {/* Галерея иконок */}
        <section className="mt-12 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Доступные иконки</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {ICON_TYPE_NAMES.map((iconName) => (
              <div 
                key={iconName} 
                className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="bg-gray-50 p-3 rounded-lg">
                  <Icon name={iconName} />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-600 text-center break-words">
                  {iconName}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
