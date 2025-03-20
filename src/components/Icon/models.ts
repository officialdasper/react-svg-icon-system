// This file is auto-generated. Do not edit it manually
export const ICON_TYPE_NAMES = [
    'info',
    'settings',
    'unavailable'
] as const;

export type IconName = typeof ICON_TYPE_NAMES[number];

export interface IconProps {
    name: IconName;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    colorScheme?: 'primary' | 'secondary' | 'white';
}
