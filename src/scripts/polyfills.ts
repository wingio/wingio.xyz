if (!import.meta.env.SSR) {
    // @ts-expect-error
    window.setImmediate ??= (cb: Function) => setTimeout(cb, 0);
}
