// ✏️ TODO: Replace with your actual blog posts or writeups

const POSTS = [
  {
    title:    'How I Solved My First Buffer Overflow CTF Challenge',
    date:     'March 2025',
    readTime: '8 min read',
    tags:     ['CTF', 'Binary Exploitation'],
    href:     '#',
  },
  {
    title:    'Building an ML Model to Classify Network Traffic',
    date:     'February 2025',
    readTime: '12 min read',
    tags:     ['Machine Learning', 'Networking'],
    href:     '#',
  },
  {
    title:    'OSPF vs BGP: When to Use Which and Why',
    date:     'January 2025',
    readTime: '6 min read',
    tags:     ['Networking', 'Routing'],
    href:     '#',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 bg-bg/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">Thoughts & Writeups</p>
          <h2 className="section-title text-white">
            Latest <span className="text-accent">Articles</span>
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {POSTS.map(post => (
            <a key={post.title} href={post.href}
              className="bg-surface border border-border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-accent/50 transition-all duration-300 group block">
              <div className="flex-1">
                <div className="flex flex-wrap gap-3 mb-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs text-accent font-mono">{tag}</span>
                  ))}
                </div>
                <h3 className="font-display font-semibold text-text group-hover:text-white transition-colors leading-snug">
                  {post.title}
                </h3>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 text-xs text-muted shrink-0">
                <span>{post.date}</span>
                <span className="text-border">·</span>
                <span>{post.readTime}</span>
                <svg className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all ml-1 sm:ml-0 sm:mt-2"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-block border border-border text-text px-6 py-3 text-sm hover:border-accent hover:text-accent transition-all">View All Posts →</a>
        </div>
      </div>
    </section>
  )
}
