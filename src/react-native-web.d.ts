/// <reference types="react-native-web" />

declare module 'react-native' {
    import * as RNW from 'react-native-web';
    export * from 'react-native-web';

    // Bridge for JSX components that TS might struggle to resolve
    export const View: React.ComponentType<any>;
    export const Text: React.ComponentType<any>;
    export const ScrollView: React.ComponentType<any>;
    export const Image: React.ComponentType<any>;
    export const TextInput: React.ComponentType<any>;
    export const Pressable: React.ComponentType<any>;
    export const TouchableOpacity: React.ComponentType<any>;
    export namespace Platform {
        export const OS: 'ios' | 'android' | 'web';
        export function select<T>(specifics: { ios?: T; android?: T; web?: T; default?: T }): T;
    }
}