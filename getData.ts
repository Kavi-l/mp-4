import { ObjectProps } from "@/types";

export default async function getData(): Promise<ObjectProps[]> {
    const API_KEY = process.env.HARVARD_ART_MUSEUM_API
    try {
        const response = await fetch(`https://api.harvardartmuseums.org/object?apikey=${API_KEY}&size=10`);
        const data = await response.json();
        return data.records;
    }
    catch(error){
        console.log(`There was an error: ${error}`);
        return [];
    }
}