// globals.d.ts
export { };

declare global {
  interface Window {
    THREE: typeof import('three');
  }
}

declare global {
  interface Window {
    innerHeight: number;
    Highcharts: typeof import('highcharts');
  }
}

declare module 'd3' {
  export * from 'd3';
}