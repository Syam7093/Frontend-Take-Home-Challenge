import axios from "axios";

const API_KEYS = {
  newsAPI: process.env.REACT_APP_NEWS_API_KEY,
  guardian: process.env.REACT_APP_GUARDIAN_API_KEY,
  nyt: process.env.REACT_APP_NYT_API_KEY,
};

export const fetchNewsAPI = async (query = "latest", filters) => {
  const response = await axios.get(`https://newsapi.org/v2/everything`, {
    params: {
      q: query || "latest",
      from: filters.date || undefined,
      sources: filters.source || undefined,
      apiKey: API_KEYS.newsAPI,
    },
  });
  return response.data.articles;
};

export const fetchGuardian = async (query, filters) => {
  const response = await axios.get(`https://content.guardianapis.com/search`, {
    params: {
      q: query,
      from: filters.date || undefined,
      section: filters.category || undefined,
      "api-key": API_KEYS.guardian,
    },
  });
  return response.data.response.results;
};

export const fetchNYT = async (query, filters) => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json`,
    {
      params: {
        q: query,
        fq: filters.category
          ? `section_name:("${filters.category}")`
          : undefined,
        "api-key": API_KEYS.nyt,
      },
    }
  );
  return response.data.response.docs;
};

export const fetchAllNews = async (query, filters) => {
  const [newsAPI, guardian, nyt] = await Promise.all([
    fetchNewsAPI(query, filters),
    fetchGuardian(query, filters),
    fetchNYT(query, filters),
  ]);

  return [...newsAPI, ...guardian, ...nyt];
};
