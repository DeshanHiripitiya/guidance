import CodeBlock from './CodeBlock';

export default function GitHubGuide() {
  return (
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
  );
}
