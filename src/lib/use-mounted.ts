import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

// Retorna `false` durante o SSR e no primeiro render do cliente (mesmo
// resultado em ambos, evitando erro de hidratação) e `true` depois que o
// componente já está montado no navegador.
export function useMounted() {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
