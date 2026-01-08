'use client';

import { useState } from 'react';

type Tab = 'github' | 'other';

interface Topic {
  id: string;
  title: string;
  description: string;
}

const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 px-3 py-1 text-xs font-medium rounded bg-zinc-700 hover:bg-zinc-600 text-white transition-colors"
    >
      {copied ? '✓ Copied!' : 'Copy'}
    </button>
  );
};

const CodeBlock = ({ code }: { code: string }) => {
  return (
    <div className="relative group">
      <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
      <CopyButton code={code} />
    </div>
  );
};

const githubTopics: Topic[] = [
  {
    id: '1',
    title: 'Initialize Git & Create GitHub Repo',
    description: 'interactive-guide',
  },
  {
    id: '2',
    title: 'Getting Started',
    description: 'Learn how to get started with GitHub. Create your account, set up repositories, and make your first commit.',
  },
  {
    id: '3',
    title: 'Repositories',
    description: 'GitHub repositories contain all of your project files and each file\'s revision history. You can discuss and manage your project\'s work within the repository.',
  },
  {
    id: '4',
    title: 'Pull Requests',
    description: 'Pull requests let you tell others about changes you\'ve pushed to a branch in a repository. Once a pull request is opened, you can discuss and review the potential changes.',
  },
  {
    id: '5',
    title: 'Actions',
    description: 'GitHub Actions makes it easy to automate all your software workflows with CI/CD. Build, test, and deploy your code right from GitHub.',
  },
];

