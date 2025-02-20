export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.pathname.startsWith('/api/')) {
      return new Response('Not Found', { status: 404 })
    }
    
    try {
      // Add a timestamp to break the cache
      url.searchParams.set('t', Date.now().toString())
      const response = await fetch(request)
      return response
    } catch (e) {
      return new Response('Error', { status: 500 })
    }
  },
} 