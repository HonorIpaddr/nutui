import { PropType, VNode, CSSProperties } from 'vue';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        default: string;
    };
    noFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    noOkBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCancelBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    cancelAutoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    okAutoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    textAlign: {
        type: StringConstructor;
        default: string;
    };
    closeOnPopstate: {
        type: BooleanConstructor;
        default: boolean;
    };
    footerDirection: {
        type: StringConstructor;
        default: string;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    popStyle: {
        type: PropType<CSSProperties>;
    };
    beforeClose: {
        type: FunctionConstructor;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: ObjectConstructor;
        default: () => {};
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleport: {
        type: (StringConstructor | {
            new (): Element;
            prototype: Element;
        })[];
        default: string;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleportDisable: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    overlayStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    closed: (action: string) => void;
    onCancel: () => void;
    onOk: () => void;
    showPopup: import("vue").Ref<boolean>;
    onClickOverlay: () => void;
    contentStyle: import("vue").ComputedRef<CSSProperties>;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "update:visible" | "opened" | "closed" | "update" | "ok")[], "cancel" | "update:visible" | "opened" | "closed" | "update" | "ok", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        default: string;
    };
    noFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    noOkBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCancelBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    cancelAutoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    okAutoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    textAlign: {
        type: StringConstructor;
        default: string;
    };
    closeOnPopstate: {
        type: BooleanConstructor;
        default: boolean;
    };
    footerDirection: {
        type: StringConstructor;
        default: string;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    popStyle: {
        type: PropType<CSSProperties>;
    };
    beforeClose: {
        type: FunctionConstructor;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: ObjectConstructor;
        default: () => {};
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleport: {
        type: (StringConstructor | {
            new (): Element;
            prototype: Element;
        })[];
        default: string;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleportDisable: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    overlayStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & {
    onCancel?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onOpened?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    onUpdate?: ((...args: any[]) => any) | undefined;
    onOk?: ((...args: any[]) => any) | undefined;
}, {
    round: boolean;
    style: Record<string, any>;
    title: string;
    transition: string;
    overlay: boolean;
    visible: boolean;
    zIndex: string | number;
    duration: string | number;
    overlayClass: string;
    lockScroll: boolean;
    overlayStyle: Record<string, any>;
    closeOnClickOverlay: boolean;
    content: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    position: string;
    popClass: string;
    closeable: boolean;
    closeIconPosition: string;
    closeIcon: string;
    destroyOnClose: boolean;
    teleport: string | Element;
    teleportDisable: boolean;
    safeAreaInsetBottom: boolean;
    textAlign: string;
    cancelText: string;
    okText: string;
    noFooter: boolean;
    noOkBtn: boolean;
    noCancelBtn: boolean;
    cancelAutoClose: boolean;
    okAutoClose: boolean;
    closeOnPopstate: boolean;
    footerDirection: string;
    customClass: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutDialog: typeof _default;
    }
}