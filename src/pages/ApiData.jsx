import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const postsPerPage = 10;

  const fetchPosts = async (pageNum = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=${postsPerPage}`
      );
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(prev => pageNum === 1 ? data : [...prev, ...data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            API Data
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Fetching data from JSONPlaceholder API
          </p>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <div className="flex gap-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search posts..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        </Card>

        {/* Error State */}
        {error && (
          <Card className="mb-6 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
            <div className="text-red-700 dark:text-red-400 text-center">
              Error: {error}
            </div>
            <div className="text-center mt-4">
              <Button variant="primary" onClick={() => fetchPosts(1)}>
                Retry
              </Button>
            </div>
          </Card>
        )}

        {/* Loading State */}
        {loading && page === 1 && (
          <Card className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400 text-lg">
              Loading posts...
            </div>
          </Card>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="animate-slide-up" hover>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                {post.body}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-xs text-blue-600 dark:text-blue-400">
                  Post ID: {post.id}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {!loading && filteredPosts.length === 0 && posts.length > 0 && (
          <Card className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No posts match your search.
            </p>
          </Card>
        )}

        {/* Load More Button */}
        {!loading && posts.length > 0 && filteredPosts.length > 0 && (
          <div className="text-center">
            <Button
              variant="primary"
              onClick={loadMore}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiData;