const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(process.cwd(), 'public/icons');
const OUTPUT_FILE = path.join(process.cwd(), 'src/components/icon/models.ts');

function generateIconTypes(): void {
    // Получаем список всех SVG файлов
    const files = fs.readdirSync(ICONS_DIR)
        .filter((file: string) => file.endsWith('.svg'))
        .map((file: string) => file.replace('.svg', ''));

    // Генерируем содержимое файла с типами
    const content = `// This file is auto-generated. Do not edit it manually
export const ICON_TYPE_NAMES = [
    ${files.map((name: string) => `'${name}'`).join(',\n    ')}
] as const;

export type IconName = typeof ICON_TYPE_NAMES[number];

export interface IconProps {
    name: IconName;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    colorScheme?: 'primary' | 'secondary' | 'white';
}
`;

    // Записываем файл
    fs.writeFileSync(OUTPUT_FILE, content);
    console.log('Icon types generated successfully!');
}

generateIconTypes();
