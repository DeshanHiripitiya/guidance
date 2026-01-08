import { Topic } from './types';
import GitHubGuide from './GitHubGuide';

interface TopicContentProps {
  topic: Topic;
}

export default function TopicContent({ topic }: TopicContentProps) {
  return (
    <div className="text-zinc-900 dark:text-zinc-100">
      <h2 className="text-2xl font-semibold mb-6">{topic.title}</h2>
      {topic.id === '1' && topic.description === 'interactive-guide' ? (
        <GitHubGuide />
      ) : (
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {topic.description}
          </p>
        </div>
      )}
    </div>
  );
}
