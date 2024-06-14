export const getGif = async(esperando) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Cup00ldxZfFFkNsZWRAvRwsCyVj79s68&q=${esperando}&limit=5`;
    const resp  =  await fetch(url);
    const { data } = await resp.json();
    // console.log(data);

    const gifs = data.map(img => ({
        id: img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }))

    //  console.log(gifs);
    return gifs;
}
