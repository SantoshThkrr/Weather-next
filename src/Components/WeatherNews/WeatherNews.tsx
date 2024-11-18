"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { WeatherPost, WordPressTag } from '../Type/Types';



// Main Component
const WeatherForecast = () => {
  const [posts, setPosts] = useState<WeatherPost[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 9;

  // Fetch data function
  const fetchWeatherData = async (page: number) => {
    try {
      setLoading(true);
      const baseUrl = 'https://news24online.com/wp-json/wp/v2';
      
      const tagsResponse = await fetch(`${baseUrl}/tags?slug=weather-forecast`);
      const tags: WordPressTag[] = await tagsResponse.json();
      
      if (!tags.length) {
        throw new Error('Weather forecast tag not found');
      }

      const tagId = tags[0].id;
      const postsResponse = await fetch(
        `${baseUrl}/posts?tags=${tagId}&per_page=${postsPerPage}&page=${page}&_embed`
      );
      
      // Get total pages from headers
      // const totalPosts = parseInt(postsResponse.headers.get('X-WP-Total') || '0');
      const totalPagesCount = parseInt(postsResponse.headers.get('X-WP-TotalPages') || '1');
      setTotalPages(totalPagesCount);

      const newPosts: WeatherPost[] = await postsResponse.json();
      setPosts(newPosts);
      setError('');
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch weather forecast data');
    } finally {
      setLoading(false);
    }
  };

  // Handle page changes
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // Fetch data when page changes
  useEffect(() => {
    fetchWeatherData(currentPage);
  }, [currentPage]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h1 className="text-2xl text-red-600">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Weather Forecast</h1>
        {/* <button 
          onClick={() => fetchWeatherData(currentPage)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refresh
        </button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <Link href={post.link} target="_blank">
              {post.jetpack_featured_media_url ? (
                <Image
                  src={post.jetpack_featured_media_url}
                  alt={post.title.rendered}
                  width={500}
                  height={500}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
              <h2 className="text-xl font-semibold mb-2 mt-3">
                {post.title.rendered}
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Published: {new Date(post.date).toLocaleDateString()}
              </p>
            </Link>
          </article>
        ))}
      </div>
      {posts.length === 0 && !loading && !error && (
        <p className="text-center text-gray-500 mt-8">No weather forecasts available</p>
      )}
      
      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button 
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={cn(
            'px-4 py-2 rounded-md text-white',
            'bg-blue-500 hover:bg-blue-600 transition-colors duration-300',
            'disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50',
            'focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2'
          )}
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button 
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={cn(
            'px-4 py-2 rounded-md text-white',
            'bg-blue-500 hover:bg-blue-600 transition-colors duration-300',
            'disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50',
            'focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2'
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WeatherForecast;