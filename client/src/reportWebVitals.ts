type PerformanceEntryHandler = (metric: {
  name: string;
  value: number;
  id: string;
}) => void;

const reportWebVitals = (onPerfEntry?: PerformanceEntryHandler): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
