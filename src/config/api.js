export const getMovieById = async (id, apikey) => {
    // const apiKey = process.env.apikey;
    const url = `http://www.omdbapi.com/?i=${id}&apikey=a59b36b6`;
  
    try {
      const response = await fetch(url, { method: 'GET' });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.Response === 'False') {
        throw new Error(data.Error);
      }
  
      return data;
    } catch (error) {
      console.error('Error fetching movie by ID:', error);
      return { Error: error.message };
    }
  };
  