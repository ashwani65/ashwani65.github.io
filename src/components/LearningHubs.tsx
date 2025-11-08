import React from 'react';

interface Hub {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

const hubs: Hub[] = [
  {
    id: 101,
    title: "Interactive PyTorch Guide",
    description: "Responsive single-page learning hub covering PyTorch foundations, architectures, transfer learning, engineering, and more.",
    technologies: ["HTML", "Tailwind", "Chart.js"],
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/ashwani65/interactive-pytorch-guide",
    liveUrl: "https://ashwani65.github.io/interactive-pytorch-guide/"
  },
  {
    id: 102,
    title: "AI Engineering Notes",
    description: "Curated AI engineering content and resources across foundations, building, deploying, optimizing, and safety.",
    technologies: ["HTML", "Docs", "Mind Map"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/ashwani65/ai-engineering",
    liveUrl: "https://ashwani65.github.io/ai-engineering/"
  }
];

export const LearningHubs: React.FC = () => {
  return (
    <section id="hubs" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learning Hubs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Public mini-sites and guides I built to learn and share knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {hubs.map((hub) => (
            <div
              key={hub.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hub.image}
                  alt={hub.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {hub.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {hub.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {hub.technologies.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-sm rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={hub.githubUrl}
                    target="_blank" rel="noreferrer"
                    className="flex-1 bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                  {hub.liveUrl && (
                    <a
                      href={hub.liveUrl}
                      target="_blank" rel="noreferrer"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

