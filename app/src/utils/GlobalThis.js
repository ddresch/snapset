if (typeof globalThis === 'undefined') {
    window.globalThis = Function('return this')();
}