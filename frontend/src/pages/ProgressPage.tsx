import React from 'react';

export const ProgressPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Your Progress
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Overall Progress
            </h3>
            <p className="text-gray-600">
              Progress charts and analytics coming soon!
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Sessions
            </h3>
            <p className="text-gray-600">
              Session history and scores coming soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};