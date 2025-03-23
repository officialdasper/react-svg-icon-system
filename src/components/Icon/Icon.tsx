'use client';

import { FC, memo } from 'react';
import { useIcon } from './hook';
import { IconProps } from './models';
import styles from './Icon.module.scss';
import clsx from 'clsx';

const IconComponent: FC<IconProps> = memo(({ name, className, size = 'md', colorScheme }) => {
    const { svg, isLoading, error } = useIcon(name);

    if (isLoading) {
        return (
            <span
                className={clsx(
                    styles.icon,
                    styles[`icon--${size}`],
                    styles[`icon--${colorScheme}`],
                    className
                )}
            >
                <div className={styles.loading} />
            </span>
        );
    }

    return (
        <span
            className={clsx(
                styles.icon,
                styles[`icon--${size}`],
                styles[`icon--${colorScheme}`],
                error && styles['icon--error'],
                className
            )}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}); 

IconComponent.displayName = 'Icon'
export const Icon = IconComponent
