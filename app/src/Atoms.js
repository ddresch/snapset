import { atom } from 'recoil'

export const accountConnectionState = atom({
    key: 'accountConnectionState',
    default: false,
});

export const accountSignerState = atom({
    key: 'accountSignerState',
    default: null,
});

export const accountAddressState = atom({
    key: 'accountAddressState',
    default: null,
});