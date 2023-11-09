import React from 'react';

export default class ErrorBoundary extends React.Component {
     constructor(props) {
          super(props);
          this.state = { hasError: false }
     }
     static getDerivedStateFromError(error) {
          // Update state so the next render will show the fallback UI.
          return { hasError: true };
     }

     componentDidCatch(error, errorInfo) {
          // You can also log the error to an error reporting service
          // console.log(error, errorInfo);
     }

     render() {
          if (this.state.hasError) {
               // You can render any custom fallback UI
               return <div className="flex flex-col items-center justify-center w-1/2 h-full m-auto">
                    <h2 className="p-4 text-red-600 bg-red-100 rounded">Something went wrong. Please contact developper.</h2>
               </div>;
          }
          return this.props.children;
     }
}
