'use client';

import { FC, memo } from 'react';
import { useIcon } from './hook';
import { IconProps } from './models';
import styles from './Icon.module.scss';
import clsx from 'clsx';

export const Icon: FC<IconProps> = memo(({ name, className, size = 'md', colorScheme = 'primary' }) => {
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