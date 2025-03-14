import React, { useState, useEffect } from 'react';
import { mockDataService, MockDataConfig } from '@grassapp/shared-types/config/mockData';
import { Switch } from '@headlessui/react';

export const MockDataControl: React.FC = () => {
  const [config, setConfig] = useState<MockDataConfig>(mockDataService.getConfig());

  useEffect(() => {
    // Sync local state with service config
    setConfig(mockDataService.getConfig());
  }, []);

  const handleToggleMock = (enabled: boolean) => {
    mockDataService.toggleMock(enabled);
    setConfig({ ...config, enabled });
  };

  const handleSyncIntervalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1000) {
      mockDataService.setConfig({ syncInterval: value });
      setConfig({ ...config, syncInterval: value });
    }
  };

  const handleLatencyToggle = (simulateLatency: boolean) => {
    mockDataService.setConfig({ simulateLatency });
    setConfig({ ...config, simulateLatency });
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Mock Data Controls</h2>
      
      <div className="space-y-4">
        {/* Mock Data Toggle */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Enable Mock Data</span>
          <Switch
            checked={config.enabled}
            onChange={handleToggleMock}
            className={`${
              config.enabled ? 'bg-green-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
          >
            <span
              className={`${
                config.enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>

        {/* Sync Interval Control */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Sync Interval (ms)</span>
          <input
            type="number"
            min="1000"
            step="1000"
            value={config.syncInterval}
            onChange={handleSyncIntervalChange}
            className="border rounded px-3 py-1 w-32 text-right"
            disabled={!config.enabled}
          />
        </div>

        {/* Latency Simulation */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Simulate Network Latency</span>
          <Switch
            checked={config.simulateLatency}
            onChange={handleLatencyToggle}
            disabled={!config.enabled}
            className={`${
              config.simulateLatency && config.enabled ? 'bg-green-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
          >
            <span
              className={`${
                config.simulateLatency ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>

        {/* Status Indicator */}
        <div className="mt-4 p-3 bg-gray-50 rounded-md">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${config.enabled ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-sm text-gray-600">
              Mock Data is currently {config.enabled ? 'enabled' : 'disabled'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}; 