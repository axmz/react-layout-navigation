import { ComponentPropsWithRef, HTMLAttributes, ElementType } from "react";
export declare type WithLevel<K = HTMLElement> = {
    dataset: {
        level: string;
    };
    tabIndex: number;
} & K;
export declare type WithAttributes<T extends HTMLElement> = {
    "data-level": number;
    preventDefault: boolean;
    stopPropagation: boolean;
} & HTMLAttributes<T>;
export declare type Props = {
    callback?: (e: any) => void;
    component?: string;
    shortcut: string;
} & ComponentPropsWithRef<ElementType>;
export interface HandlerProps {
    preventDefault: boolean;
    stopPropagation: boolean;
    callback: (e: any) => void;
}
//# sourceMappingURL=types.d.ts.map