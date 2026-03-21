import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: '5 Ways to Reduce Textile Waste at Home',
      excerpt: 'Simple steps you can take today to minimize your environmental impact...',
      date: 'March 15, 2026',
      category: 'Sustainability'
    },
    {
      id: 2,
      title: 'The Journey of a Recycled Pillow',
      excerpt: 'Follow the transformation from textile waste to your favorite throw pillow...',
      date: 'March 10, 2026',
      category: 'Behind the Scenes'
    },
    {
      id: 3,
      title: 'Choosing Safe Toys for Your Children',
      excerpt: 'What to look for when selecting eco-friendly and safe toys...',
      date: 'March 5, 2026',
      category: 'Parenting'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">Blog</h1>
          <p className="text-gray-600">Stories, tips, and insights on sustainable living</p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm bg-leaf-green/10 text-leaf-green px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <h2 className="text-2xl font-heading font-bold mb-3 hover:text-leaf-green">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-leaf-green font-semibold hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
