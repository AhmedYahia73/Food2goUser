import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import { AlertTriangle, Home, RefreshCcw } from 'lucide-react';

export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden p-6 sm:p-10 text-center border border-gray-100">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Oops! Something went wrong.
        </h1>
        
        <p className="text-gray-500 mb-6">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-8 border border-gray-100 text-left overflow-auto max-h-32">
          <p className="text-sm text-red-600 font-mono break-words">
            {error?.statusText || error?.message || 'Unknown Application Error'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-red-50 text-red-600 rounded-xl font-medium hover:bg-red-100 transition-colors duration-200 w-full sm:w-auto"
          >
            <RefreshCcw className="w-4 h-4" />
            Try Again
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors duration-200 shadow-md shadow-red-200 w-full sm:w-auto"
          >
            <Home className="w-4 h-4" />
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
