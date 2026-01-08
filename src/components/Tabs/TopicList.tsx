import { Topic } from './types';

interface TopicListProps {
  topics: Topic[];
  selectedTopicId: string;
  onTopicClick: (topicId: string) => void;
}

export default function TopicList({ topics, selectedTopicId, onTopicClick }: TopicListProps) {
  return (
    <div className="text-zinc-900 dark:text-zinc-100">
      <h3 className="text-lg font-semibold mb-4">Topics</h3>
      <ul className="space-y-2">
        {topics.map((topic) => (
          <li key={topic.id}>
            <button
              onClick={() => onTopicClick(topic.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                selectedTopicId === topic.id
                  ? 'bg-zinc-100 text-zinc-900 font-medium dark:bg-zinc-800 dark:text-zinc-50'
                  : 'text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-900'
              }`}
            >
              {topic.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
