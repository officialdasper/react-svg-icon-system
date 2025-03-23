'use client';
import { useEffect, useState, useMemo } from 'react';
import { IconName } from './models';

interface IconCacheItem {
    svg: string;
    isLoading: boolean;
    error: boolean;
}

interface IconCache {
    [key: string]: IconCacheItem;
}

interface LoadingCache {
    [key: string]: Promise<void> | undefined;
}

const iconCache: IconCache = {};
const loadingCache: LoadingCache = {};

export const useIcon = (name: IconName) => {
    const [state, setState] = useState<IconCacheItem>({
        svg: '',
        isLoading: true,
        error: false
    });

    useEffect(() => {
        const loadIcon = async () => {
            if (!name) {
                setState({
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>`,
                    isLoading: false,
                    error: false
                });
                return;
            }

            if (iconCache[name]) {
                setState(iconCache[name]);
                return;
            }

            // Если иконка уже загружается, ждем завершения загрузки
            if (loadingCache[name] !== undefined) {
                await loadingCache[name];
                setState(iconCache[name]);
                return;
            }

            const baseUrl = import.meta.env.BASE_URL || process.env.PUBLIC_URL || '';
            
            loadingCache[name] = (async () => {
                try {
                    const response = await fetch(`${baseUrl}/icons/${name}.svg`.replace(/\/\//g, '/'));
                    if (!response.ok) {
                        throw new Error(`Icon ${name} not found`);
                    }
                    const text = await response.text();
                    
                    const cleanedSvg = text
                        .replace(/<svg[^>]*>/, (match) => {
                            const viewBox = match.match(/viewBox="[^"]*"/);
                            const hasFillNone = match.includes('fill="none"');
                            return `<svg xmlns="http://www.w3.org/2000/svg" ${viewBox ? viewBox[0] : 'viewBox="0 0 24 24"'}${hasFillNone ? ' fill="none"' : ''}>`;
                        })
                        .replace(/fill="[^"]*"/g, (match) => {
                            return match === 'fill="none"' ? match : 'fill="currentColor"';
                        })
                        .replace(/stroke="[^"]*"/g, 'stroke="currentColor"');
                    
                    const newState = {
                        svg: cleanedSvg,
                        isLoading: false,
                        error: false
                    };
                    
                    iconCache[name] = newState;
                    setState(newState);
                } catch (error) {
                    console.error(`Error loading icon ${name}:`, error);
                    const errorState = {
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>`,
                        isLoading: false,
                        error: true
                    };
                    iconCache[name] = errorState;
                    setState(errorState);
                } finally {
                    delete loadingCache[name];
                }
            })();

            // Ждем завершения загрузки
            await loadingCache[name];
        };

        loadIcon();
    }, [name]);

    return useMemo(() => state, [state]);
};
