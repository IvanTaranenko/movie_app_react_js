const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '65496bc66137fccb297cd6e812b6d401',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
    search: 'https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1',
}

export default apiConfig;