const otherTopics: Topic[] = [
  {
    id: '1',
    title: 'Topic One',
    description: 'This is the description for topic one. Add your content here.',
  },
  {
    id: '2',
    title: 'Topic Two',
    description: 'This is the description for topic two. Add your content here.',
  },
  {
    id: '3',
    title: 'Topic Three',
    description: 'This is the description for topic three. Add your content here.',
  },
];

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
      <div className="border-b border-zinc-200 dark:border-zinc-800">
        <nav className="flex gap-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('github')}
            className={`px-1 py-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'github'
                ? 'border-zinc-950 text-zinc-950 dark:border-zinc-50 dark:text-zinc-50'
                : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-300'
            }`}
          >
            GitHub
          </button>
          <button
            onClick={() => setActiveTab('other')}
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
      
      <div className="py-6 flex gap-6 h-[calc(100vh-6rem)]">
        {/* Left side - 1/3 width */}
        <div className="w-1/3 border-r border-zinc-200 dark:border-zinc-800 pr-6 overflow-y-auto">
          <div className="text-zinc-900 dark:text-zinc-100">
            <h3 className="text-lg font-semibold mb-4">Topics</h3>
            <ul className="space-y-2">
              {currentTopics.map((topic) => (
                <li key={topic.id}>
                  <button
                    onClick={() => handleTopicClick(topic.id)}
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
        </div>
        
        {/* Right side - 2/3 width */}
        <div className="w-2/3 overflow-y-auto">
          {selectedTopic && (
            <div className="text-zinc-900 dark:text-zinc-100">
              <h2 className="text-2xl font-semibold mb-6">{selectedTopic.title}</h2>
              {selectedTopic.id === '1' && selectedTopic.description === 'interactive-guide' ? (
                <div className="space-y-6">
                  <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">In this guide, you'll learn:</p>
                    <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                      <li>Why each command is used</li>
                      <li>How to initialize Git properly</li>
                      <li>How to ignore unnecessary files</li>
                      <li>How to create and push a GitHub repository using one single command</li>
                    </ul>

                    <div className="mt-8 space-y-8">
                      <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                        <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50">Step 1: Check Git Installation</h3>
                        <CodeBlock code="git --version" />
                        <div className="mt-3">
                          <p className="font-semibold text-zinc-800 dark:text-zinc-200">Why?</p>
                          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                            <li>This confirms that Git is installed on your system</li>
                            <li>If Git is not installed, none of the version control commands will work</li>
                          </ul>
                        </div>
                      </div>

                      <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                        <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50">Step 2: Initialize a Git Repository</h3>
                        <CodeBlock code="git init" />
                        <div className="mt-3">
                          <p className="font-semibold text-zinc-800 dark:text-zinc-200">Why?</p>
                          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                            <li>Creates a hidden .git folder</li>
                            <li>Turns your project directory into a Git repository</li>
                            <li>Allows Git to track file changes</li>
                            <li>Without this step, Git cannot manage your project history</li>
                          </ul>
                        </div>
                      </div>

                      <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                        <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50">Step 3: Ignore node_modules</h3>
                        <CodeBlock code="echo node_modules > .gitignore" />
                        <div className="mt-3">
                          <p className="font-semibold text-zinc-800 dark:text-zinc-200">Why?</p>
                          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                            <li>node_modules is large and can be regenerated</li>
                            <li>Uploading it makes your repo heavy and slow</li>
                            <li>Best practice is to ignore it and use package.json instead</li>
                            <li>This ensures only necessary source code is pushed to GitHub</li>
                          </ul>
                        </div>
                      </div>

                      <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                        <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50">Step 4: Add Files and Commit</h3>
                        <CodeBlock code={`git add .\ngit commit -m "Initial commit"`} />
                        <div className="mt-3">
                          <p className="font-semibold text-zinc-800 dark:text-zinc-200">Why?</p>
                          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                            <li>git add . stages all project files</li>
                            <li>git commit saves a snapshot of your project</li>
                            <li>Commits help track progress and changes over time</li>
                            <li>GitHub requires at least one commit before pushing</li>
                          </ul>
                        </div>
                      </div>

                      <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                        <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50">Step 5: Check GitHub CLI Installation</h3>
                        <CodeBlock code="gh --version" />
                        <div className="mt-3">
                          <p className="font-semibold text-zinc-800 dark:text-zinc-200">Why?</p>
                          <p className="text-sm mb-2">The GitHub CLI (gh) allows you to:</p>
                          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                            <li>Create repositories</li>
                            <li>Push code</li>
                            <li>Manage issues and PRs</li>
                            <li>—all from the terminal</li>
                          </ul>
                          <p className="text-sm mt-2 text-zinc-600 dark:text-zinc-400">If not installed, you'll need to create repos manually via the browser.</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                        <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50">Step 6: Authenticate with GitHub</h3>
                        <CodeBlock code="gh auth login" />
                        <div className="mt-3">
                          <p className="font-semibold text-zinc-800 dark:text-zinc-200">Why?</p>
                          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                            <li>Connects your terminal to your GitHub account</li>
                            <li>Enables permission to create repositories and push code</li>
                            <li>Authentication is required only once</li>
                            <li>Follow the interactive login steps (browser or token-based)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="border-l-4 border-blue-500 dark:border-blue-600 pl-6 bg-blue-50 dark:bg-blue-950/20 p-4 rounded-r-lg">
                        <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50">Step 7: Create GitHub Repo & Push in ONE Command 🚀</h3>
                        <CodeBlock code="gh repo create my-project-name --public --source=. --remote=origin --push" />
                        <div className="mt-4">
                          <p className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">What This Does (Very Important):</p>
                          <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse border border-zinc-300 dark:border-zinc-700 text-sm">
                              <thead>
                                <tr className="bg-zinc-100 dark:bg-zinc-800">
                                  <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left font-semibold">Option</th>
                                  <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left font-semibold">Meaning</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2"><code className="bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded">my-project-name</code></td>
                                  <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Repository name on GitHub</td>
                                </tr>
                                <tr>
                                  <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2"><code className="bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded">--public</code></td>
                                  <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Makes the repo public</td>
                                </tr>
                                <tr>
                                  <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2"><code className="bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded">--source=.</code></td>
                                  <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Uses current directory</td>
                                </tr>
                                <tr>
                                  <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2"><code className="bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded">--remote=origin</code></td>
                                  <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Sets GitHub as remote</td>
                                </tr>
                                <tr>
                                  <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2"><code className="bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded">--push</code></td>
                                  <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">Pushes code immediately</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="mt-4 font-semibold text-zinc-800 dark:text-zinc-200">This single command:</p>
                          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                            <li>Creates the GitHub repository</li>
                            <li>Links it as origin</li>
                            <li>Pushes your local commits</li>
                            <li>No browser. No copy-paste. Fully automated.</li>
                          </ul>
                        </div>
                      </div>

                      <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                        <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50">Step 8: Verify Remote Repository</h3>
                        <CodeBlock code="git remote -v" />
                        <div className="mt-3">
                          <p className="font-semibold text-zinc-800 dark:text-zinc-200">Why?</p>
                          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                            <li>Confirms your local repo is connected to GitHub</li>
                            <li>Shows fetch and push URLs</li>
                            <li>Helps debug remote-related issues</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50">Conclusion</h3>
                        <p className="text-zinc-700 dark:text-zinc-300 mb-3">Using Git and GitHub directly from the terminal:</p>
                        <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                          <li>Saves time ⚡</li>
                          <li>Improves developer workflow</li>
                          <li>Looks professional in real-world projects</li>
                          <li>Is essential for backend, frontend, and blockchain developers</li>
                        </ul>
                        <p className="mt-4 text-zinc-700 dark:text-zinc-300">Once you master this flow, deploying apps (Next.js, Node.js, Web3 projects) becomes much smoother.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div 
                  className="prose prose-zinc dark:prose-invert max-w-none"
                >
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {selectedTopic.description}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
