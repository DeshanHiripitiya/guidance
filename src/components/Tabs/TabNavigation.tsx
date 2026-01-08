import { Tab } from './types';

interface TabNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800">
      <nav className="flex gap-8" aria-label="Tabs">
        <button
          onClick={() => onTabChange('github')}
          className={`px-1 py-4 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'github'
              ? 'border-zinc-950 text-zinc-950 dark:border-zinc-50 dark:text-zinc-50'
              : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-300'
          }`}
        >
          GitHub
        </button>
        <button
          onClick={() => onTabChange('other')}
          className={`px-1 py-4 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'other'
              ? 'border-zinc-950 text-zinc-950 dark:border-zinc-50 dark:text-zinc-50'
              : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-300'
          }`}
        >
          Other
        </button>
      </nav>
    </div>
  );
}
