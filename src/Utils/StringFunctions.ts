import { BaseUrlStapi } from "../serviceAPI/Routes";


export default class StringFunction {
    public static getImageUrlFromApi(relativePaths: string): string {
        return BaseUrlStapi + relativePaths
    }
}