import { ObjectProps } from "@/types";

export default async function getData(): Promise<ObjectProps[]> {
    const API_KEY = process.env.HARVARD_ART_MUSEUM_API
    try {
        const page = Math.floor(Math.random() * 20000) + 1; // for random page every refresh
        const response = await fetch(`https://api.harvardartmuseums.org/object?apikey=${API_KEY}&size=9&page=${page}`);
        const data = await response.json();
        return data.records;
    }
    catch(error){
        console.log(`There was an error: ${error}`);
        return [];
    }
}