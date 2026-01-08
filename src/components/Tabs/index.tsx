'use client';

import { useState } from 'react';
import { Tab } from './types';
import { githubTopics, otherTopics } from './data';
import TabNavigation from './TabNavigation';
import TopicList from './TopicList';
import TopicContent from './TopicContent';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<Tab>('github');
  const [selectedGithubTopic, setSelectedGithubTopic] = useState<string>(githubTopics[0].id);
  const [selectedOtherTopic, setSelectedOtherTopic] = useState<string>(otherTopics[0].id);

  const currentTopics = activeTab === 'github' ? githubTopics : otherTopics;
  const selectedTopicId = activeTab === 'github' ? selectedGithubTopic : selectedOtherTopic;
  const selectedTopic = currentTopics.find(t => t.id === selectedTopicId);

  const handleTopicClick = (topicId: string) => {
    if (activeTab === 'github') {
      setSelectedGithubTopic(topicId);
    } else {
      setSelectedOtherTopic(topicId);
    }
  };

  return (
    <div className="w-full">
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="py-6 flex gap-6 h-[calc(100vh-6rem)]">
        {/* Left side - 1/3 width */}
        <div className="w-1/3 border-r border-zinc-200 dark:border-zinc-800 pr-6 overflow-y-auto">
          <TopicList 
            topics={currentTopics} 
            selectedTopicId={selectedTopicId} 
            onTopicClick={handleTopicClick} 
          />
        </div>
        
        {/* Right side - 2/3 width */}
        <div className="w-2/3 overflow-y-auto">
          {selectedTopic && <TopicContent topic={selectedTopic} />}
        </div>
      </div>
    </div>
  );
}
